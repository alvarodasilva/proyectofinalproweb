/* Load Types */
getTypes().then(() => fillTypesCombo());
/* Add form logic */
const openAddForm = () => {
  document.getElementById('new-article-form').style.display = 'block';
};

const closeAddForm = () => {
  document.getElementById('new-article-form').style.display = 'none';
  clearArticleForm();
};

function clearArticleForm() {
  const form = document.getElementById('new-article-form');
  Array.from(form.getElementsByTagName('input')).forEach(
    input => (input.value = ''),
  );
}
/* Handling Add Article */
const onAddArticle = e => {
  const name = document.getElementById('add-name-field').value;
  const description = document.getElementById('add-description-field').value;
  const type_id = document.getElementById('add-type-field').value;
  const user_id = getCurrentUser()._id;
  closeAddForm();
  postArticle(name, description, type_id, user_id)
    .then(() => {
      removeArticlesFromDom();
      loadAndRenderArticles();
    })
    .catch(e => alert('Something failing on creating the article' + e));
};

/* Load my Articles */
function onEditArticle(e) {
  let articleId = e.target.parentElement.parentElement.parentElement.articleId;
  if (articleId === undefined || articleId == null) {
    articleId = e.target.parentElement.parentElement.articleId;
  }
  document.location.replace('/myarticles/' + articleId);
}
function onDelArticle(e) {
  let articleId = e.target.parentElement.parentElement.parentElement.articleId;
  if (articleId === undefined || articleId == null) {
    articleId = e.target.parentElement.parentElement.articleId;
  }

  removeArticlesFromDom();
  deleteArticle(articleId).then(() => loadAndRenderArticles());
}
function renderButton(textContent, onClick, classesList) {
  const button = document.createElement('button');
  button.classList.add('btn');
  if (classesList != undefined && classesList != null) {
    if (typeof classesList === 'string') button.classList.add(classesList);
  }
  const bold = document.createElement('b');
  bold.textContent = textContent;
  button.appendChild(bold);
  button.addEventListener('click', onClick);
  return button;
}

function renderDeleteEditButtons() {
  const div = document.createElement('div');
  div.classList.add('buttons-container-form-right');
  div.appendChild(renderButton('DELETE', onDelArticle, 'btn-cancel'));
  div.appendChild(renderButton('EDIT', onEditArticle));
  return div;
}

function renderLabel(label) {
  const labelElement = document.createElement('label');
  const boldElement = document.createElement('b');
  boldElement.textContent = label;
  labelElement.appendChild(boldElement);
  return labelElement;
}

function renderParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  return p;
}
function renderArticleDetail(article) {
  const div = document.createElement('div');
  div.appendChild(renderLabel('Name: '));
  div.appendChild(renderParagraph(article.name));
  div.appendChild(renderLabel('Description: '));
  div.appendChild(renderParagraph(article.description));
  div.appendChild(renderLabel('Type: '));
  div.appendChild(renderParagraph(article.type_name));
  return div;
}
function renderArticles(articles) {
  const target = document.getElementsByClassName('center')[0];
  let articleContainer;
  articles.forEach(article => {
    articleContainer = document.createElement('div');
    articleContainer.classList.add('article-detail');
    articleContainer.articleId = article._id;
    articleContainer.appendChild(renderArticleDetail(article));
    articleContainer.appendChild(renderDeleteEditButtons());
    target.appendChild(articleContainer);
  });
}

function loadSpecificArticleDetail(name) {
  let url = window.API_HOST + '/articles?name=' + name;
  return fetch(url, {
    headers: { authorization: localStorage.access_token },
  })
    .then(response => response.json())
    .then(articles => {
      console.log(articles);
    });
}

function removeArticlesFromDom() {
  const mainContainer = document.getElementsByClassName('center')[0];
  Array.from(document.getElementsByClassName('article-detail')).forEach(
    articleDetail => {
      mainContainer.removeChild(articleDetail);
    },
  );
}

function loadAndRenderArticles() {
  return loadMyArticles().then(myarticles => renderArticles(myarticles));
}

loadAndRenderArticles();
