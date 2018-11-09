const button = document.getElementById('sign-in-button');
let loadingElementInterval;

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
  fetch('http://localhost:8000/sessions', {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ mail, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.error != undefined) {
        reportLoginFailure(data.error);
      } else {
        localStorage.setItem('token', data.token);
        window.location.replace('http://localhost:9000');
      }
    })
    .catch(err => {
      reportLoginFailure(err);
    });
};
