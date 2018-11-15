const button = document.getElementById('sign-in-button');
let loadingElementInterval;
const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

const setLoadingElement = element => {
  element.textContent = 'Loggin';
  return window.setInterval(() => {
    const dots = element.textContent.split('.');
    dots.shift();
    if (dots.length > 2) {
      element.textContent = 'Loggin';
    } else {
      element.textContent += '.';
    }
  }, 400);
};

const reportLoginFailure = error => {
  button.textContent = 'Sign in';
  alert('Loggin failed: ' + error);
  clearInterval(loadingElementInterval);
};

button.onclick = e => {
  loadingElementInterval = setLoadingElement(button);
  const mail = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  fetch(window.API_HOST + '/sessions', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mail: mail, password: password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.error != undefined) {
        reportLoginFailure(data.error);
      } else {
        setCookie('access_token', data.token, 7);
        localStorage.setItem('access_token', data.token);
        localStorage.setItem('current_user', JSON.stringify(data.user));
        window.location.href = '/';
      }
    })
    .catch(err => {
      reportLoginFailure(err);
    });
};
