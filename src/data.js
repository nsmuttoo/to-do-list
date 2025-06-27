
function createItem(title,description,dueDate,priority,check,deleted){



function deleteThis(){
this.deleted = 1
}



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
    console.log(this.check)
}





    return{title,description,dueDate,priority,check,deleted ,setTitle,setDescription,setDueDate,setPriority,checkToggle,check,deleteThis,deleted}


}






export{createItem}