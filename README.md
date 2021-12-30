### :wave: Hello, and welcome! I'm so glad you're here. :smile:

## About Me :
- These days, I go by "Mad", which is pronounced like the 'mod' in "modulo", and is _not_ an indication that I'm angry :-)
- This is the first project I've completed during my Software Engineering course at Thinkful, and is my first extended practice with JavaScript.
- I am a recent college graduate from Texas State University, where I studied the Spanish Langauge & Computer Science. (odd combo, I know) 
- Even though my academic background is mainly in C++, I'm having a ton of fun learning JavaScript, HTML, and CSS! 

## About the "Local Library Project" Assignment : 
This repo contains the solution(s) I've written for the Local Library Project assignment. The following links reference the source code for each corresponding page that is described in the project's instruction file, also linked below. 
- the [Accounts](https://github.com/mad-godinez/local_library_project/blob/main/public/src/accounts.js) page
- the [Books](https://github.com/mad-godinez/local_library_project/blob/main/public/src/books.js) page
- the [Home](https://github.com/mad-godinez/local_library_project/blob/main/public/src/home.js) page
- the [list](https://github.com/mad-godinez/local_library_project/blob/main/docs/function-instructions.md#function-instructions) of this project's required features, instructions, and expected output.
### Project Objectives :
> This project's main objective was to utilize JavaScript's native array methods, but there was also an emphasis on accessing & modifying object properties. The utility of the completed project is to have a website that represented a public library's collection of books, their authors, and information about the library's member accounts. My code provides functionality like finding the most popular books, seeing how many books a member has checked out in their membership's lifetime, how popular a particular author is, if a book is ready to be checked out, and more!

### What does the data look like?
The following code snippets represent the general shape of the given datasets. These examples are shortened for brevity - [complete datasets](https://github.com/mad-godinez/local_library_project/blob/main/public/data). 
   - _Accounts_  : an array of library member objects.
      ```
      const accounts = [
         {
          id: "5f446f2ecfaf0310387c9603",
          picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
          age: 25,
          name: {
                  first: "Esther",
                  last: "Tucker",
                },
          company: "ZILLACON",
          email: "esther.tucker@zillacon.me",
          registered: "Thursday, May 28, 2015 2:51 PM",
          },
       ];
      ```
   - _Books_ : an array of library book objects.
      ```
     const books = [
       {
         id: "5f44713265e5d8d17789beb0",
         title: "tempor occaecat fugiat",
         genre: "Travel",
         authorId: 16,  // the 'id' property of the author associated with this book object
         borrows: [     // an array of objects that represent the transaction data from when a member checks out a book
           {
             id: "5f446f2e4eff1030e7316861",    // the 'id' property of the member associated with this transaction
             returned: true,  // (f) if the book is still checked out, (t) if it is available for a different member
           },
         ],
       },
     ];
     ```
   - _Authors_ : an array of author objects.
      ```
      const authors = [
        {
          id: 0,
          name: {
            first: "Lucia",
            last: "Moreno",
          },
        },
      ];
      ```
### Languages & Tools Used :
   - My contributions: 
        * JavaScript
        * Visual Studio Code
        * MacOSX, command-line programming in the terminal
   - The rest of the project: 
        * HTML, 
        * CSS, 
        * JavaScript

### Installing & Running this Project :
1. clone this repository, or download the .zip file
2. open a shell terminal window in the location of the project's root directory
3. in your machine's terminal window, type `npm i` and press `enter`
4. ..., type `npm test` and press `enter` to see the results of my code against the tests
#### * Important Note: 
   I was responsible for writing my solutions **solely** to the above documents. The rest of the documents in the repository were given to me as a package for data handling/ testing purposes and are therefore not my intellectual property.

---
##### Thanks for stoping by! -Mad. 
