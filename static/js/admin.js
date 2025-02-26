document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'Admin' && password === 'Admin') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('results-container').style.display = 'block';
        loadResults();
    } else {
        alert('Invalid credentials');
    }
};

async function loadResults() {
    try {
        const response = await fetch('/get_results');
        const results = await response.json();
        
        const tbody = document.getElementById('results-table');
        tbody.innerHTML = '';
        
        results.forEach(result => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${result.date}</td>
                <td>${result.name}</td>
                <td>${result.email}</td>
                <td>${JSON.stringify(result.results)}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="exportResult(${JSON.stringify(result)})">Export</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Error loading results');
    }
}

function exportResult(result) {
    const data = JSON.stringify(result, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `personality-test-${result.name}-${result.date}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}