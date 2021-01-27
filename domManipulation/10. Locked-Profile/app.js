function lockedProfile() {
    const mainRef = document.getElementById('main');
    mainRef.addEventListener('click', showHide);


    function showHide(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Show more') {
            const profileDiv = ev.target.parentNode;

            if (!profileDiv.querySelector('input[value="lock"]:checked')) {
                ev.target.previousElementSibling.style.display = 'block';
                ev.target.textContent = 'Hide it';
            }

        } else if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Hide it') {
            const profileDiv = ev.target.parentNode;

            if (!profileDiv.querySelector('input[value="lock"]:checked')) {
                ev.target.previousElementSibling.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }

    }
}