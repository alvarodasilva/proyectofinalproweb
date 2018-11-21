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
