const eee = 6

import collapse from "./images/arrow-collapse.svg"
import expandSvg from "./images/arrow-expand.svg"
import edit from "./images/pencil.svg"
import unchecked from "./images/checkbox-blank-outline.svg"
import checked from "./images/checkbox-intermediate.svg"
import save from "./images/content-save-outline.svg"
import plus from "./images/plus.svg"
import back from "./images/arrow-left.svg"

import { projectPage } from "./projects"
import { createItem } from "./data"

let lastList = []
export {getList}

function getList(){
    return lastList
}

function orderList(list){
    let checkedList  = []
    let unCheckedList = []
for(let i = 0; i <list.length; i++){
    if (list[i].check ==0){
        unCheckedList.push(list[i])
    }else{
        checkedList.push(list[i])
    }


}
for(let j=0; j<checkedList.length;j++){
    unCheckedList.push(checkedList[j])
}
return unCheckedList

}

function displayList(list){
const content = document.getElementById("content")
content.innerHTML = ""
list = orderList(list)
lastList = list
const buttonBox = document.createElement("div")

const backButton = document.createElement("button")
backButton.addEventListener("click",backButtonOnClick)
const backButtonImg = document.createElement("img")
backButtonImg.src = back
backButtonImg.id ="icon"
backButton.appendChild(backButtonImg)

function backButtonOnClick(){
projectPage()
}

content.appendChild(backButton)
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
    dueDate.type = "date"
    
    dueDate.placeholder = "DueDate"
    const priority = document.createElement("select")
    priority.placeholder = "Priority"
    priority.name = "Priority"
    const pLabel = document.createElement("label")
    pLabel.htmlFor = "Priority"
    pLabel.innerHTML = "Priority"


    const pOne = document.createElement("option")
    const pTwo = document.createElement("option")
    const pThree = document.createElement("option")
    const pFour = document.createElement("option")

    pOne.value = "1"
    pOne.innerHTML = "1"
    pTwo.value = "2"
    pTwo.innerHTML = "2"
    pThree.value = "3"
    pThree.innerHTML = "3"
    pFour.value = "4"
    pFour.innerHTML = "4"
    priority.appendChild(pOne)
    priority.appendChild(pTwo)
    priority.appendChild(pThree)
    priority.appendChild(pFour)

    const startNewButton = document.createElement("button")
    const submitNewButton = document.createElement("button")

    const saveImg = document.createElement("img")
    saveImg.src = save
    saveImg.id = "icon"

    submitNewButton.appendChild(saveImg)
    submitNewButton.addEventListener("click", saved)


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
        addBox.appendChild(pLabel)
        addBox.appendChild(priority)

        addBox.appendChild(submitNewButton)
        
        
    }
    function saved(){
        console.log("ooooo")
        lastList.push(
            createItem(title.value,description.value,dueDate.value,priority.value))
        displayList(lastList)

    }


}

function displayItem(item, num){
    const itemBox = document.createElement("div")
    itemBox.id = num
    itemBox.classList.add("itemBoxStd")
    itemBox.classList.add("itemBox") 
    const title = document.createElement("div")
    title.innerHTML = item.title

    title.classList.add("title")
    const description = document.createElement("div")
    description.classList.add("description")
    description.innerHTML = item.description
    const dueDate = document.createElement("div")
    dueDate.classList.add("dueDate")
    dueDate.innerHTML = item.dueDate
    const priority = document.createElement("div")
    priority.classList.add("priority")
    priority.innerHTML = item.priority

    const checkButton = document.createElement("button")
    checkButton.addEventListener("click",changeCheck)
    checkButton.classList.add("checkButton")
   
   const uncheckedImg = document.createElement("img")
    uncheckedImg.src = unchecked
    uncheckedImg.id = "icon"
    

   const checkedImg = document.createElement("img")
   checkedImg.src = checked
   checkedImg.id = "icon"
if(item.check == 0){
    checkButton.appendChild(uncheckedImg)
}else{
    checkButton.appendChild(checkedImg)
}
   

    const expandButton = document.createElement("button")
    expandButton.addEventListener("click",expand)
    expandButton.classList.add("expandButton")

    const expandImg = document.createElement("img")
    expandImg.src = expandSvg
    expandImg.id = "icon"
    expandButton.appendChild(expandImg)

    const editButton = document.createElement("button")
    const editImg = document.createElement("img")
    editImg.src = edit
     editImg.id = "icon"
     editButton.appendChild(editImg)

     editButton.classList.add("editButton")
    
    editButton.addEventListener("click",openEdit)

    const collapseButton = document.createElement("button")
   const collapseImg = document.createElement("img")
   collapseImg.src = collapse
    collapseImg.id = "icon"
    collapseButton.appendChild(collapseImg)
    collapseButton.addEventListener("click",standard)

    collapseButton.classList.add("collapseButton")

    const finishEdit = document.createElement("button")

    finishEdit.addEventListener("click", submit)

    const submitImg = document.createElement("img")
    submitImg.src = save
    submitImg.id = "icon"
    finishEdit.appendChild(submitImg)

    const editTitle = document.createElement("input")
    const editDescription = document.createElement("input")
    const editDueDate = document.createElement("input")
    editDueDate.type = "date"
    const editPriority = document.createElement("select")
    editDueDate.name="dueDate"
   
    
    editPriority.name = "Priority"
    const pLabel = document.createElement("label")
    pLabel.htmlFor = "Priority"
    const dLabel = document.createElement("label")

    dLabel.htmlFor = "dueDate"
    dLabel.innerHTML = "Due Date"
    pLabel.innerHTML = "Priority"


    const pOne = document.createElement("option")
    const pTwo = document.createElement("option")
    const pThree = document.createElement("option")
    const pFour = document.createElement("option")

    pOne.value = "1"
    pOne.innerHTML = "1"
    pTwo.value = "2"
    pTwo.innerHTML = "2"
    pThree.value = "3"
    pThree.innerHTML = "3"
    pFour.value = "4"
    pFour.innerHTML = "4"
    editPriority.appendChild(pOne)
    editPriority.appendChild(pTwo)
    editPriority.appendChild(pThree)
    editPriority.appendChild(pFour)

   // deleteItem(0)

    function deleteItem(index){
        let store = ""
       let tempArr = lastList
        tempArr[index] = ""

        for(let i = index; i<tempArr.length; i++){
            if(tempArr[i+1] !== undefined){
            tempArr[i] = tempArr[i+1]}
        }
        tempArr.pop()
        lastList = tempArr
        displayList(lastList)
    }


    function changeCheck(){
        if(item.check == 0){
            checkButton.innerHTML = ""
            checkButton.appendChild(checkedImg)
        }else{

            checkButton.innerHTML = ""
            checkButton.appendChild(uncheckedImg)
        }
        item.checkToggle()
        displayList(lastList)
    }

    function expand(){
        itemBox.innerHTML = ""
        itemBox.classList = ""
        itemBox.classList.add("itemBoxExp")
        itemBox.classList.add("itemBox")
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
        itemBox.classList = ""
        itemBox.classList.add("itemBoxStd")
        itemBox.classList.add("itemBox")
        itemBox.innerHTML = ""
        itemBox.appendChild(title)
    itemBox.appendChild(priority)
    itemBox.appendChild(checkButton)
    itemBox.appendChild(expandButton)

    }

    function openEdit(){
        itemBox.classList = ""
        itemBox.classList.add("itemBoxEdt")
        itemBox.classList.add("itemBox")
        itemBox.innerHTML = ""
        itemBox.appendChild(editTitle)
        editTitle.value = title.innerHTML
        editTitle.placeholder = "Title"

        itemBox.appendChild(editDescription)
        editDescription.value = description.innerHTML
        editDescription.placeholder = "Description"
        itemBox.appendChild(dLabel)
        itemBox.appendChild(editDueDate)
        editDueDate.value = dueDate.innerHTML
        editDueDate.placeholder = "DueDate"

        if(priority.innerHTML == "1"){
            pOne.selected = "selected"
        }else if(priority.innerHTML == "2"){
            pTwo.selected = "selected"
        }else if(priority.innerHTML == "3"){
            pThree.selected = "selected"
        }else if(priority.innerHTML == "4"){
            pFour.selected = "selected"
        }

        itemBox.appendChild(pLabel)
        itemBox.appendChild(editPriority)
        
        editPriority.placeholder = "Priority"

        itemBox.appendChild(finishEdit)

        itemBox.appendChild(collapseButton)

    }

   standard()
    
    return {itemBox,expand,openEdit,standard,num}

}

export{displayList}