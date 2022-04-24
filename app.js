'use strict'

const button = document.querySelector('.btn');
const output = document.querySelector('#output');
const nameInput = document.querySelector('#varName');
const typeInput = document.querySelector('#varType');

button.addEventListener('click', function() {
    let name = nameInput.value;
    let type = typeInput.value;
    let capitalName = name[0].toUpperCase() + name.substring(1)
    let param = " new" + capitalName;
    output.textContent = 
    "public " + type + " get" + capitalName + "(){\r\n" +
    "    return " + name +";\r\n}" +
    "\r\n\n" +
    "public void set" + capitalName + "(" + type + param + "){\r\n" +
    "    " + name +  " =" + param + ";\r\n}";
});