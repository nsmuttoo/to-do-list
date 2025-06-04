
function createItem(title,description,dueDate,priority){
const check = 0

function setTitle(newTitle){
    this.title = newTitle
}

function setDescription(newDescription){
    this.description = newDescription
}

function setDueDate(newDueDate){
    this.dueDate = newDueDate
}

function setPriority(newPiority){
    this.priority=newPiority
}

function checkToggle(){
    if(this.check == 0){
        this.check =1
    }else{
        this.check=0
    }
}



    return{title,description,dueDate,priority,check ,setTitle,setDescription,setDueDate,setPriority,checkToggle}


}






export{createItem}