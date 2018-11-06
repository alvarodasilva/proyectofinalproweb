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

/* Shows article card */
/*
function showArticles(articlesTemp) {
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
      "<input type='image' src='/images/heart(24).png' onclick='showOfferArticleBox()'>";
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';
  const showArticleCard = document.getElementById('demo');
  showArticleCard.innerHTML = html;
}

showArticles(articles);
*/
/* Creates article card */
/*
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
*/

async function getArticleName() {
  const response = 'http://localhost:8000/articles';
  const json = await response.json();
  return JSON.stringify(json.name);
}

function showArticle(newArticle) {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const prodHolder = document.getElementById('demo').appendChild(wrapper);

  const prodImg = document.createElement('div');
  prodImg.className = 'product-img';
  wrapper.appendChild(prodImg);

  const img = document.createElement('img');
  img.width = '327';
  img.height = '320';
  img.src = newArticle.picture;
  prodImg.appendChild(img);

  const prodInfo = document.createElement('div');
  prodInfo.className = 'product-info';
  wrapper.appendChild(prodInfo);

  const prodText = document.createElement('div');
  prodText.className = 'product-text';
  prodInfo.appendChild(prodText);

  const prodName = document.createElement('h1');
  const prodNameText = document.createTextNode(newArticle.name);
  prodName.appendChild(prodNameText);
  prodText.appendChild(prodName);

  const userName = document.createElement('h2');
  const userNameText = document.createTextNode('@Guillenoble');
  userName.appendChild(userNameText);
  prodText.appendChild(userName);

  const prodType = document.createElement('div');
  prodType.className = 'articleType';
  const prodTypeName = document.createTextNode(newArticle.type);
  prodType.appendChild(prodTypeName);
  prodText.appendChild(prodType);

  const prodDesc = document.createElement('p');
  const prodDescName = document.createTextNode(newArticle.description);
  prodDesc.appendChild(prodDescName);
  prodText.appendChild(prodDesc);

  const like = document.createElement('h2');
  const likeText = document.createTextNode('Like this product to trade');
  like.appendChild(likeText);
  prodText.appendChild(like);

  const offerArticleBox = document.getElementById('offerArticleBox');
  const likeButton = document.createElement('input');
  likeButton.type = 'image';
  likeButton.src = '/images/heart(24).png';
  likeButton.onclick = () => {
    if (offerArticleBox.style.display === 'none') {
      offerArticleBox.style.display = 'block';
    } else {
      offerArticleBox.style.display = 'none';
    }
  };
  prodText.appendChild(likeButton);
  console.log(prodHolder);
}

function showArticles() {
  for (let i = 0; i < articles.length; i += 1) {
    showArticle(articles[i]);
  }
}

showArticles();

function showArticleCard() {
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
  newArticle.name = articleNameInput;
  newArticle.description = articleDescriptionInput;
  newArticle.type = articleTypeInput;
  newArticle.picture = file;
  articles.push(newArticle);
  console.log(articles);
  showArticle(newArticle);
}

document.getElementById('addArticle').addEventListener('click', () => {
  showArticleCard();
});
