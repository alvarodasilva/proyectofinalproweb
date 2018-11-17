function printJSON(obj) {
  let output = '';
  for (property in obj) {
    output += property + ': ' + obj[property] + '; ';
  }
  console.log(output);
}

// Creates the HTML div of one article that comes as a parameter
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

  let userTemp = window.API_HOST + '/users/' + newArticle.user_id;
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
  likeButton.id = newArticle._id;
  likeButton.onclick = () => {
    if (offerArticleBox.style.display === 'none') {
      offerArticleBox.style.display = 'block';
      document.getElementById('artId').value = likeButton.id;
    } else {
      offerArticleBox.style.display = 'none';
    }
  };
  prodText.appendChild(likeButton);
  return prodHolder;
}

// Shows all articles, this function is not used now, it remains for debugging
function showArticles() {
  fetch(window.API_HOST + '/articles', {
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

// Get all the articles owned by the logged user, adds it to the offerBox dropdown list
function myArts() {
  const dropDownl = document.getElementById('userList');
  let url = window.API_HOST + '/articles?owned=1';
  fetch(url, {
    headers: { token: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
        //printJSON(response[i]);
        console.log(response[i].name);
        const option = document.createElement('option');
        option.id = response[i]._id;
        option.text = response[i].name;
        dropDownl.add(option);
        console.log('My articles are: ' + response[i].name + response[i]._id);
      }
    });
}

// Shows all the articles owned by the logged user
function showUserArticles() {
  let url = window.API_HOST + '/articles?owned=1';
  fetch(url, {
    headers: { token: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
        showArticle(response[i]);
      }
    });
}

// Shows all the articles that arent of the logged user
function showForeignArticles() {
  let url = window.API_HOST + '/articles?owned=0';
  fetch(url, {
    headers: { token: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
        showArticle(response[i]);
      }
    });
}

showForeignArticles();

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
  };

  showArticle(newArticle);
  return newArticle;
}

document.getElementById('addArticle').addEventListener('click', () => {
  showArticleCard();
});

function makeOffer() {
  const whatIwant = document.getElementById('artId').value;
  let l = document.getElementById('userList');
  const whatIoffer = l.options[l.selectedIndex].id;
  console.log('I want your ' + whatIwant + ' for my ' + whatIoffer);

  // TO DO : send post with data
}

showForeignArticles();
myArts();
