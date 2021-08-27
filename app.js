pwdKeys = '';
abc = 'abcdefhkjlmnopqrstuzivwxyz';
ABC = 'ABCDEFHKJLMNOPQRSTUVWXYZI';
num = '0123456789';
sym = '+-*/=#&!?';
password = '';
document.querySelector('button').addEventListener('click', function () {
  pwdKeys = '';
  password = '';
  pwdLength = document.querySelector('#passwordLength').value;
  if (document.querySelector('#upperCase').checked) {
    pwdKeys += ABC;
  }
  if (document.querySelector('#lowerCase').checked) {
    pwdKeys += abc;
  }
  if (document.querySelector('#numbers').checked) {
    pwdKeys += num;
  }
  if (document.querySelector('#symbols').checked) {
    pwdKeys += sym;
  }
  if (pwdKeys) {
    for (let i = 0; i < pwdLength; i++) {
      password += pwdKeys[Math.floor(Math.random() * pwdKeys.length)];
    }
  } else {
    pwdKeys =
      'abcdefhkjlmnopqrstuzivwxyzABCDEFHKJLMNOPQRSTUVWXYZI0123456789+-*/=#&!?';
    for (let i = 0; i < pwdLength; i++) {
      password += pwdKeys[Math.floor(Math.random() * pwdKeys.length)];
    }
  }
  document.querySelector('#password').value = password;
  document.querySelector('#password').style.fontSize = '22px';
});
