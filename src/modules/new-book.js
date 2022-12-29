import { mainSection, listSection, addNewBookSection, contactSection } from "../index.js";

export const addNewBook = () => {
    const content = mainSection.firstChild;
    contactSection.style.color = 'black';
    listSection.style.color = 'black';
    addNewBookSection.style.color = 'blue';
    const newBook = document.createElement('section');
    newBook.id = 'add-new-book';
    newBook.innerHTML = `
    <h2>Add a new book</h2>
    <form action="#">
        <label for="title">
            <input id="title" type="text" placeholder="Title" />
        </label>
        <label for="author">
            <input id="author" type="text" placeholder="Author" />
        </label>
        <button id="add-button" type="submit">Add</button>
    </form>
    `;
    mainSection.replaceChild(newBook, content);
};
