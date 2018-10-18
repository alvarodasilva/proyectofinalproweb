let articleNameInput = document.getElementById('articleNameInput');
let articleName = document.getElementById('articleName');
let articleDescriptionInput = document.getElementById(
  'articleDescriptionInput',
);
let articleDescription = document.getElementById('articleDescription');

function getArticleData() {
  /* articleNameInput.options[articleName.selectedIndex].text; */
  articleName.textContent = articleNameInput.value;
  articleDescription.textContent = articleDescriptionInput.value;
}
