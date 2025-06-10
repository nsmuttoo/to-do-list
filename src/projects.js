

export {createProject,projectPage, projectList}


import {displayList} from "./display.js"

let projectList = []



function createProject(name){
let toDoList = []

function setToDoList(newList){
    toDoList = newList
}

    return{name,toDoList,setToDoList}
}

function projectPage(){

    for(let i=0;i<projectList.length; i++){
        displayProject(projectList[i])
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
    displayList(project.toDoList)

}
}