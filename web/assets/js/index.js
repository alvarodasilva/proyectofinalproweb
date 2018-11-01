/* fetch("http://localhost:8000/users").then(res=>(articles = res:)) */

const articles = [
  {
    name: null,
    type: null,
    description: null,
    picture: null,
  },
  {
    name: null,
    type: null,
    description: null,
    picture: null,
  },
  {
    name: null,
    type: null,
    description: null,
    picture: null,
  },
];

const offerArticleBox = document.getElementsByClassName('offerArticleBox');
/* Opens box to offer article */
function prueba() {
  if (offerArticleBox.style.display === 'none') {
    offerArticleBox.style.display = 'block';
  } else {
    offerArticleBox.style.display = 'none';
  }
}

/* Shows article card */
function showArticles(articlesTemp) {
  console.log('show articles');
  let html = "<div class='wrapper'>";
  for (let i = 0; i < articlesTemp.length; i += 1) {
    html += "<div class='product-img'>";
    html += `<img height='320' width='327' src='${articlesTemp[i].picture}'/>`;
    html += '</div>';
    html += "<div class='product-info'>";
    html += "<div class='product-text'>";
    html += `<h1> ${articlesTemp[i].name} </h1>`;
    html += '<h2>@Guillenoble</h2>';
    html += `<h3 class='articleType'> ${articlesTemp[i].type} </h3>`;
    html += `<p> ${articlesTemp[i].description} </p>`;
    html += '<h2>Like this product to trade</h2>';
    html +=
      "<input type='image' src='/images/heart(24).png' onclick='prueba()'>";
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';
  const showArticleCard = document.getElementById('demo');
  showArticleCard.innerHTML = html;
  console.log('show articles 2');
}

showArticles(articles);

/* Creates article card */
function createArticleCard() {
  const articleNameInput = document.getElementById('articleNameInput').value;
  const articleDescriptionInput = document.getElementById(
    'articleDescriptionInput',
  ).value;
  const articleTypeInput = document.getElementById('articleTypeInput').value;
  const file = document.getElementById('file').files[0];

  const newArticle = {
    name: null,
    type: null,
    description: null,
    picture: null,
    user_id: null,
    user_name: null,
  };
  if (
    articleDescriptionInput.length <= 100 &&
    articleDescriptionInput.length >= 10
  ) {
    newArticle.name = articleNameInput;
    newArticle.description = articleDescriptionInput;
    newArticle.type = articleTypeInput;
    newArticle.picture = file;
    articles.push(newArticle);
  } else {
    alert('Article description is too short or long');
  }
  showArticles(articles);
}

document.getElementById('addArticle').addEventListener('click', () => {
  createArticleCard();
});
