const eee = 6

import collapse from "./images/arrow-collapse.svg"
import edit from "./images/pencil.svg"

function displayList(list){
const content = document.getElementById("content")

    for(let i=0; i<list.length; i++){
        const store = displayItem(list[i],i)
        
       content.appendChild(store.itemBox) 
       
    }
}

function displayItem(item, num){
    const itemBox = document.createElement("div")
    itemBox.id = num
    const title = document.createElement("div")
    title.innerHTML = item.title
    const description = document.createElement("div")
    description.innerHTML = item.description
    const dueDate = document.createElement("div")
    dueDate.innerHTML = item.dueDate
    const priority = document.createElement("div")
    priority.innerHTML = item.priority

    const checkButton = document.createElement("button")
    checkButton.addEventListener("click",item.checkToggle)
    checkButton.innerHTML = "check"

    const expandButton = document.createElement("button")
    expandButton.innerHTML = "expand"
    expandButton.addEventListener("click",expand)

    const editButton = document.createElement("button")
    const editImg = document.createElement("img")
    editImg.src = edit
     editImg.id = "icon"
     editButton.appendChild(editImg)
    
    editButton.addEventListener("click",openEdit)

    const collapseButton = document.createElement("button")
   const collapseImg = document.createElement("img")
   collapseImg.src = collapse
    collapseImg.id = "icon"
    collapseButton.appendChild(collapseImg)
    collapseButton.addEventListener("click",standard)

    const finishEdit = document.createElement("button")
    finishEdit.innerHTML = "submit"
    finishEdit.addEventListener("click", submit)

    const editTitle = document.createElement("input")
    const editDescription = document.createElement("input")
    const editDueDate = document.createElement("input")
    const editPriority = document.createElement("input")

    function expand(){
        itemBox.innerHTML = ""
        itemBox.appendChild(title)
        itemBox.appendChild(description)
        itemBox.appendChild(dueDate)
        itemBox.appendChild(priority)

        itemBox.appendChild(checkButton)
        itemBox.appendChild(editButton)
        itemBox.appendChild(collapseButton)
    }

    function submit(){
        item.setTitle(editTitle.value)
        title.innerHTML = editTitle.value

        item.setDescription(editDescription.value)
        description.innerHTML = editDescription.value

        item.setDueDate(editDueDate.value)
        dueDate.innerHTML = editDueDate.value

        item.setPriority(editPriority.value)
        priority.innerHTML = editPriority.value


        standard()
    }

    function standard(){
        itemBox.innerHTML = ""
        itemBox.appendChild(title)
    itemBox.appendChild(priority)
    itemBox.appendChild(checkButton)
    itemBox.appendChild(expandButton)

    }

    function openEdit(){
        itemBox.innerHTML = ""
        itemBox.appendChild(editTitle)
        editTitle.value = ""
        editTitle.placeholder = "Title"

        itemBox.appendChild(editDescription)
        editDescription.value = ""
        editDescription.placeholder = "Description"

        itemBox.appendChild(editDueDate)
        editDueDate.value = ""
        editDueDate.placeholder = "DueDate"

        itemBox.appendChild(editPriority)
        editPriority.value = ""
        editPriority.placeholder = "Priority"

        itemBox.appendChild(finishEdit)

        itemBox.appendChild(collapseButton)

    }

   standard()
    
    return {itemBox,expand,openEdit,standard,num}

}

export{displayList}