'use strict';

let contentArea = document.getElementById('dynamic-content');

let button = document.createElement('button');

button.innerText = 'Button';

button.classList = 'btn btn-primary';

contentArea.appendChild(button);
