import { mainSection, listSection, addNewBookSection, contactSection } from "../index.js";

export const showBookList = () => {
    const content = mainSection.firstChild;
    contactSection.style.color = 'black';
    listSection.style.color = 'blue';
    addNewBookSection.style.color = 'black';
    const bookList = document.createElement('section');
    bookList.id = 'book-list';
    bookList.innerHTML = `
    <h2>All awesome books</h2>
    <table>
        <tr>
            <td>"Title" by author</td>
            <td><button>Remove</button></td>
        </tr>
        <tr>
            <td>"Title 2" by author</td>
            <td><button>Remove</button></td>
        </tr>
        <tr>
            <td>"Title 3" by author</td>
            <td><button>Remove</button></td>
        </tr>
        <tr>
            <td>"Title 4" by author</td>
            <td><button>Remove</button></td>
        </tr>
    </table>
    `;
    mainSection.replaceChild(bookList, content);
};

window.addEventListener('load', showBookList);
