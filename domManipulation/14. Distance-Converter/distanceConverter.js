function attachEventsListeners() {
    const button = document.getElementById('convert').addEventListener('click', convertIt);
    const output = document.getElementById('outputDistance');

    function convertIt(ev) {
        const options = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };

        const readingToConvert = Number(document.getElementById('inputDistance').value);
        const fromOptions = document.getElementById('inputUnits');
        const toOptions = document.getElementById('outputUnits');

        const from = fromOptions.children[fromOptions.selectedIndex].value;
        const to = toOptions.children[toOptions.selectedIndex].value;



        inputToMeters = options[from] * readingToConvert;
        output.value = inputToMeters / options[to];
    }
}