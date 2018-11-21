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
    headers: { authorization: localStorage.access_token },
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

  const aceptButton = document.createElement('button');
  aceptButton.className = 'aceptButton';
  const aceptButtonText = document.createTextNode('Acept');
  aceptButton.appendChild(aceptButtonText);
  wrapper.appendChild(aceptButton);

  const discardButton = document.createElement('button');
  aceptButton.className = 'discardButon';
  const discardButtonText = document.createTextNode('Discard');
  discardButton.appendChild(discardButtonText);
  wrapper.appendChild(discardButton);

  return prodHolder;
}

function showOffers() {
  let url = window.API_HOST + '/offers';
  fetch(url, {
    headers: { authorization: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
        console.log(response[i]);
        showArticle(response[i]);
      }
    });
}

showOffers();
