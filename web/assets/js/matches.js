/*
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
*/

function showOffer(newOffer) {
  if (newOffer.user_id === JSON.parse(localStorage.current_user)._id) {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrap';
    const prodHolder = document.getElementById('demo').appendChild(wrapper);

    const status = document.createElement('p');
    let statusText = document.createTextNode('Status: ' + newOffer.status);
    status.appendChild(statusText);
    wrapper.appendChild(status);

    getUserName(newOffer.bidder_id).then(name => {
      const offerBidderId = document.createElement('p');
      const offerBidderIdText = document.createTextNode('Bidder name: ' + name);
      console.log('New offer bidder id ' + name);
      offerBidderId.appendChild(offerBidderIdText);
      wrapper.appendChild(offerBidderId);
    });

    getArticleName(newOffer.bidder_article_id).then(articleName => {
      const offerBidderArticleId = document.createElement('p');
      const offerBidderArticleIdText = document.createTextNode(
        'Bidder article id: ' + articleName,
      );
      console.log('New offer article id ' + articleName);
      offerBidderArticleId.appendChild(offerBidderArticleIdText);
      wrapper.appendChild(offerBidderArticleId);
    });

    getArticleName(newOffer.article_id).then(articleId => {
      const offerUserArticleId = document.createElement('p');
      const offerUserArticleIdText = document.createTextNode(
        'User article id: ' + articleId,
      );
      console.log('New offer article id ' + articleId);
      offerUserArticleId.appendChild(offerUserArticleIdText);
      wrapper.appendChild(offerUserArticleId);
    });

    const aceptButton = document.createElement('button');
    aceptButton.className = 'aceptButton';
    const aceptButtonText = document.createTextNode('Acept');
    aceptButton.appendChild(aceptButtonText);
    console.log('new offer status: ' + newOffer.status);
    aceptButton.onclick = () => {
      if (newOffer.status === 'pending') {
        newOffer.status = 'acepted';
        status.removeChild(statusText);
        const newStatusText = document.createTextNode(
          'Status: ' + newOffer.status,
        );
        status.appendChild(newStatusText);
        wrapper.removeChild(aceptButton);
        wrapper.removeChild(discardButton);
      }
    };
    wrapper.appendChild(aceptButton);

    console.log('------------------------------------');
  }
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
        showOffer(response[i]);
      }
    })
    .catch(error => alert(error));
}

function getUserName(userId) {
  let userTemp = window.API_HOST + '/users/' + userId;
  return fetch(userTemp, {
    headers: { authorization: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      console.log('El nombre es: ' + response.name);
      const userName = response.name;
      return userName;
    })
    .catch(error => alert(error));
}

function getArticleName(articleId) {
  let userTemp = window.API_HOST + '/articles/' + articleId;
  return fetch(userTemp, {
    headers: { authorization: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      console.log('El nombre es: ' + response.name);
      const userName = response.name;
      return userName;
    })
    .catch(error => alert(error));
}

function getUser() {}

showOffers();
