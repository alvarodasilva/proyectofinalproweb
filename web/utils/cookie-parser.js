module.exports = cookies => {
  const cookiesObject = {};
  cookies
    .replace(/\s+/g, '')
    .split(';')
    .forEach(cookie => {
      const [name, value] = cookie.split('=');
      cookiesObject[name] = value;
    });
  return cookiesObject;
};
