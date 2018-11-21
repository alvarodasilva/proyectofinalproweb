const getCurrentUser = () => JSON.parse(localStorage.current_user);
const getAccessToken = () => localStorage.access_token;

/* Types load */
let types = null;

const getTypes = () => {
  return fetch(window.API_HOST + '/types', {
    headers: { authorization: getAccessToken() },
  })
    .then(response => response.json())
    .then(response => {
      types = response;
    });
};
/* Function to fill al elements with the name type-combo with options elements
that represent a type (made to use for select elemetns) */
const fillTypesCombo = () => {
  const selects = document.getElementsByName('type-combo');
  let option;
  selects.forEach(select => {
    if (types != null && types != undefined) {
      types.forEach(type => {
        option = document.createElement('option');
        option.text = type.name;
        option.value = type._id;
        select.appendChild(option);
      });
    }
  });
};

const postArticle = (name, description, type_id, user_id) => {
  return fetch(window.API_HOST + '/articles', {
    method: 'post',
    headers: {
      authorization: getAccessToken(),
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({ name, description, type_id, user_id }),
  });
};

const loadMyArticles = () => {
  let url = window.API_HOST + '/articles?owned=1';
  return fetch(url, {
    headers: { authorization: localStorage.access_token },
  }).then(response => response.json());
};

function deleteArticle(articleId) {
  return fetch(window.API_HOST + '/articles/' + articleId, {
    method: 'delete',
    headers: {
      authorization: getAccessToken(),
      'Content-Type': 'application/json',
    },
  });
}
