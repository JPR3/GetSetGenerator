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

        switch(selectedLanguage){
            case Language.Java:{
                output.textContent = 
                "public " + type + " get" + capitalName + "(){\r\n" +
                spacer + "    return " + name +";\r\n" + 
                spacer + "}" +
                "\r\n\n";
                if(!seperateGen.checked){
                    output.textContent += spacer;
                }
                output.textContent += 
                "public void set" + capitalName + "(" + type + param + "){\r\n" +
                spacer + "    " + name +  " =" + param + ";\r\n" +
                spacer + "}";
                break;
            }
            case Language.Python:{
                output.textContent =
                "This is where the python methods will go!";
                break;
            }
            default:
                output.textContent = "Uh oh :(";
                break;
                
        }
        
        
    }
    
});
function switchLanguage(evt, language){
    switch(language){
        case "Java":
            selectedLanguage = Language.Java;
            break;
        case "Python":
            selectedLanguage = Language.Python;
            break;
        default:
            alert("Error: Language selection invalid");
    }
}