const container = document.querySelector(".rain");

Array.from(document.querySelectorAll(".drop")).forEach((d) => {
	d.style.left = `${Math.floor(Math.random() * 100)}%`;
	d.style.top = `${Math.floor(Math.random() * 100)}%`;
});
