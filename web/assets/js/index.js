/* fetch("http://localhost:8000/users").then(res=>(articles = res:)) */

const articles = [
  {
    name: 'Reloj ultra potente',
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
  img.onchange = newArticle.picture;
  prodImg.appendChild(img);

  const prodInfo = document.createElement('div');
  prodInfo.className = 'product-info';
  wrapper.appendChild(prodInfo);

  const prodText = document.createElement('div');
  prodText.className = 'product-text';
  prodInfo.appendChild(prodText);

  const prodName = document.createElement('h1');
  const prodNameText = document.createTextNode(newArticle.name);
  /* const prodNameText = document.createTextNode(JSON.stringify(json.name)); */
  prodName.appendChild(prodNameText);
  prodText.appendChild(prodName);

  const userName = document.createElement('h2');
  const userNameText = document.createTextNode('@Guillenoble');
  userName.appendChild(userNameText);
  prodText.appendChild(userName);

  const prodType = document.createElement('div');
  prodType.className = 'articleType';
  const prodTypeName = document.createTextNode(newArticle.type);
  /* const prodTypeName = document.createTextNode(JSON.stringify(json.type)); */
  prodType.appendChild(prodTypeName);
  prodText.appendChild(prodType);

  const prodDesc = document.createElement('p');
  const prodDescName = document.createTextNode(newArticle.description);
  /* const prodDescName = document.createTextNode(JSON.stringify(json.type)); */
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
  return prodHolder;
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
  const file = document.getElementById('file');

  const newArticle = {
    name: articleNameInput,
    type: articleTypeInput,
    description: articleDescriptionInput,
    picture: null,
    user_id: null,
    user_name: null,
  };

  /*
  newArticle.name = articleNameInput;
  newArticle.description = articleDescriptionInput;
  newArticle.type = articleTypeInput;
  newArticle.picture = file;
  articles.push(newArticle);
  */
  console.log(articles);
  showArticle(newArticle);
  return newArticle;
}

/*
const newPost = post => {
  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-type': 'aplication/json',
    }),
  };
  return fetch(`http://localhost:8000/articles`, options)
    .then(res => res.json())
    .then(res => console.log(res));
};

newPost(showArticleCard);
*/
document.getElementById('addArticle').addEventListener('click', () => {
  showArticleCard();
});
