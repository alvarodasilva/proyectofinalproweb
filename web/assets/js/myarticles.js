/* Load Types */
getTypes().then(() => fillTypesCombo());
/* Add form logic */
const openAddForm = () => {
  document.getElementById('new-article-form').style.display = 'block';
};

const closeAddForm = () => {
  document.getElementById('new-article-form').style.display = 'none';
};

/* Handling Add Article */
const onAddArticle = e => {
  closeAddForm();
  const name = document.getElementById('add-name-field').value;
  const description = document.getElementById('add-description-field').value;
  const type_id = document.getElementById('add-type-field').value;
  const user_id = getCurrentUser()._id;
  postArticle(name, description, type_id, user_id)
    .then(() => {
      alert('Article created !  NOTE: WE SHOULD RELOAD MYARTICLES');
    })
    .catch('Something failing on creating the article');
};
