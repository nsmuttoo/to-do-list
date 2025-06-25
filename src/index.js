import "./styles.css";

import {createItem} from "./data"
import{displayList} from "./display"
import { getList } from "./display";
import{createProject} from "./projects"
import {projectPage} from "./projects"
import { projectList } from "./projects";

let fullList = []

fullList.push(createItem("steve","12","123",4,5))
fullList.push(createItem("john","12","123",3,5))
fullList.push(createItem("george","12","123",2,5))
fullList.push(createItem("paul","12","123",1,5))

let project = createProject("Tester")
project.setToDoList(fullList)

projectList.push(project)


projectPage()







