const formElement = document.getElementById("form");
formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailAdress = document.getElementById("email").value;
  console.log(emailAdress.includes('@' && '.'));
  const pattern = / @./
  console.log(pattern.test(emailAdress));
});