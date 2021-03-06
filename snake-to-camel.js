function snakeToCamel(variable) {
	const lst = variable.split('_');
	const new_lst = lst.map(function(word, index) {
		if (index > 0) {
			return (new_word = word.slice(0, 1).toUpperCase()) + word.slice(1);
		} else {
			return word;
		}
	});
	console.log(new_lst.join(''));
	return new_lst.join('');
}
