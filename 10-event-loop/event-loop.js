const apiKey = 'AIzaSyCPhjEAgxKdaCreHrijni3Y8-ZOtQbAWH0';

async function fetchGoogleBooksApi(query, timeout = 5000) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
  const controller = new AbortController();
  //timeout to abort the request after specified time
  const timeoutId = setTimeout(() => {
    controller.abort();
}, timeout);

try {
    //fetch API data with AbortController
    const response = await fetch(url, {
        signal: controller.signal
    });
    //parse JSON response
    const data = await response.json();
        clearTimeout(timeoutId);
    return data;
} catch (error) {
    //handle AbortError
    if (error.name === 'AbortError') {
        console.log('Request timed out');
    } else {
        console.error(`Error: ${error}`);
    }
  }
}

const query = 'javascript';
fetchGoogleBooksApi(query).then(data => {
    console.log(data);
    //extract data from response
    const books = data.items;
    //log book details
    books.forEach(book => {
        console.log(`Title: ${book.volumeInfo.title}`);
        console.log(`Authors: ${book.volumeInfo.authors.join(', ')}`);
        console.log(`Publisher: ${book.volumeInfo.publisher}`);
        console.log('---');
    });
}).catch(error => {
    console.error(`Error: ${error}`);
});