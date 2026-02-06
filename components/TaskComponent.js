export class TaskComponent {

   /**
    * creation Task component
    * @param {string} title - The title of the task
    * @throws {Error} Throws an error if the title is empty
    */
   constructor(title) {
         this.validateTitle(title);
         this.title = title;
   }
   validateTitle(title) {
       if (!title || typeof title !== "string") {
           throw new Error("Title cannot be empty");
       }else if(title.trim().length ===0 ) throw new Error("Title cannot be empty or whitespace");    
   }

   /** 
    * Renders the task component
    * @returns {HTMLElement} The rendered task HTML
    */
   render(){
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        span.id = "task-title";
        span.classList.add("task-title");
        span.textContent = this.title;

        button.textContent = "Delete";
        button.id = "delete-btn";
        button.classList.add("delete-btn");
        button.addEventListener("click", () => {
                li.remove();
             });
        li.appendChild(span);
        li.appendChild(button);
    return li ;
   }

}