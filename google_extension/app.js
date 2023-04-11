const quote = document.getElementById("quote")

// so i can use the api
//api that gives you the quote of the day
// let api = fetch('secrets.json')
//   .then(response => response.json())
//   .then(data => {
//     const apiKey = data.api_key;
//     // Use the apiKey variable to make API calls
//   });
// const category = 'happiness'

//middleware


fetch('secrets.json')
  .then(response => response.json())
  .then(data => {
    const apiKey = data.api_key;
    const category = 'inspirational';
    const $ = jQuery;
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': apiKey},
    contentType: 'application/json',
    success: function(result) {
      console.log(result);
      quote.textContent = JSON.stringify(result[0].quote);
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
      }
    })
  })

// axios({
//   method: "get",
//   url: url,
//   headers: { 'X-Api-Key': apiKey},
//   responseType: "application/json",
//
// }).then(function(result){
//   console.log(result);
// })



