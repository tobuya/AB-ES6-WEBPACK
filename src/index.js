import { DateTime } from "luxon";
import './index.css';

const dateHolder = document.getElementById('luxon-date');

const displayDate = () => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    dateHolder.innerHTML = now;
};

window.addEventListener('load', displayDate);
