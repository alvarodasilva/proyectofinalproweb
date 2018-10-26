const articles = [];

function getArticleData() {
  const articleNameInput = document.getElementById('articleNameInput').value;
  const articleDescriptionInput = document.getElementById(
    'articleDescriptionInput',
  ).value;
  const articleTypeInput = document.getElementById('articleTypeInput').value;
  const file = document.getElementById('file').value;
  const newProduct = {
    articleName: null,
    articleType: null,
    articleDescription: null,
    articlePicture: null,
  };
  console.log(file);
  if (
    articleDescriptionInput.length <= 60 &&
    articleDescriptionInput.length >= 10
  ) {
    newProduct.articleName = articleNameInput;
    newProduct.articleDescription = articleDescriptionInput;
    newProduct.articleType = articleTypeInput;
    newProduct.articlePicture = file;
    articles.push(newProduct);
    console.log(articles);
  } else {
    alert('Article description is too short');
  }
  let html = "<div class='wrapper' id='articleCard'>";
  for (let i = 0; i < articles.length; i += 1) {
    /*  <div class="product-img">
                <img id="articleImg" height="320" width="327">
            </div> */
    html += "<div class='product-img'>";
    html +=
      "<img id='articleImg' height='320' width='327' src='" +
      articles[i].articlePicture +
      "' />";
    html += '</div>';
    html += "<div class='product-info'>";
    html += "<div class='product-text'>";
    html += "<h1 id='articleName'>" + articles[i].articleName + '</h1>';
    html += '<h2>@Guillenoble</h2>';
    html +=
      "<h3 class='articleType' id='articleType'>" +
      articles[i].articleType +
      '</h3>';
    html +=
      "<p id='articleDescription'>" + articles[i].articleDescription + '</p>';
    html += '<h2>Like this product to trade</h2>';
    /* html += "<img src='heart(24).png'>"; */
    html +=
      "<input id='likeBoxButton' type='image' src='/images/heart(24).png'>";
    html += '</div>';
    html += '</div>';
  }

  html += '</div>';
  document.getElementById('demo').innerHTML = html;
}

document.getElementById('addArticle').addEventListener('click', () => {
  getArticleData();
});
