function showOffer(newOffer) {
  if (newOffer.user_id === JSON.parse(localStorage.current_user)._id) {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrap';
    const prodHolder = document.getElementById('demo').appendChild(wrapper);

    const rejectButton = document.createElement('button');
    rejectButton.setAttribute('class', 'discardButton');
    const rejectButtonText = document.createTextNode('Reject');
    rejectButton.appendChild(rejectButtonText);
    rejectButton.onclick = () => {
      if (newOffer.status === 'pending') {
        newOffer.status = 'rejected';
        status.removeChild(statusText);
        const newStatusText = document.createTextNode(
          'Status: ' + newOffer.status,
        );
        status.appendChild(newStatusText);
        wrapper.removeChild(rejectButton);
        wrapper.removeChild(wrapper.firstChild);
      }
    };
    wrapper.appendChild(rejectButton);

    getUserName(newOffer.bidder_id)
      .then(name => {
        const offerBidderId = document.createElement('p');
        const offerBidderIdText = document.createTextNode(
          'Bidder name: ' + name,
        );
        offerBidderId.appendChild(offerBidderIdText);
        wrapper.appendChild(offerBidderId);
      })
      .catch(error => alert(error));

    getArticleName(newOffer.bidder_article_id)
      .then(articleName => {
        const offerBidderArticleId = document.createElement('p');
        const offerBidderArticleIdText = document.createTextNode(
          'Bidder article id: ' + articleName,
        );
        offerBidderArticleId.appendChild(offerBidderArticleIdText);
        wrapper.appendChild(offerBidderArticleId);
      })
      .catch(error => alert(error));

    getArticleName(newOffer.article_id)
      .then(articleId => {
        const offerUserArticleId = document.createElement('p');
        const offerUserArticleIdText = document.createTextNode(
          'User article id: ' + articleId,
        );
        offerUserArticleId.appendChild(offerUserArticleIdText);
        wrapper.appendChild(offerUserArticleId);
      })
      .catch(error => alert(error));

    const status = document.createElement('p');
    let statusText = document.createTextNode('Status: ' + newOffer.status);
    status.appendChild(statusText);
    wrapper.appendChild(status);

    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('id', 'offId');
    input.setAttribute('value', newOffer._id);
    wrapper.appendChild(input);

    const aceptButton = document.createElement('button');
    aceptButton.setAttribute('class', 'aceptButton');
    const aceptButtonText = document.createTextNode('Acept');
    aceptButton.appendChild(aceptButtonText);
    aceptButton.onclick = () => {
      if (newOffer.status === 'pending') {
        newOffer.status = 'acepted';
        status.removeChild(statusText);
        const newStatusText = document.createTextNode(
          'Status: ' + newOffer.status,
        );
        status.appendChild(newStatusText);
        wrapper.removeChild(aceptButton);
        wrapper.removeChild(wrapper.firstChild);

        const url =
          window.API_HOST + '/offers/' + document.getElementById('offId').value;
        fetch(url, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.access_token,
          },
          body: JSON.stringify({
            status: 'acepted',
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.error != undefined) {
              alert('Failed: ' + data.error);
            }
          })
          .catch(err => alert(err));
      }
    };
    wrapper.appendChild(aceptButton);
  }
}

function swapArticles(bidderId, userId) {
  let bidderIdTemp = bidderId;
  let userIdTemp = userId;
  console.log('BidderIdTemp ' + bidderIdTemp);
  console.log('UserIdTemp ' + userIdTemp);
  fetch(window.API_HOST + '/articles', {
    headers: { authorization: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
        console.log(response[i]);
        bidderIdTemp = userId;
        userIdTemp = bidderId;
      }
    })
    .then(error => alert(error));
}

function showOffers() {
  let url = window.API_HOST + '/offers';
  fetch(url, {
    headers: { authorization: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
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
      const userName = response.name;
      return userName;
    })
    .catch(error => alert(error));
}

function showArticles() {
  let url = window.API_HOST + '/articles';
  fetch(url, {
    headers: { authorization: localStorage.access_token },
  })
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.length; i += 1) {
        console.log(response[i]);
      }
    })
    .catch(error => alert(error));
}

showOffers();
