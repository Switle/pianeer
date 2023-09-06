function burger() {
	const menu = document.querySelector('.menu');
	const burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		menu.classList.toggle('active');
		burger.classList.toggle('active');
	});
}

burger();

function form() {
	const form = document.querySelector('.feedback-form');
	const formMask = document.querySelector('.mask-form');
	const formOpen = document.querySelectorAll('.header__call');
	const formClose = document.querySelector('.feedback-form__close');

	formOpen.forEach((el) => {
		el.addEventListener('click', () => {
			form.classList.add('active');
			formMask.classList.add('active');
		});
	});

	formClose.addEventListener('click', () => {
		form.classList.remove('active');
		formMask.classList.remove('active');
	});
}

form();

