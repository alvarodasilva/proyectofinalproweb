/* Add form logic */
async function onEditArticle(e) {
  const article = await JSON.parse(localStorage.getItem('article'));
  const name = document.getElementById('edit-name-field').value;
  const description = document.getElementById('edit-description-field').value;
  const type_id = document.getElementById('edit-type-field').value;
  const type_name = document.getElementById('edit-type-field')
    .selectedOptions[0].text;
  fetch(window.API_HOST + '/articles/' + article._id, {
    method: 'put',
    headers: {
      authorization: getAccessToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description, type_id, type_name }),
  })
    .then(response => {
      localStorage.removeItem('article');
      alert('Actualizacion exitosa !!!');
      document.location.replace('/myarticles');
    })
    .catch(() => {
      localStorage.removeItem('article');
      alert('Something failing on creating the article');
      document.location.replace('/myarticles');
    });
}

function closeForm() {
  document.location.replace('/myarticles');
}
function showForm() {
  document.getElementsByClassName('form-popup')[0].style.display = 'block';
}
(async function() {
  const articleId = document.URL.split('/').reverse()[0];
  const response = await fetch(window.API_HOST + '/articles/' + articleId, {
    headers: { authorization: localStorage.access_token },
  });
  const article = await response.json();
  const articleString = await JSON.stringify(article);
  localStorage.setItem('article', articleString);
  await getTypes().then(() => fillTypesCombo());
  document.getElementById('edit-name-field').value = article.name;
  document.getElementById('edit-description-field').value = article.description;
  document.getElementById('edit-type-field').value = article.type_id;
  showForm();
})();
