const quote = document.getElementById(".quote")

if(quote) {
  quote.textContent = "quote";//changing the content of h1 using dom
}
// so i can use the api
//api that gives you the quote of the day
// const category = 'happiness'

//middleware


const category = 'happiness'
const $ = jQuery;
$.ajax({
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
  headers: { 'X-Api-Key': apiKey},
  contentType: 'application/json',
  success: function(result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error('Error: ', jqXHR.responseText);
  }
});

// axios({
//   method: "get",
//   url: url,
//   headers: { 'X-Api-Key': apiKey},
//   responseType: "application/json",
//
// }).then(function(result){
//   console.log(result);
// })



