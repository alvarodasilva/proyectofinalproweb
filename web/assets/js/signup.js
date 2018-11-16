const signupButton = document.getElementById('sign-up-button');

let loadingElementInterval;

const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

const setLoadingElement = element => {
  element.textContent = 'Registering';
  return window.setInterval(() => {
    const dots = element.textContent.split('.');
    dots.shift();
    if (dots.length > 2) {
      element.textContent = 'Registering';
    } else {
      element.textContent += '.';
    }
  }, 400);
};

const reportLoginFailure = error => {
  signupButton.textContent = 'Sign up';
  alert('Loggin failed: ' + error);
  clearInterval(loadingElementInterval);
};

signupButton.onclick = e => {
  loadingElementInterval = setLoadingElement(signupButton);

  const name = document.getElementById('name-field').value;
  const mail = document.getElementById('email-field').value;
  const password = document.getElementById('password-field').value;

  fetch(window.API_HOST + '/users', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, mail, password }),
  })
    .then(response => response.json())
    .then(data => {
      debugger;
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
