function findAuthorById(authors, id) {
// takes: an array of author objects, a number ID of one author object
// returns:  author object matching given ID
  return (authors.find((person) => person.id === id));
}

function findBookById(books, id) {
// takes: an array of book objects, a string ID of one book object
// returns: the book object that matches given ID
  return (books.find((book) => book.id === id));
}

function partitionBooksByBorrowedStatus(books) {
// takes: an array of book objects
// returns: array containing 2 exclusive arrays(book objects currently checked out & books that are returned)
  let checked_out = books.filter((book) => book.borrows[0].returned === false);
  let checked_in = books.filter((book) => book.borrows[0].returned === true);

  return [checked_out, checked_in];
}

function getBorrowersForBook(book, accounts) {
// takes: one book object, an array of all account objects
// returns: an array of at most 10 account objects that have borrowed the given book with the book's returned status embedded
  let topBorrowers = [];
  const transactions = book.borrows;

  transactions.forEach((borrow) => {
    const current = accounts.find((acct)=> acct.id === borrow.id);
    topBorrowers.push({id: current.id, returned: borrow.returned, ...current});
  });

  topBorrowers.splice(10);
  return topBorrowers;
}

/// EXPORTING FUNCTIONS ---------------
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
/// --------------------- end EXPORTING 