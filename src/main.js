// Create variables targetting the relevant DOM (document object model) elements here 👇
var newCoverImg = document.querySelector('.cover-image');
var newTitle = document.querySelector('.cover-title');
var newDescriptor1 = document.querySelector('.tagline-1');
var newDescriptor2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeMyBookButton = document.querySelector('.create-new-book-button')

var formPage = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var savedCoversArray = document.querySelector('.saved-covers-section');

var coverForm = document.querySelector('#cover');
var titleForm = document.querySelector('#title');
var descriptor1Form = document.querySelector('#descriptor1');
var descriptor2Form = document.querySelector('#descriptor2');

var defaultCover = document.querySelector(".main-cover")
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);
makeNewButton.addEventListener('click', viewForm);
viewSavedButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', goHome);
makeMyBookButton.addEventListener('click', makeBook);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayCover(leCover) {
  newCoverImg.src = leCover.cover;
  newTitle.innerText = leCover.title;
  newDescriptor1.innerText = leCover.tagline1;
  newDescriptor2.innerText = leCover.tagline2;
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
};

function viewSavedCovers() {
  savedCoversView.classList.remove('hidden');
  homeView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formPage.classList.add('hidden');
};

function goHome() {
  homeView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  formPage.classList.add('hidden');
};

function addToArrays() {
  covers.unshift(coverForm.value);
  titles.unshift(titleForm.value);
  descriptors.unshift(descriptor1Form.value);
  descriptors.unshift(descriptor2Form.value);
};
function makeBook() {
  event.preventDefault();
  addToArrays();
  currentCover = new Cover (covers[0], titles[0], descriptors[1], descriptors[0]);
  displayCover(currentCover);
}
