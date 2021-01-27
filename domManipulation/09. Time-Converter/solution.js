function attachEventsListeners() {
    const mainRef = document.querySelector('main')
    mainRef.addEventListener('click', convertIt);

    const daysRef = document.getElementById('days');
    const hoursRef = document.getElementById('hours');
    const minsRef = document.getElementById('minutes');
    const secsRef = document.getElementById('seconds');

    function convertIt(ev) {
        if (ev.target.type === 'button') {
            let inputValue = 0;
            let inputDimension = '';

            const inputValueArray = Array.from(ev.target.parentNode.parentNode.querySelectorAll('input[type="text"]'));
            console.log(inputValueArray);

            inputValueArray.forEach(el => {
                if (el.value != '') {
                    inputValue = Number(el.value);
                    inputDimension = el.id;
                }
            })

            const dimensions = {
                days: (inputValue) => {
                    secsRef.value = inputValue * 24 * 60 * 60;
                    minsRef.value = inputValue * 24 * 60;
                    hoursRef.value = inputValue * 24;
                },
                hours: (inputValue) => {
                    secsRef.value = inputValue * 60 * 60;
                    minsRef.value = inputValue * 60;
                    daysRef.value = inputValue / 24;
                },
                minutes: (inputValue) => {
                    secsRef.value = inputValue * 60;
                    hoursRef.value = inputValue / 60;
                    daysRef.value = inputValue / 60 / 24;
                },
                seconds: (inputValue) => {
                    minsRef.value = inputValue / 60;
                    hoursRef.value = inputValue / 60 / 60;
                    daysRef.value = inputValue / 60 / 60 / 24;
                }
            }

            dimensions[inputDimension](inputValue);
        }
    }
}