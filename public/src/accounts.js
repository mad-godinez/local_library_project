function findAccountById(accounts, id) {
// takes: array of account objects, string id of one account object
// returns: the account object with id matching the given
  return accounts.find((acct) => acct.id === id);
}

function sortAccountsByLastName(accounts) {
// takes: array of account objects
// returns: sorted copy of given array alphabetically according to last name (A->Z)
  return accounts.sort((acct1, acct2) => acct1.name.last < acct2.name.last ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books, arr) {
// takes: one account object, array of all book objects
// returns: number of times the given account's ID was found in any books' borrow array
  let num_borrowed = 0;

  for (let index in books ){
    const ttlBorrows = books[index].borrows;
    ttlBorrows.forEach((borrowed) => { 
      if (borrowed.id === account.id){
         num_borrowed++;
         if (borrowed.returned === false) arr.push({index, borrowed: ttlBorrows});// helper data, adds trasaction history of given acct to an array
      }      
    });
  }
  return num_borrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
// takes: one account object, an array of all book objects, an array of all author objects
// returns: an array of book objects with author info added that are currently checked out by the given account
  let checkedOutBooks = [];
  if (getTotalNumberOfBorrows(account, books, checkedOutBooks) === 0) return [];
  let bookswithAccount = [];

  checkedOutBooks.forEach((book) => {
    const currentBk = books[book.index];
    const author_index = currentBk.authorId;
    const currentAuth = authors.find((author) => author.id === author_index);

    bookswithAccount.push(embedAuthor(currentBk, currentAuth));  
  });
  return bookswithAccount;
}

function embedAuthor(book, auth){
// HELPER -- takes: current book object, current author object
//           returns: a book object with the contents of the author embedded before the 'borrows' property 
  const obj = {
    id: book.id,
    title: book.title,
    genre: book.genre,
    authorId: book.authorId,
    author: auth,
    borrows: book.borrows
  };
  return obj;
}

/// EXPORTING FUNCTIONS ---------------
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
/// --------------------- end EXPORTING 