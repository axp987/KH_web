
const images = ["image1.jpeg"];

const chocenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `../image/${chocenImages}`;
document.body.prepend(bgImage);

