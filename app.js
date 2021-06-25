let currentPriceBitcoin = document.querySelector('#currentPriceBitcoin');
let currentPriceDogecoin = document.querySelector('#currentPriceDogecoin');
const newReq = new XMLHttpRequest();
newReq.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
newReq.onload = function(){
 const btcPrice = JSON.parse(this.responseText);
 currentPriceBitcoin.innerHTML = `The Current Price Of Bitcoin In USD : $${btcPrice.ticker.price}`;
};
newReq.onerror = function(){
  modal.style.display = "block";
};
newReq.send();
const secReq = new XMLHttpRequest();
secReq.open("GET", "https://api.cryptonator.com/api/ticker/doge-usd");
secReq.onload = function(){
    const dogePrice = JSON.parse(this.responseText);
 currentPriceDogecoin.innerHTML = `The Current Price Of Dogecoin In USD : $${dogePrice.ticker.price}`;
}
secReq.onerror = function(){
  modal.style.display = "block";
}
secReq.send();
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}