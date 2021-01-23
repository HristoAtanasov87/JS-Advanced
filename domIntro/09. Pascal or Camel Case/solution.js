function solve() {
	const textReference = document.getElementById('text');
	const namingReference = document.getElementById('naming-convention');

	const textToConvert = textReference.value;
	const namingConvention = namingReference.value;

	let choices = {
		'Camel Case': function (text) {
			const textArray = text
				.split(' ')
				.map(el => el.toLowerCase());
			let output = [textArray[0]];
			for (let i = 1; i < textArray.length; i++) {
				let word = textArray[i]
					.split('')
					.map((el, index) => index == 0 ? el.toUpperCase() : el)
					.join('');

				output.push(word);
			}

			return output.join('');
		},
		'Pascal Case': function (text) {
			const textArray = text
				.split(' ')
				.map(el => el.toLowerCase());

			let output = [];
			for (let i = 0; i < textArray.length; i++) {
				let word = textArray[i]
					.split('')
					.map((el, index) => index === 0 ? el.toUpperCase() : el)
					.join('');

				output.push(word);
			}

			return output.join('');
		}
	}

	let result = '';

	if (choices[namingConvention]) {
		result = choices[namingConvention](textToConvert)
	} else {
		result = 'Error!'
	}

	const outcome = document.getElementById('result');
	outcome.textContent = result;
}