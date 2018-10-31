/* fetch("http://localhost:8000/users").then(res=>(articles = res:)) */

const articles = [
  {
    name: null,
    type: null,
    description: null,
    picture: null,
    /* user_id: null,
    user_name: null, */
  },
  {
    name: null,
    type: null,
    description: null,
    picture: null,
    /* user_id: null,
    user_name: null, */
  },
  {
    name: null,
    type: null,
    description: null,
    picture: null,
    /* user_id: null,
    user_name: null, */
  },
];

/* var str = `Hello, ${name}!`; */

function showArticles(articlesTemp) {
  let html = "<div class='wrapper' id='articleCard'>";
  for (let i = 0; i < articlesTemp.length; i += 1) {
    html += "<div class='product-img'>";
    html += `<img id='articleImg' height='320' width='327' src=${
      articlesTemp[i].picture
    }/>`;
    html += '</div>';
    html += "<div class='product-info'>";
    html += "<div class='product-text'>";
    html += `<h1 id='articleName'> ${articlesTemp[i].name} </h1>`;
    html += '<h2>@Guillenoble</h2>';
    html += `<h3 class='articleType' id='articleType'> ${
      articlesTemp[i].type
    } </h3>`;
    html += `<p id='articleDescription'> ${articlesTemp[i].description} </p>`;
    html += '<h2>Like this product to trade</h2>';
    html +=
      "<input id='likeBoxButton' type='image' src='/images/heart(24).png'>";
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';
  const showArticleCard = document.getElementById('demo');
  showArticleCard.innerHTML = html;
}

showArticles(articles);

function createArticleCard() {
  const articleNameInput = document.getElementById('articleNameInput').value;
  const articleDescriptionInput = document.getElementById(
    'articleDescriptionInput',
  ).value;
  const articleTypeInput = document.getElementById('articleTypeInput').value;
  const file = document.getElementById('file').value;
  const newArticle = {
    name: null,
    type: null,
    description: null,
    picture: null,
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
/*

function hacerAlgo() {
  let html = "<div class='wrapper' id='articleCard'>";
  for (let i = 0; i < articles.length; i += 1) {
    html += "<div class='product-img'>";
    html +=
      "<img id='articleImg' height='320' width='327' src='" +
      articles[i].picture +
      "' />";
    html += '</div>';
    html += "<div class='product-info'>";
    html += "<div class='product-text'>";
    html += "<h1 id='articleName'>" + articles[i].name + '</h1>';
    html += '<h2>@Guillenoble</h2>';
    html +=
      "<h3 class='articleType' id='articleType'>" + articles[i].type + '</h3>';
    html += "<p id='articleDescription'>" + articles[i].description + '</p>';
    html += '<h2>Like this product to trade</h2>';
    html +=
      "<input id='likeBoxButton' type='image' src='/images/heart(24).png'>";
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';
  const demo = document.getElementById('demo');
  demo.innerHTML = html;
}

*/
document.getElementById('addArticle').addEventListener('click', () => {
  createArticleCard();
});
