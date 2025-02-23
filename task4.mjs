//Task: My books they are a mess.

import { readFile } from 'fs/promises';
import test from './test.mjs';
const { isEqual, dosNotThrowError } = test();

async function loadBooks() {
    const data = await readFile('./sources/books.json', 'utf-8');
    return JSON.parse(data);
}

function BooksStartingWithThe(books) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.startsWith('The')) {
            result.push(books[i]);
        }
    }
    return result;
}

function BooksByAuthorsWithT(books) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].author.toLowerCase().indexOf('t') !== -1) {
            result.push(books[i]);
        }
    }
    return result;
}

function BooksAfter92(books) {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].year > 1992) {
            count++;
        }
    }
    return count;
}

function BooksBefore04(books) {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].year < 2004) {
            count++;
        }
    }
    return count;
}

function IsbnsByAuthor(books, authorName) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].author === authorName) {
            result.push(books[i].isbn);
        }
    }
    return result;
}

function listBooksAlphabetically(books, ascending = true) {
    const sortedBooks = [...books]; // Create a copy
    for (let i = 0; i < sortedBooks.length - 1; i++) {
        for (let j = 0; j < sortedBooks.length - i - 1; j++) {
            const comparison = sortedBooks[j].title.localeCompare(sortedBooks[j + 1].title);
            if (ascending ? comparison > 0 : comparison < 0) {
                const temp = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = temp;
            }
        }
    }
    return sortedBooks;
}

function listBooksChronologically(books, ascending = true) {
    const sortedBooks = [...books];
    for (let i = 0; i < sortedBooks.length - 1; i++) {
        for (let j = 0; j < sortedBooks.length - i - 1; j++) {
            if (ascending ? sortedBooks[j].year > sortedBooks[j + 1].year : sortedBooks[j].year < sortedBooks[j + 1].year) {
                const temp = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = temp;
            }
        }
    }
    return sortedBooks;
}

function BooksByAuthorLastName(books) {
    const result = {};
    for (let i = 0; i < books.length; i++) {
        const lastName = books[i].author.split(' ').pop();
        if (!result[lastName]) {
            result[lastName] = [];
        }
        result[lastName].push(books[i]);
    }
    return result;
}

function BooksByAuthorFirstName(books) {
    const result = {};
    for (let i = 0; i < books.length; i++) {
        const firstName = books[i].author.split(' ')[0];
        if (!result[firstName]) {
            result[firstName] = [];
        }
        result[firstName].push(books[i]);
    }
    return result;
}

async function runTests() {
    const books = await loadBooks();

    // Run basic tests
    isEqual(BooksStartingWithThe(books).length, 3, "Books starting with 'The'");
    isEqual(BooksByAuthorsWithT(books).length, 4, "Books by authors with 'T' in name");
    isEqual(BooksAfter92(books), 1, "Books published after 1992");
    isEqual(BooksBefore04(books), 6, "Books published before 2004");
    isEqual(IsbnsByAuthor(books, "J.R.R. Tolkien").length, 2, "ISBNs by J.R.R. Tolkien");

    isEqual(
        listBooksAlphabetically(books)[0].title,
        "1984",
        "Alphabetically sorted books start with '1984'"
    );
    isEqual(
        listBooksChronologically(books)[0].year,
        1859,
        "Chronologically sorted books start with the oldest"
    );

    // Test functions without throwing errors
    dosNotThrowError(() => BooksStartingWithThe(books), "Function should not throw errors");
    dosNotThrowError(() => BooksByAuthorsWithT(books), "Function should not throw errors");
    dosNotThrowError(() => BooksAfter92(books), "Function should not throw errors");

    console.log("All tests completed.");
}

runTests();
