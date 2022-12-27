import _ from 'lodash';
import './index.css';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());