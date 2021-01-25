function solve() {
    document.querySelector('button').addEventListener('click', onClick);
    const selectToRef = document.getElementById('selectMenuTo');

    const newOptionOne = document.createElement('option');
    const newOptionTwo = document.createElement('option');
    newOptionOne.value = 'binary';
    newOptionTwo.value = 'hexadecimal';
    newOptionOne.textContent = 'Binary';
    newOptionTwo.textContent = 'Hexadecimal';
    selectToRef.appendChild(newOptionOne);
    selectToRef.appendChild(newOptionTwo);

    const outputRef = document.getElementById('result');

    function onClick() {
        const inputRef = document.getElementById('input');

        const inputValue = Number(inputRef.value);

        let result = '';

        if (selectToRef.value === 'binary') {
            result = inputValue.toString(2);
        } else if (selectToRef.value === 'hexadecimal') {
            result = inputValue.toString(16).toUpperCase();
        }

        // const conversions = {
        //     binary: function (numToConvert) {
        //         let divisionResult = numToConvert;
        //         let binary = [];

        //         while (Math.floor(divisionResult / 2) !== 0) {

        //             if (divisionResult % 2 === 0) {
        //                 divisionResult /= 2;
        //                 binary.unshift('0');
        //             } else {
        //                 divisionResult = Math.floor(divisionResult / 2);
        //                 binary.unshift('1');
        //             }
        //         }

        //         binary.unshift(divisionResult);
        //         return binary.join('');
        //     },
        //     hexadecimal: function (numToConvert) {
        //         let divisionResult = numToConvert;
        //         let hexadecimal = [];
        //         let remainder = 0;
        //         const options = {
        //             0: 0,
        //             1: 1,
        //             2: 2,
        //             3: 3,
        //             4: 4,
        //             5: 5,
        //             6: 6,
        //             7: 7,
        //             8: 8,
        //             9: 9,
        //             10: 'A',
        //             11: 'B',
        //             12: 'C',
        //             13: 'D',
        //             14: 'E',
        //             15: 'F'
        //         }

        //         while (Math.floor(divisionResult / 16) !== 0) {

        //             if (divisionResult % 16 === 0) {
        //                 divisionResult /= 16;
        //                 hexadecimal.unshift('0');
        //             } else {
        //                 remainder = divisionResult - (Math.floor(divisionResult / 16) * 16);
        //                 divisionResult = Math.floor(divisionResult / 16);
        //                 hexadecimal.unshift(options[remainder]);
        //             }
        //         }

        //         hexadecimal.unshift(options[divisionResult]);
        //         return hexadecimal.join('');
        //     }
        // }

        // const systemToConvertTo = selectToRef.value.toLowerCase();
        // const result = conversions[systemToConvertTo](inputValue);

        outputRef.value = result;
    }
}