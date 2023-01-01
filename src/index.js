import { DateTime } from 'luxon';
import './index.css';
import Book from './modules/book-list.js';

const dateHolder = document.getElementById('luxon-date');
export const mainSection = document.getElementById('main');
export const listNav = document.querySelector('.list');
export const addNewBookNav = document.querySelector('.add');
export const contactNav = document.querySelector('.contact');
export const booksSection = document.getElementById('book-list');
export const addBookSection = document.getElementById('add-book');
export const contactSection = document.getElementById('contact-info');
const submitBtn = document.getElementById('add-button');

const displayDate = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  dateHolder.innerHTML = now;
};

const loadBookList = () => {
  booksSection.classList.add('book-list-section');
  booksSection.style.display = 'flex';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
  contactNav.classList.remove('active');
  addNewBookNav.classList.remove('active');
  listNav.classList.add('active');
};

const showContact = () => {
  contactSection.classList.add('contact-info-section');
  contactSection.style.display = 'flex';
  addBookSection.style.display = 'none';
  booksSection.style.display = 'none';
  contactNav.classList.add('active');
  addNewBookNav.classList.remove('active');
  listNav.classList.remove('active');
};

const displayInputForm = () => {
  addBookSection.classList.add('add-new-book');
  addBookSection.style.display = 'flex';
  booksSection.style.display = 'none';
  contactSection.style.display = 'none';
  contactNav.classList.remove('active');
  listNav.classList.remove('active');
  addNewBookNav.classList.add('active');
};

document.addEventListener('DOMContentLoaded', Book.displayBooks);
window.addEventListener('load', displayDate);
contactNav.addEventListener('click', showContact);
listNav.addEventListener('click', loadBookList);
window.addEventListener('load', loadBookList);
addNewBookNav.addEventListener('click', displayInputForm);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  Book.addBookToList(book);
  Book.addBookToStore(book);
  Book.clearInputFields();
});

document.getElementById('list-container').addEventListener('click', (e) => {
  Book.removeBookFromList(e.target.parentElement.previousElementSibling.innerHTML);
  Book.deleteBook(e.target);
});