//parameters
const urls = [
  'https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546',
  'https://www.googleapis.com/books/v1/volumes?q=isbn:9780439784542',
  'https://www.googleapis.com/books/v1/volumes?q=isbn:9780547928227'
];

//func def
function loadUrls(urls) {
  return Promise.all(urls.map(url => fetch(url)
    .then(response => response.text())
    .catch(error => console.error(`error with load ${url}: ${error}`))
  ));
}

//func call
loadUrls(urls).then((responses) => {
  console.log('Responses:', responses);
  responses.forEach((response, index) => {
    console.log(`Response ${index + 1}:`, response);
  });
}).catch((error) => {
  console.error('Error:', error);
});