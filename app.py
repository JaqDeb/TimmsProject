from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///personality_test.db'
app.config['SECRET_KEY'] = 'your-secret-key-here'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    answers = db.Column(db.Text, nullable=False)
    results = db.Column(db.Text, nullable=False)
    date_taken = db.Column(db.DateTime, default=datetime.utcnow)

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    user = User(
        name=data['name'],
        email=data['email'],
        answers=json.dumps(data['answers']),
        results=json.dumps(data['results'])
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({'success': True})

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/get_results')
def get_results():
    users = User.query.all()
    results = []
    for user in users:
        results.append({
            'name': user.name,
            'email': user.email,
            'answers': json.loads(user.answers),
            'results': json.loads(user.results),
            'date': user.date_taken.strftime('%Y-%m-%d %H:%M:%S')
        })
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)