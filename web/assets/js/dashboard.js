let articles = [];

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
  prodName.appendChild(prodNameText);
  prodText.appendChild(prodName);

  let userTemp = 'http://localhost:8000/users/' + newArticle.user_id;
  fetch(userTemp, {
    headers: { token: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      userTemp = response.name;
      const userName = document.createElement('h2');
      const userNameText = document.createTextNode(userTemp);
      userName.appendChild(userNameText);
      prodText.appendChild(userName);
    });
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

  if (newArticle.user_id === JSON.parse(localStorage.current_user)._id) {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    const deleteButonText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteButonText);
    prodInfo.appendChild(deleteButton);
  }
  return prodHolder;
}

function showArticles() {
  fetch('http://localhost:8000/articles', {
    headers: { token: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
        showArticle(response[i]);
      }
    });
  // .catch(error => console.log(error));
}

/*
function showUserArticles(id) {
  let userID =
    'http://localhost:8000/articles/17033ac0-e395-11e8-b96f-11ed46201b00' + id;
  fetch(userID, {
    headers: { token: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      var x = document.getElementById('userList');
      for (let i = 0; i < response.length; i += 1) {
        var option = document.createElement('option');
        console.log(response[i].name + '-------------');
        option.text = response[i].name;
        x.add(option);
      }
    });
  // .catch(error => console.log(error));
}
*/
showArticles();
//showUserArticles('');

function addArticle() {
  const articleNameInput = document.getElementById('articleNameInput').value;
  const articleDescriptionInput = document.getElementById(
    'articleDescriptionInput',
  ).value;
  const articleTypeInput = document.getElementById('articleTypeInput').value;
  const file = document.getElementById('file');

  const newArticle = {
    name: articleNameInput,
    type: null,
    description: articleDescriptionInput,
    picture: null,
    user_id: JSON.parse(localStorage.current_user)._id,
  };

  fetch(window.API_HOST + '/articles', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.access_token,
    },
    body: JSON.stringify(newArticle),
  })
    .then(res => res.json())
    .catch(err => err);

  showArticle(newArticle);
  return newArticle;
}

document.getElementById('addArticle').addEventListener('click', () => {
  addArticle();
});
