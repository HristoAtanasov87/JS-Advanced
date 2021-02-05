function solve() {
    const sectionsRef = document.querySelectorAll('section');
    const questions = Array.from(sectionsRef);
    const quizRef = document.getElementById('quizzie');
    const resultRef = document.getElementById('results');

    quizRef.addEventListener('click', checkAnswer);

    const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

    let section = questions.shift();

    function checkAnswer(ev) {
        if (ev.target.tagName !== 'P') {
            return;
        }

        if (ev.target.textContent === correctAnswers.shift()) {
            correctAnswers.push(1);
        }

        section.style.display = 'none';
        section = questions.shift();

        if (section === undefined) {
            resultRef.style.display = 'block';
            if (correctAnswers.length === sectionsRef.length) {
                resultRef.children[0].children[0].textContent = 'You are recognized as top JavaScript fan!';
            } else {
                resultRef.children[0].children[0].textContent = `You have ${correctAnswers.length} right answers`;
            }
        } else {
            section.style.display = 'block';
        }
    }
}
