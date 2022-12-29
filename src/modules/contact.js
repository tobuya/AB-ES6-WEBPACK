import { mainSection, listSection, addNewBookSection, contactSection } from "../index.js";

export const showContact = () => {
    const content = mainSection.firstChild;
    contactSection.style.color = 'blue';
    listSection.style.color = 'black';
    addNewBookSection.style.color = 'black';
    const contactInfo = document.createElement('section');
    contactInfo.id = 'contact-info';
    contactInfo.innerHTML = `
    <h2>Contact information</h2>
    <div id="contact-info-div">
        <p>Do you have any questions or just want to say "Hello"? <br>You can reach out to us!</p>
        <ul>
            <li>Our email: mail@mail.com</li>
            <li>Our phone number: 0043588534422</li>
            <li>Our address: Streetname 22, 84503 City, Country</li>
        </ul>
    </div>
    `;
    mainSection.replaceChild(contactInfo, content);
}
