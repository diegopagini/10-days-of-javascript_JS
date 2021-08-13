/**
 * https://www.hackerrank.com/challenges/js10-create-a-button
 *
 * @format
 */
function addElement() {
	const button = document.createElement('button');
	button.setAttribute('id', 'btn');
	button.innerHTML = 0;
	document.body.appendChild(button);

	button.addEventListener('click', (e) => {
		const count = Number(e.currentTarget.innerHTML) + 1;

		e.currentTarget.innerHTML = count;
	});
}
addElement();

btn5.onclick = function () {
	var viarableNum = btn1.innerHTML;
	btn1.innerHTML = btn4.innerHTML;
	btn4.innerHTML = btn7.innerHTML;
	btn7.innerHTML = btn8.innerHTML;
	btn8.innerHTML = btn9.innerHTML;
	btn9.innerHTML = btn6.innerHTML;
	btn6.innerHTML = btn3.innerHTML;
	btn3.innerHTML = btn2.innerHTML;
	btn2.innerHTML = viarableNum;
};
