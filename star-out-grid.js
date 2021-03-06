function starOutGrid(grid) {
	const star_coordinates = [];
	grid.forEach(function(val, index_1) {
		return val.forEach(function(value, index_2) {
			if (value === '*') {
				star_coordinates.push([ index_1, index_2 ]);
			}
		});
	});
	star_coordinates.forEach((val) => {
		val.forEach(function(value, index) {
			if (index === 0) {
				grid[value] = grid[value].map((k) => {
					return '*';
				});
			}
			if (index === 1) {
				grid.map((k) => {
					let new_row = k;
					new_row[value] = '*';
					return new_row;
				});
			}
		});
	});
	console.log(grid);
	return grid;
}
starOutGrid([ [ 'A', 'B', 'C' ], [ 'D', '*', 'E' ], [ 'F', 'G', 'H' ] ]);
