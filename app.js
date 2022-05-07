'use strict'

class Language{
    static Java = new Language("Java");
    static Python = new Language("Python");
    constructor(name){
        this.name = name;
    }
}
const button = document.querySelector('.btn');
const output = document.querySelector('#output');
const nameInput = document.querySelector('#varName');
const typeInput = document.querySelector('#varType');
const indInput = document.querySelector('#indentation');
const seperateGen = document.querySelector('#seperateMethods')
let selectedLanguage = Language.Java;

button.addEventListener('click', function() {
    if(indInput.valueAsNumber < 0){
        indInput.value = 0;
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
        "\r\n\n";
        output.textContent += "public void set" + capitalName + "(" + type + param + "){\r\n" +
        spacer + "    " + name +  " =" + param + ";\r\n" +
        spacer + "}";
        if(!seperateGen.checked)
        {
            let index = output.textContent.indexOf("public void set");
            output.textContent = output.textContent.substring(0, index) + spacer + output.textContent.substring(index);
        }
    }
    
});
//function switchLanguage(evt,)