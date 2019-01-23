

var slider = document.getElementById('slider');
var label = document.getElementById('label');
var btn = document.getElementById('btn');
var password = document.getElementById('password');
var smalls = document.getElementById('smalls');
var capitals = document.getElementById('capitals');
var num = document.getElementById('num');
var sym = document.getElementById('sym');

function createPassword() {
  var smallLetters = "abcdefghijklmnopqrstuvwxyz";
  var Numbers = "0123456789";
  var Symbols = "!#$%&'()-=^~¥@+*<>/?";
  var Letters = '';
  var len = slider.value;
  var pw = '';

  if (smalls.checked) {
    Letters += smallLetters;
  }
  if (capitals.checked) {
    Letters += smallLetters.toUpperCase();
  }
  if (num.checked) {
    Letters += Numbers;
  }
  if (sym.checked) {
    Letters += Symbols;
  }

  for (var i=0; i<len; i++) {
    pw += Letters[Math.floor(Math.random() * Letters.length)];
  }


  password.value = pw;
};

slider.addEventListener('change', function() {
  label.innerHTML = this.value;
});

btn.addEventListener('click', function() {
  if (!smalls.checked && !capitals.checked && !num.checked && !sym.checked) {
    password.value = 'CHECK ANY BOX BELOW!!';
  } else {
      createPassword();
  }
});
