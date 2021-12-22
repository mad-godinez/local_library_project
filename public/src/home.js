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
    let target = book.genre;
    books.forEach((inner) => { if (inner.genre === target)  genre_count++;});

    if (!commonGenres.some((item) => item.name === target)){
      commonGenres.push({name: target, count: genre_count});
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
// returns: array with 5 or less author objects whose books have been checked out the most, [{name: "first + last", count: #num }]
  let topAuthors = [];
  let target = 0,       // key value used for comparison
      count = 0;        // the number of times the target author's book has been checked out
  let curr_author = {};

  books.forEach((book) => {
    target = book.authorId;
    count = books.reduce((total, book) => {
      return (book.authorId === target) ? total += book.borrows.length : total
      },0);

    curr_author = authors.find((author) => author.id === target);
    let {first, last} = curr_author.name;

    if (!(topAuthors.some((value) => value.name === `${first} ${last}`))){  // array doesn't contain duplicates
      topAuthors.push({name: `${first} ${last}`, count: count});
      count = 0;
    }
  });

  topAuthors.sort((first, second) => first.count  > second.count ? -1 : 1);
  topAuthors.splice(5);
  return topAuthors;
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