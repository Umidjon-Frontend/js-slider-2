const dataImg = [
  {
    id: 1,
    img: "img/1.jpg",
  },
  {
    id: 2,
    img: "img/2.jpg",
  },
  {
    id: 3,
    img: "img/3.jpg",
  },
  {
    id: 4,
    img: "img/4.jpg",
  },
  {
    id: 5,
    img: "img/5.jpg",
  },
];

let counter = 0;
const btnCarusel = document.querySelectorAll("header span");
const header = document.querySelector("header");
addImg(counter);

dataImg.map((item) => {});

btnCarusel.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      counter--;
      if (counter < 0) {
        counter = dataImg.length - 1;
      }
      addImg(counter);
    }
    if (index === 1) {
      counter++;
      if (counter > dataImg.length - 1) {
        counter = 0;
      }
      addImg(counter);
    }
  });
});
function addImg(index) {
  let data = dataImg[index].img;
  header.style.backgroundImage = `url(${data})`;
}
