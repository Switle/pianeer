function burger() {
	const menu = document.querySelector('.menu');
	const burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		menu.classList.toggle('active');
		burger.classList.toggle('active');
	});
}

burger();

