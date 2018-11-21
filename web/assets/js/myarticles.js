/* Add form logic */
const openAddForm = () => {
  document.getElementById('new-article-form').style.display = 'block';
};

const closeAddForm = () => {
  document.getElementById('new-article-form').style.display = 'none';
};

/* Handling Add Article */
const onAddArticle = e => {
  const name = document.getElementById('add-name-field').value;
  const description = document.getElementById('add-description-field').value;
  const type_id = 'db18ad58-e3ce-11e8-9f32-f2801f1b9fd1';
  const user_id = getCurrentUser()._id;
  fetch(window.API_HOST + '/articles', {
    method: 'post',
    headers: {
      authorization: getAccessToken(),
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({ name, description, type_id, user_id }),
  });
};
