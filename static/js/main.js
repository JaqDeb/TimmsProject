// Array to store user answers
let answers = [];

// Questions array
const questions = [
    {
        question: "I am generally positive and optimistic",
        options: [
            { text: "Never", value: 0, profile: "Starter" },
            { text: "Sometimes", value: 1, profile: "Starter" },
            { text: "Often", value: 4, profile: "Starter" },
            { text: "Always", value: 8, profile: "Starter" }
        ]
    },
    {
        question: "I often share new and exciting things with others",
        options: [
            { text: "Never", value: 0, profile: "Trainer" },
            { text: "Sometimes", value: 1, profile: "Trainer" },
            { text: "Often", value: 4, profile: "Trainer" },
            { text: "Always", value: 8, profile: "Trainer" }
        ]
    },
    {
        question: "I will spend more if I believe something is worth it",
        options: [
            { text: "Never", value: 0, profile: "Merchant" },
            { text: "Sometimes", value: 1, profile: "Merchant" },
            { text: "Often", value: 4, profile: "Merchant" },
            { text: "Always", value: 8, profile: "Merchant" }
        ]
    },
    {
        question: "I love turning someone's vision into a reality",
        options: [
            { text: "Never", value: 0, profile: "Solver" },
            { text: "Sometimes", value: 1, profile: "Solver" },
            { text: "Often", value: 4, profile: "Solver" },
            { text: "Always", value: 8, profile: "Solver" }
        ]
    },
    {
        question: "People appreciate my guidance",
        options: [
            { text: "Never", value: 0, profile: "Leader" },
            { text: "Sometimes", value: 1, profile: "Leader" },
            { text: "Often", value: 4, profile: "Leader" },
            { text: "Always", value: 8, profile: "Leader" }
        ]
    },
    {
        question: "I love giving shape to my thoughts (in words, pictures, music…)",
        options: [
            { text: "Never", value: 0, profile: "Revealer" },
            { text: "Sometimes", value: 1, profile: "Revealer" },
            { text: "Often", value: 4, profile: "Revealer" },
            { text: "Always", value: 8, profile: "Revealer" }
        ]
    },
    {
        question: "I look for opportunities to help people",
        options: [
            { text: "Never", value: 0, profile: "Connector" },
            { text: "Sometimes", value: 1, profile: "Connector" },
            { text: "Often", value: 4, profile: "Connector" },
            { text: "Always", value: 8, profile: "Connector" }
        ]
    },
    {
        question: "I love explaining difficult concepts",
        options: [
            { text: "Never", value: 0, profile: "Trainer" },
            { text: "Sometimes", value: 1, profile: "Trainer" },
            { text: "Often", value: 4, profile: "Trainer" },
            { text: "Always", value: 8, profile: "Trainer" }
        ]
    },
    {
        question: "I become excited when I can do things with my hands",
        options: [
            { text: "Never", value: 0, profile: "Solver" },
            { text: "Sometimes", value: 1, profile: "Solver" },
            { text: "Often", value: 4, profile: "Solver" },
            { text: "Always", value: 8, profile: "Solver" }
        ]
    },
    {
        question: "I am quick to see things that others overlook or do not see",
        options: [
            { text: "Never", value: 0, profile: "Revealer" },
            { text: "Sometimes", value: 1, profile: "Revealer" },
            { text: "Often", value: 4, profile: "Revealer" },
            { text: "Always", value: 8, profile: "Revealer" }
        ]
    },
    {
        question: "Budgeting and managing spending comes natural to me",
        options: [
            { text: "Never", value: 0, profile: "Merchant" },
            { text: "Sometimes", value: 1, profile: "Merchant" },
            { text: "Often", value: 4, profile: "Merchant" },
            { text: "Always", value: 8, profile: "Merchant" }
        ]
    },
    {
        question: "I enjoy uplifting communities by starting projects that might help them",
        options: [
            { text: "Never", value: 0, profile: "Starter" },
            { text: "Sometimes", value: 1, profile: "Starter" },
            { text: "Often", value: 4, profile: "Starter" },
            { text: "Always", value: 8, profile: "Starter" }
        ]
    },
    {
        question: "I find ways to redistribute money so that more can be achieved with it",
        options: [
            { text: "Never", value: 0, profile: "Merchant" },
            { text: "Sometimes", value: 1, profile: "Merchant" },
            { text: "Often", value: 4, profile: "Merchant" },
            { text: "Always", value: 8, profile: "Merchant" }
        ]
    },
    {
        question: "Motivating people gets me energized",
        options: [
            { text: "Never", value: 0, profile: "Leader" },
            { text: "Sometimes", value: 1, profile: "Leader" },
            { text: "Often", value: 4, profile: "Leader" },
            { text: "Always", value: 8, profile: "Leader" }
        ]
    },
    {
        question: "Sharing a helpful perspective comes natural to me",
        options: [
            { text: "Never", value: 0, profile: "Starter" },
            { text: "Sometimes", value: 1, profile: "Starter" },
            { text: "Often", value: 4, profile: "Starter" },
            { text: "Always", value: 8, profile: "Starter" }
        ]
    },
    {
        question: "I am happy when I can support people’s endeavours that I believe to be important",
        options: [
            { text: "Never", value: 0, profile: "Connector" },
            { text: "Sometimes", value: 1, profile: "Connector" },
            { text: "Often", value: 4, profile: "Connector" },
            { text: "Always", value: 8, profile: "Connector" }
        ]
    },
    {
        question: "I get frustrated if a discussion does not reach a conclusion",
        options: [
            { text: "Never", value: 0, profile: "Leader" },
            { text: "Sometimes", value: 1, profile: "Leader" },
            { text: "Often", value: 4, profile: "Leader" },
            { text: "Always", value: 8, profile: "Leader" }
        ]
    },
    {
        question: "I experience a sense of fulfilment when my knowledge helps others to progress",
        options: [
            { text: "Never", value: 0, profile: "Trainer" },
            { text: "Sometimes", value: 1, profile: "Trainer" },
            { text: "Often", value: 4, profile: "Trainer" },
            { text: "Always", value: 8, profile: "Trainer" }
        ]
    },
    {
        question: "I seek to understand and reflect on the struggles of life by making it more relatable",
        options: [
            { text: "Never", value: 0, profile: "Revealer" },
            { text: "Sometimes", value: 1, profile: "Revealer" },
            { text: "Often", value: 4, profile: "Revealer" },
            { text: "Always", value: 8, profile: "Revealer" }
        ]
    },
    {
        question: "I love finding ways to make things work better",
        options: [
            { text: "Never", value: 0, profile: "Starter" },
            { text: "Sometimes", value: 1, profile: "Starter" },
            { text: "Often", value: 4, profile: "Starter" },
            { text: "Always", value: 8, profile: "Starter" }
        ]
    },
    {
        question: "I am naturally social and easily drawn to people",
        options: [
            { text: "Never", value: 0, profile: "Connector" },
            { text: "Sometimes", value: 1, profile: "Connector" },
            { text: "Often", value: 4, profile: "Connector" },
            { text: "Always", value: 8, profile: "Connector" }
        ]
    },
    {
        question: "Since I can remember I have always loved finding new ways to turn a profit",
        options: [
            { text: "Never", value: 0, profile: "Merchant" },
            { text: "Sometimes", value: 1, profile: "Merchant" },
            { text: "Often", value: 4, profile: "Merchant" },
            { text: "Always", value: 8, profile: "Merchant" }
        ]
    },
    {
        question: "I love being behind the scenes and making sure that things run smoothly",
        options: [
            { text: "Never", value: 0, profile: "Solver" },
            { text: "Sometimes", value: 1, profile: "Solver" },
            { text: "Often", value: 4, profile: "Solver" },
            { text: "Always", value: 8, profile: "Solver" }
        ]
    },
    {
        question: "When researching something, I feel invigorated",
        options: [
            { text: "Never", value: 0, profile: "Trainer" },
            { text: "Sometimes", value: 1, profile: "Trainer" },
            { text: "Often", value: 4, profile: "Trainer" },
            { text: "Always", value: 8, profile: "Trainer" }
        ]
    },
    {
        question: "I find practical ways of fixing things or situations",
        options: [
            { text: "Never", value: 0, profile: "Solver" },
            { text: "Sometimes", value: 1, profile: "Solver" },
            { text: "Often", value: 4, profile: "Solver" },
            { text: "Always", value: 8, profile: "Solver" }
        ]
    },
    {
        question: "I am most pleased when I can help others to develop and grow",
        options: [
            { text: "Never", value: 0, profile: "Leader" },
            { text: "Sometimes", value: 1, profile: "Leader" },
            { text: "Often", value: 4, profile: "Leader" },
            { text: "Always", value: 8, profile: "Leader" }
        ]
    },
    {
        question: "I can feel and interpret other people's experiences",
        options: [
            { text: "Never", value: 0, profile: "Revealer" },
            { text: "Sometimes", value: 1, profile: "Revealing" },
            { text: "Often", value: 4, profile: "Revealing" },
            { text: "Always", value: 8, profile: "Revealing" }
        ]
    },
    {
        question: "I am able to put myself in the shoes of others",
        options: [
            { text: "Never", value: 0, profile: "Connector" },
            { text: "Sometimes", value: 1, profile: "Connector" },
            { text: "Often", value: 4, profile: "Connector" },
            { text: "Always", value: 8, profile: "Connector" }
        ]
    },
    {
        question: "I carefully consider how to use my resources and/or invest my money",
        options: [
            { text: "Never", value: 0, profile: "Merchant" },
            { text: "Sometimes", value: 1, profile: "Merchant" },
            { text: "Often", value: 4, profile: "Merchant" },
            { text: "Always", value: 8, profile: "Merchant" }
        ]
    },
    {
        question: "I like reminding people of why we are doing something when they become unmotivated or disorganised",
        options: [
            { text: "Never", value: 0, profile: "Leader" },
            { text: "Sometimes", value: 1, profile: "Leader" },
            { text: "Often", value: 4, profile: "Leader" },
            { text: "Always", value: 8, profile: "Leader" }
        ]
    },
    {
        question: "Innovating comes natural to me",
        options: [
            { text: "Never", value: 0, profile: "Starter" },
            { text: "Sometimes", value: 1, profile: "Starter" },
            { text: "Often", value: 4, profile: "Starter" },
            { text: "Always", value: 8, profile: "Starter" }
        ]
    },
    {
        question: "I look for opportunities to share my knowledge with others.",
        options: [
            { text: "Never", value: 0, profile: "Trainer" },
            { text: "Sometimes", value: 1, profile: "Trainer" },
            { text: "Often", value: 4, profile: "Trainer" },
            { text: "Always", value: 8, profile: "Trainer" }
        ]
    },
    {
        question: "I am determined to find a solution to a problem",
        options: [
            { text: "Never", value: 0, profile: "Solver" },
            { text: "Sometimes", value: 1, profile: "Solver" },
            { text: "Often", value: 4, profile: "Solver" },
            { text: "Always", value: 8, profile: "Solver" }
        ]
    },
    {
        question: "Helping someone to realize their potential makes me happy",
        options: [
            { text: "Never", value: 0, profile: "Starter" },
            { text: "Sometimes", value: 1, profile: "Starter" },
            { text: "Often", value: 4, profile: "Starter" },
            { text: "Always", value: 8, profile: "Starter" }
        ]
    },
    {
        question: "I enjoy thought-provoking conversations",
        options: [
            { text: "Never", value: 0, profile: "Trainer" },
            { text: "Sometimes", value: 1, profile: "Trainer" },
            { text: "Often", value: 4, profile: "Trainer" },
            { text: "Always", value: 8, profile: "Trainer" }
        ]
    },
    {
        question: "I rely on my intuition when I create",
        options: [
            { text: "Never", value: 0, profile: "Revealer" },
            { text: "Sometimes", value: 1, profile: "Revealer" },
            { text: "Often", value: 4, profile: "Revealer" },
            { text: "Always", value: 8, profile: "Revealer" }
        ]
    },
    {
        question: "I feel energized (rather than exhausted) when I have helped someone.",
        options: [
            { text: "Never", value: 0, profile: "Connector" },
            { text: "Sometimes", value: 1, profile: "Connector" },
            { text: "Often", value: 4, profile: "Connector" },
            { text: "Always", value: 8, profile: "Connector" }
        ]
    },
    {
        question: "I'm excited when I find new ways to invest my money/time/resources",
        options: [
            { text: "Never", value: 0, profile: "Merchant" },
            { text: "Sometimes", value: 1, profile: "Merchant" },
            { text: "Often", value: 4, profile: "Merchant" },
            { text: "Always", value: 8, profile: "Merchant" }
        ]
    },
    {
        question: "I'm ready to resolve a situation if I am able to do so",
        options: [
            { text: "Never", value: 0, profile: "Solver" },
            { text: "Sometimes", value: 1, profile: "Solver" },
            { text: "Often", value: 4, profile: "Solver" },
            { text: "Always", value: 8, profile: "Solver" }
        ]
    },
    {
        question: "I look for opportunities to direct people towards a goal.",
        options: [
            { text: "Never", value: 0, profile: "Leader" },
            { text: "Sometimes", value: 1, profile: "Leader" },
            { text: "Often", value: 4, profile: "Leader" },
            { text: "Always", value: 8, profile: "Leader" }
        ]
    },
    {
        question: "I stand up for people who are being mistreated",
        options: [
            { text: "Never", value: 0, profile: "Connector" },
            { text: "Sometimes", value: 1, profile: "Connector" },
            { text: "Often", value: 4, profile: "Connector" },
            { text: "Always", value: 8, profile: "Connector" }
        ]
    },
    {
        question: "I feel alive when I can express myself",
        options: [
            { text: "Never", value: 0, profile: "Revealer" },
            { text: "Sometimes", value: 1, profile: "Revealer" },
            { text: "Often", value: 4, profile: "Revealer" },
            { text: "Always", value: 8, profile: "Revealer" }
        ]
    }
];

// Current question