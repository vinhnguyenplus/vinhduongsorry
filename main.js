let pageTwo = document.getElementById("page-two");
let pageThree = document.getElementById("page-three");
let pageFour = document.getElementById("page-four");
let pageFive = document.getElementById("page-five");
let pageSix = document.getElementById("page-six");
let pageSeven = document.getElementById("page-seven");
let pageEight = document.getElementById("page-eight");

function changePageTwo() {
  let titlePage = document.getElementById("title-page");
  let heartItem = document.getElementById("heart-item");

  titlePage.style.display = "none";
  heartItem.style.display = "none";
  pageTwo.style.display = "block";
}

function changePageThree() {
  pageThree.style.display = "block";
  pageTwo.style.display = "none";
}

function changePageFour() {
  pageFour.style.display = "block";
  pageThree.style.display = "none";
}

function changePageFive() {
  pageFive.style.display = "block";
  pageFour.style.display = "none";
}

function changePageSix() {
  pageSix.style.display = "block";
  pageFive.style.display = "none";
}
function changePageSeven() {
  pageSeven.style.display = "block";
  pageSix.style.display = "none";
}
function changePageEight() {
  pageEight.style.display = "block";
  pageSeven.style.display = "none";
}

async function handleSubmit() {
  /*const url = "https://serverweb-production.up.railway.app/api/note";
  const data = {
    content: String(document.getElementById("text").value),
  };
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });*/
  changePageSeven();
}

function failChoice() {
  alert(
    "Anh viết cái này cho vui thôi chứ ấn không được đâu nha ! HIHI Ấn nút bên cạnh đuy 😘"
  );
}
function failChoicetwo() {
  alert(
    "Anh cũng viết cái nút này cho vui thôi chứ đâu ra mà không đồng ý😘. Bấm nút bên cạnh đi 😠"
  );
}

const itemTextPageFiveList = document.querySelectorAll(".item__text-page-five");

const delayValuesPageFive = [6, 8, 10, 12, 14];

itemTextPageFiveList.forEach((item, index) => {
  item.style.animationDelay = `${delayValuesPageFive[index]}s`;
});

const itemTextPageSevenList = document.querySelectorAll(
  ".item__text-page-seven"
);

const delayValuesPageSeven = [1, 2, 3, 4, 5, 6];

itemTextPageSevenList.forEach((item, index) => {
  item.style.animationDelay = `${delayValuesPageSeven[index]}s`;
});

const itemTextPageEightList1 = document.querySelectorAll(".word");

const delayValuesPageEight1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

itemTextPageEightList1.forEach((item, index) => {
  item.style.animationDelay = `${delayValuesPageEight1[index]}s`;
});

const itemTextPageEightList2 = document.querySelectorAll(".item__text-end");

const delayValuesPageEight2 = [
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
];

itemTextPageEightList2.forEach((item, index) => {
  item.style.animationDelay = `${delayValuesPageEight2[index]}s`;
});

const itemTextPageEightList3 = document.querySelectorAll(".item__text-end-two");

const delayValuesPageEight3 = [
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
];

itemTextPageEightList3.forEach((item, index) => {
  item.style.animationDelay = `${delayValuesPageEight3[index]}s`;
});
