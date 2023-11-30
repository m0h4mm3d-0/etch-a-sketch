const sizeOfGrid = 16;
const container = document.querySelector('.container');


const createGrid = (gridAmount) => {
	for (let i = 0; i < gridAmount; i++) {
		const row = document.createElement('div');
		row.classList.add('grid-row');

		for (let j = 0; j < gridAmount; j++) {
			const gridBox = document.createElement('div');
			gridBox.classList.add('grid-box');

			gridBox.addEventListener('mouseenter', () => {
				gridBox.style.backgroundColor = "#aaaaaa";
			
			})

			row.appendChild(gridBox);

		}
		container.appendChild(row);
	}

}

createGrid(sizeOfGrid);
