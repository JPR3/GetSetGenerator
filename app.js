'use strict'

const button = document.querySelector('.btn');
const output = document.querySelector('#output');
const nameInput = document.querySelector('#varName');
const typeInput = document.querySelector('#varType');
const indInput = document.querySelector('#indentation');

button.addEventListener('click', function() {
    if(indInput.valueAsNumber < 0){
        alert("Must have a positive number of indentations")
    }
    else{
        let spacer = ' '.repeat(indInput.valueAsNumber * 4);
        let name = nameInput.value;
        let type = typeInput.value;
        let capitalName = name[0].toUpperCase() + name.substring(1)
        let param = " new" + capitalName;

        output.textContent = 
        "public " + type + " get" + capitalName + "(){\r\n" +
        spacer + "    return " + name +";\r\n" + 
        spacer + "}" +
        "\r\n\n" +
        "public void set" + capitalName + "(" + type + param + "){\r\n" +
        spacer + "    " + name +  " =" + param + ";\r\n" +
        spacer + "}";
    }
    
});