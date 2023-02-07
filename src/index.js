
module.exports = function towelSort (matrix) {
	let arr1 = [];

	if (!Array.isArray(matrix)) return arr1;

	for (let i = 0; i < matrix.length; i++) {
		if (i % 2 === 0) {
			for (let j = 0; j < matrix[i].length; j++) {
				arr1.push(matrix[i][j]);
			}
		} else {
			for (let num = matrix[i].length - 1; num >= 0; num--) {
				arr1.push(matrix[i][num]);
			}
		}

	}
  return arr1;
}
