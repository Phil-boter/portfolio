console.log("script.js is mounted");

const options = {
	root: null,
	rootMargin: "-10%",
	threshold: 0.0,
};

// ----------------    animation nav --------------

let listItems = [...document.querySelectorAll("li")];

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			let letters = [...entry.target.querySelectorAll(`span`)];
			letters.forEach((letter, idx) => {
				setTimeout(() => {
					letter.classList.add("active");
				}, idx * 20);
			});
			entry.target.children[0].classList.add(`active`);
		}
	});
}

listItems.forEach((item) => {
	let newString = "";
	let itemText = item.children[0].innerText.split("");
	itemText.map(
		(letter) =>
			(newString +=
				letter == " "
					? `<span class='gap'></span>`
					: `<span>${letter}</span>`)
	);
	item.innerHTML = newString;
	observer.observe(item);
});

// ---------------  headlines --------------------

let header = [...document.querySelectorAll("h1")];

let headerObserver = new IntersectionObserver(showHeader, options);

function showHeader(entries) {
	// console.log("entries", entries);
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			let letters = [...entry.target.querySelectorAll(`span`)];
			letters.forEach((letter, idx) => {
				setTimeout(() => {
					letter.classList.add("active");
				}, idx * 10);
			});
			entry.target.children[0].classList.add(`active`);
		}
	});
}

header.forEach((item) => {
	// console.log("item", item);
	let newHeader = "";
	let headerText = item.children[0].innerText.split("");
	headerText.map(
		(letter) =>
			(newHeader +=
				letter == " "
					? `<span class='gap'></span>`
					: `<span>${letter}</span>`)
	);
	item.innerHTML = newHeader;
	headerObserver.observe(item);
});

// ------------- change background ------------------

function bgChanger() {
	if (this.scrollY > this.innerHeight / 1.6) {
		// this refers here to window
		document.body.classList.add("bg-active");
	} else {
		document.body.classList.remove("bg-active");
	}
}
window.addEventListener("scroll", bgChanger);

// ----------navi-links -------------------------

const target = document.getElementById("main-image");

let observerImg = new IntersectionObserver(showImage);

if (target) {
	observerImg.observe(target);
}

function showImage(entries, observerImg) {
	console.log("showImage", target);
	entries.forEach((entry, idx) => {
		if (entry.isIntersecting) {
			console.log("is observing");
			entry.target.classList.add("grow");
		}
	});
}

// ----------- project images ---------------

let images = [...document.querySelectorAll(".article-image")];
console.log(images);

observerArticleImg = new IntersectionObserver(showArticleImage);

function showArticleImage(entries) {
	console.log(entries);
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("shrink");
		}
	});
}
images.forEach((image) => {
	console.log(image);
	observerArticleImg.observe(image);
});
