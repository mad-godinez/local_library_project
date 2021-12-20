function getTotalBooksCount(books) {
// takes: array of book objects
// returns: number of book objects inside the array
  return books.length; 
}

function getTotalAccountsCount(accounts) {
// takes: array of account objects
// returns: number of accounts insie array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
// takes: array of book objects
// returns: number of books that are currently checked out of the library
  let books_borrowed_now = 0;
  books.forEach((book) => { if (book.borrows[0].returned === false) books_borrowed_now++});
  return books_borrowed_now;
}

function getMostCommonGenres(books) {
// takes: array of book objects
// returns: array containing at most 5 most popular genre objects{name: "fiction", count: #occurrances}
  let commonGenres = [];
  let genre_count = 0;

  books.forEach((book) => {
    let key = book.genre;
    books.forEach((inner) => { if (inner.genre === key)  genre_count++;});

    if (!commonGenres.some((item) => item.name === key)){
      commonGenres.push({name: key, count: genre_count});
      genre_count = 0;
    }
  });

  commonGenres.sort((genre1, genre2) => genre1.count > genre2.count ? -1 : 1);
  commonGenres.splice(5);
  return commonGenres;
}
function getMostPopularBooks(books) {
// takes: an array of book objects
// returns: array of 5 or less books that have been borrowed the most 
  books.sort((book1, book2) => book1.borrows.length > book2.borrows.length ? -1 : 1);
  const popularBooks = books.map((book)=> ({name: book.title, count: book.borrows.length}));
  popularBooks.splice(5);
  return popularBooks;
}
function getMostPopularAuthors(books, authors) {
// takes: array of book objects, array of author objects
// returns: array with 5 or less author objects whose books have been checked out the most
  let popularAuthors = [];
  let count = 0;

  books.forEach((book) => {
    const current_author = authors.find((auth) => auth.id === book.authorId);
    books.forEach((current_book) => {
      if (current_book.authorId === current_author.id) count += current_book.borrows.length;
    });
    if (!popularAuthors.some((auth)=> auth.id === current_author.id)){
      let {first, last} = current_author.name;
      popularAuthors.push({name: `${first} ${last}`, count: count});
      count = 0;
    }
  });

  popularAuthors.sort((first, second) => first.count > second.count ? -1 : 1);
  popularAuthors.splice(5);
  return popularAuthors;
}

/// EXPORTING FUNCTIONS ---------------
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
/// --------------------- end EXPORTING 