const formElement = document.getElementById("form");
const checkEmail = (event) => {
  event.preventDefault();
  
  const inputEmail = document.getElementById("email");
  const emailAdress = inputEmail.value;
  const alertMsg = document.querySelector('.wrong-msg');

  if(!emailAdress.includes('@') || !emailAdress.includes('.')){ // ao menos @ e . no string do email
    alertMsg.style.opacity = 1;
    inputEmail.classList.add('wrong-email');
    return;
  }
  else{
    alertMsg.style.opacity = 0;
    inputEmail.classList.remove('wrong-email');
    document.querySelector(".sign-up-form").style.opacity = 0;
    setInterval(() => {
      document.querySelector(".sign-up-form").style.display = 'none';
      document.querySelector(".sucess-message").style.display = 'flex';
    }, 500);
    setInterval(() => document.querySelector(".sucess-message").style.opacity = 1, 800);
    document.getElementById('js-email').innerHTML = emailAdress;
  }
};

document.body.addEventListener('keyup', (event) => {
  if(event.key = 'Enter'){
    checkEmail(event);
  }
});

formElement.addEventListener('submit', (event) => {
  checkEmail(event);
});