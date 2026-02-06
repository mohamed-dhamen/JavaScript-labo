import {TaskComponent} from "./components/TaskComponent.js";
const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#task-list");

let Elemenents = [];
Elemenents.push(input);
Elemenents.push(addBtn);
Elemenents.push(list);

 function validateElements(elements){return elements.every(el=>el  instanceof HTMLElement)}

if(validateElements(Elemenents)){
    addBtn.addEventListener("click", () => {
        try {
            const task = new TaskComponent(input.value);
            list.appendChild(task.render());
            input.value = "";
            input.focus();
        } catch (error) {
            alert(error.message);
        }
    });
}else{
    console.error("One or more elements are not valid HTML elements.");
}       
input.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){
        addBtn.click();
    }       
});