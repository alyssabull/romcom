var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeMyBookButton = document.querySelector('.create-new-book-button')

var formPage = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');

var defaultCover = document.querySelector(".main-cover")
var savedCovers = [];
var currentCover;


window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);
makeNewButton.addEventListener('click', viewForm);
viewSavedButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', goHome);
makeMyBookButton.addEventListener('click', makeBook);
saveCoverButton.addEventListener('click', saveCover);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayCover(leCover) {
  document.querySelector('.cover-image').src = leCover.cover;
  document.querySelector('.cover-title').innerText = leCover.title;
  document.querySelector('.tagline-1').innerText = leCover.tagline1;
  document.querySelector('.tagline-2').innerText = leCover.tagline2;
};

function generateRandomCover(){
  var randomCoverImg = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];

  currentCover = new Cover (randomCoverImg, randomTitle, randomDescriptor1, randomDescriptor2);
  displayCover(currentCover);
};

function viewForm() {
  formPage.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedCoversView.classList.add('hidden');
};

function viewSavedCovers() {
  savedCoversView.classList.remove('hidden');
  homeView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formPage.classList.add('hidden');

var miniCovers = ""
  for (var i = 0; i < savedCovers.length; i++) {
    var newSavedCover =
      `<section class="mini-cover">
        <img class="mini-cover" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>`

  miniCovers += newSavedCover;
}
savedCoversSection.innerHTML = miniCovers;
};

function goHome() {
  homeView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  formPage.classList.add('hidden');
};

function addToFormArrays() {
  covers.unshift(document.querySelector('#cover').value);
  titles.unshift(document.querySelector('#title').value);
  descriptors.unshift(document.querySelector('#descriptor1').value);
  descriptors.unshift(document.querySelector('#descriptor2').value);
};

function makeBook() {
  event.preventDefault();
  addToFormArrays();
  currentCover = new Cover (covers[0], titles[0], descriptors[1], descriptors[0]);
  displayCover(currentCover);
  goHome();
};

function saveCover() {
  if (savedCovers.includes(currentCover)) {
  } else {
    savedCovers.unshift(currentCover);
  }
};
