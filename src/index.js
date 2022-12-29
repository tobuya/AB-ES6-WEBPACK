import { DateTime } from "luxon";
import './index.css';
import { showBookList } from './modules/book-list.js';
import { addNewBook } from './modules/new-book.js';
import { showContact } from './modules/contact.js';

const dateHolder = document.getElementById('luxon-date');
export const mainSection = document.getElementById('main');
export const listSection = document.getElementById('list');
export const addNewBookSection = document.getElementById('add');
export const contactSection = document.getElementById('contact');

const displayDate = () => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    dateHolder.innerHTML = now;
};

window.addEventListener('load', displayDate);
listSection.addEventListener('click', showBookList);
addNewBookSection.addEventListener('click', addNewBook);
contactSection.addEventListener('click', showContact);