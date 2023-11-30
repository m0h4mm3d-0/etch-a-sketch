const container = document.querySelector('.container');
const resetBtn = document.querySelector('button');

const createGrid = (gridAmount) => {
	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');

	for (let i = 0; i < gridAmount; i++) {
		const row = document.createElement('div');
		row.classList.add('grid-row');

		for (let j = 0; j < gridAmount; j++) {
			//const widthAndHeight = 960 / gridAmount;
			const gridBox = document.createElement('div');
			gridBox.classList.add('grid-box');
			//gridBox.style.width = `${widthAndHeight}px`;
			//gridBox.style.height = `${widthAndHeight}px`;

			gridBox.addEventListener('mouseenter', () => {
				gridBox.style.backgroundColor = "#aaaaaa";
			
			})
			row.appendChild(gridBox);
		}
		wrapper.appendChild(row);
	}
	container.appendChild(wrapper);
}

resetBtn.addEventListener('click', () => {
	let userInput = Number(prompt("dim(): "));


	while (userInput > 100) {
		let userInput = Number(prompt("pick small dim(): "));
	}
	const wrapper = document.querySelector('.wrapper');
	
	if (!wrapper) {
		createGrid(userInput);
	} else {
		wrapper.remove();
		createGrid(userInput);
	}

})


