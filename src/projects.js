

export {createProject,projectPage, projectList}


import {displayList} from "./display.js"
import { getList } from "./display.js"
import { createItem } from "./data.js"
import save from "./images/content-save-outline.svg"
import plus from "./images/plus.svg"

let projectList = []
let store = localStorage.getItem('projectList');
projectList = JSON.parse(store)
rebuildList()


function rebuildList(){
    
    for(let i=0; i<projectList.length;i++){
        store =[]
        for(let j=0; j<projectList[i].toDoList.length;j++){
            store[j] = reBuildObject(projectList[i].toDoList[j])
            
        }
        projectList[i] = createProject(projectList[i].name)
        projectList[i].setToDoList(store)
    }
}

function reBuildObject(item){

return createItem(item.title,item.description,item.dueDate,item.priority,item.check,item.deleted)
}



function createProject(name){
let toDoList = []

function setToDoList(newList){
    this.toDoList = newList
}

    return{name,toDoList,setToDoList}
}

function projectPage(){
    const nav = document.getElementById("title")
    nav.innerHTML = "Projects"
const content = document.getElementById("content")

content.innerHTML = ""
saveButton()
addProject()

    for(let i=0;i<projectList.length; i++){
        displayProject(projectList[i])
    }


}

function saveButton(){
    const content = document.getElementById("content")

    const saveBox = document.createElement("div")
    const localButton = document.createElement("button")
    const localImg = document.createElement("img")
    const localLabel = document.createElement("label")


    localImg.id = "icon"
    localImg.src = save
   // localButton.innerText = "Locally Save:"
    localButton.appendChild(localImg)
    saveBox.appendChild(localLabel)
    saveBox.appendChild(localButton)

    localButton.name = "local"
    localLabel.innerHTML = "Locally Save:"
    localLabel.htmlFor = "local"
  
    saveBox.classList.add("saveBoxProject")

    localButton.addEventListener("click",localButtonOnClick)

    function localButtonOnClick(){
        localStorage.setItem('projectList', JSON.stringify(projectList))
    }

    content.appendChild(saveBox)
}

function addProject(){
    const content = document.getElementById("content")

    const addBox = document.createElement("div")
    addBox.classList.add("addBoxProject")
    const newButton = document.createElement("button")
    const nameInput = document.createElement("input")
    nameInput.placeholder = "Project Name"
    const submitButton = document.createElement("submit")
    submitButton.addEventListener("click", submitButtonOnClick)

    newButton.addEventListener("click", newButtonOnClick)
    

    const plusImg = document.createElement("img")
       plusImg.src = plus
       plusImg.id = "icon"

       newButton.appendChild(plusImg)
    
    const saveImg = document.createElement("img")
        saveImg.src = save
        saveImg.id = "icon"
        submitButton.appendChild(saveImg)

    addBox.appendChild(newButton)
    content.appendChild(addBox)
    
    function newButtonOnClick(){
        addBox.innerHTML = ""
        addBox.appendChild(nameInput)
        addBox.appendChild(submitButton)
    }
    function submitButtonOnClick(){
        projectList.push(createProject(nameInput.value))
        projectPage()
    }
    
}

function displayProject(project){
const projectBox = document.createElement("div")
projectBox.classList.add("projectBox")
const title = document.createElement("button")
const content = document.getElementById("content")

title.innerHTML = project.name
title.addEventListener("click", enterProject)

projectBox.appendChild(title)

content.appendChild(projectBox)

function enterProject(){
    console.log(project.toDoList)
    console.log(project.name)
    const nav = document.getElementById("title")
    nav.innerHTML = project.name

    displayList(project.toDoList)
    project.toDoList = getList()


}
}