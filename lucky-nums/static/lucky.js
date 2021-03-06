/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
	evt.preventDefault();
	const name = $('#name').val();
	const email = $('#email').val();
	const color = $('#color').val();
	const year = parseInt($('#year').val());
	const data = { name, email, color, year };
	const url = 'http://127.0.0.1:5000/api/get-lucky-num';
	const headers = {
		'Content-Type': 'application/json'
	};
	let resp;
	try {
		resp = await axios.post(url, data, headers);
		handleResponse(resp);
	} catch (e) {
		console.log(e);
	}

	// handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
	if ('errors' in resp.data) {
		for (key of Object.keys(resp.data['errors'])) {
			console.log(key);
			$(`#${key}-err`).empty();
			$(`#${key}-err`).append(resp.data['errors'][key]);
		}
	} else {
		$('#lucky-results').empty();
		$('#lucky-results').append(`Your lucky number is ${resp.data['num']['num']} (${resp.data['num']['fact']}).`);
		$('#lucky-results').append('<br>');
		$('#lucky-results').append(
			`Your birth year (${resp.data['year']['year']}) fact is ${resp.data['year']['fact']}`
		);
	}
}

$('#lucky-form').on('submit', processForm);
