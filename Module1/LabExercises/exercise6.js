const book = {
    "title" : "The Hunger Games",
    "description" : "Dystopian young-adult fiction",
    "author" : "Suzanne Collins",
    "numberOfPages" : "374"
}

console.log(book.title); // The Hunger Games
console.log(book.description); // Dystopian young-adult fiction
console.log(book.author); // Suzanne Collins
console.log(book.numberOfPages); // 374

book.description = "The first book of a trilogy";
console.log(book.description); // The first book of a trilogy


let books = ['Title', 'Author', 'Description', 'Number of Pages', 'Number of Chapters'];
console.log(books[0]); // 'Title'
console.log(books[1]); // 'Author'
console.log(books[2]); // 'Description'
console.log(books[3]); // 'Number of Pages'
console.log(books[4]); // 'Number of Chapters'