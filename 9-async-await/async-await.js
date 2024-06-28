async function fetchData() {
    try {
      console.log('Fetching book data from Google Books API...');
      //fetch data from Google Books API
      const response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546');
      console.log('Response from Google Books API:', response1.status, response1.statusText);
      //parse data as JSON
      const data1 = await response1.json();
      console.log('Book data from Google Books API:', data1);

      //extract 1st book
      const book = data1.items[0];
      console.log('Book title:', book.volumeInfo.title);
      console.log('Book authors:', book.volumeInfo.authors);
  
      return book;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  
  fetchData().then((book) => {
    console.log('Final book data:', book);
  }).catch((error) => {
    console.error('Error:', error);
  });