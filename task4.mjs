//Task: My books they are a mess.

import { readFile } from 'fs/promises';

async function loadBooks() {
    const data = await readFile('./books.json', 'utf-8');
    return JSON.parse(data);
}

(async () => {
    const books = await loadBooks();
    console.log(books);
})();

function BooksStartingWithThe() {
    return books.filter(book => book.title.startsWith('The'));
}

function BooksByAuthorsWithT() {
    return books.filter(book => book.author.toLowerCase().includes('t'));
}

function BooksAfter92() {
    return books.filter(book => book.year > 1992).length;
}

function BooksBefore04() {
    return books.filter(book => book.year < 2004).length;
}

function IsbnsByAuthor(authorName) {
    return books
        .filter(book => book.author === authorName)
        .map(book => book.isbn);
}

function listBooksAlphabetically(ascending = true) {
    return books.slice().sort((a, b) =>
        ascending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
}

function listBooksChronologically(ascending = true) {
    return books.slice().sort((a, b) =>
        ascending ? a.year - b.year : b.year - a.year
    );
}

function BooksByAuthorLastName() {
    return books.reduce((acc, book) => {
        const lastName = book.author.split(' ').pop();
        if (!acc[lastName]) {
            acc[lastName] = [];
        }
        acc[lastName].push(book);
        return acc;
    }, {});
}

function BooksByAuthorFirstName() {
    return books.reduce((acc, book) => {
        const firstName = book.author.split(' ')[0];
        if (!acc[firstName]) {
            acc[firstName] = [];
        }
        acc[firstName].push(book);
        return acc;
    }, {});
}

export {
    BooksStartingWithThe,
    BooksByAuthorsWithT,
    BooksAfter92,
    BooksBefore04,
    IsbnsByAuthor,
    listBooksAlphabetically,
    listBooksChronologically,
    BooksByAuthorLastName,
    BooksByAuthorFirstName
};
