const eee = 6

import collapse from "./images/arrow-collapse.svg"
import expandSvg from "./images/arrow-expand.svg"
import edit from "./images/pencil.svg"
import unchecked from "./images/checkbox-blank-outline.svg"
import checked from "./images/checkbox-intermediate.svg"
import save from "./images/content-save-outline.svg"
import plus from "./images/plus.svg"

let lastList = []

function displayList(list){
const content = document.getElementById("content")
content.innerHTML = ""
lastList = list
addToDoDisplay()
    for(let i=0; i<list.length; i++){
        const store = displayItem(list[i],i)
        
       content.appendChild(store.itemBox) 
       
    }
}

function addToDoDisplay(){
    const content = document.getElementById("content")
    const greaterAddBox = document.createElement("div")

    const addBox = document.createElement("div")
    const title = document.createElement("input")
    title.placeholder = "Title"
    const description = document.createElement("input")
    description.placeholder = "Descripton"
    const dueDate = document.createElement("input")
    dueDate.placeHolder = "DueDate"
    const priority = document.createElement("input")
    priority.placeholder = "Priority"

    const startNewButton = document.createElement("button")
    const submitNewButton = document.createElement("button")

    const plusImg = document.createElement("img")
   plusImg.src = plus
   plusImg.id = "icon"
startNewButton.appendChild(plusImg)
    startNewButton.addEventListener("click",startNew)
    addBox.appendChild(startNewButton)
    content.appendChild(addBox)

    function startNew(){
        addBox.innerHTML = ""
        console.log("eeee")
        addBox.appendChild(title)
        addBox.appendChild(description)
        addBox.appendChild(dueDate)
        addBox.appendChild(priority)

        addBox.appendChild(submitNewButton)
        
        
    }


}

function displayItem(item, num){
    const itemBox = document.createElement("div")
    itemBox.id = num
    itemBox.classList = "itemBoxStd, itemBox"
    const title = document.createElement("div")
    title.innerHTML = item.title
    const description = document.createElement("div")
    description.innerHTML = item.description
    const dueDate = document.createElement("div")
    dueDate.innerHTML = item.dueDate
    const priority = document.createElement("div")
    priority.innerHTML = item.priority

    const checkButton = document.createElement("button")
    checkButton.addEventListener("click",changeCheck)
    
   
   const uncheckedImg = document.createElement("img")
    uncheckedImg.src = unchecked
    uncheckedImg.id = "icon"
    checkButton.appendChild(uncheckedImg)

   const checkedImg = document.createElement("img")
   checkedImg.src = checked
   checkedImg.id = "icon"

    const expandButton = document.createElement("button")
    expandButton.addEventListener("click",expand)

    const expandImg = document.createElement("img")
    expandImg.src = expandSvg
    expandImg.id = "icon"
    expandButton.appendChild(expandImg)

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

    finishEdit.addEventListener("click", submit)

    const submitImg = document.createElement("img")
    submitImg.src = save
    submitImg.id = "icon"
    finishEdit.appendChild(submitImg)

    const editTitle = document.createElement("input")
    const editDescription = document.createElement("input")
    const editDueDate = document.createElement("input")
    const editPriority = document.createElement("input")

    function changeCheck(){
        if(item.check == 0){
            checkButton.innerHTML = ""
            checkButton.appendChild(checkedImg)
        }else{

            checkButton.innerHTML = ""
            checkButton.appendChild(uncheckedImg)
        }
        item.checkToggle()
    }

    function expand(){
        itemBox.innerHTML = ""
        itemBox.classList = "itemBoxExp, itemBox"
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
        itemBox.classList = "itemBoxStd, itemBox"
        itemBox.innerHTML = ""
        itemBox.appendChild(title)
    itemBox.appendChild(priority)
    itemBox.appendChild(checkButton)
    itemBox.appendChild(expandButton)

    }

    function openEdit(){
        itemBox.classList = "itemBoxEdt, itemBox"
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