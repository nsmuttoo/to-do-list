

export {createProject,projectPage, projectList}


import {displayList} from "./display.js"

let projectList = []



function createProject(name){
let toDoList = []

function setToDoList(newList){
    this.toDoList = newList
}

    return{name,toDoList,setToDoList}
}

function projectPage(){

const content = document.getElementById("content")

content.innerHTML = ""

addProject()
    for(let i=0;i<projectList.length; i++){
        displayProject(projectList[i])
    }


}

function addProject(){
    const content = document.getElementById("content")

    const addBox = document.createElement("div")
    const newButton = document.createElement("button")
    const nameInput = document.createElement("input")
    nameInput.placeholder = "Project Name"
    const submitButton = document.createElement("submit")
    submitButton.addEventListener("click", submitButtonOnClick)

    newButton.addEventListener("click", newButtonOnClick)
    newButton.innerHTML = "New Project"
    submitButton.innerHTML = "sub"
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
const title = document.createElement("button")
const content = document.getElementById("content")

title.innerHTML = project.name
title.addEventListener("click", enterProject)

projectBox.appendChild(title)

content.appendChild(projectBox)

function enterProject(){
    console.log(project.toDoList)
    console.log(project.name)
    displayList(project.toDoList)


}
}