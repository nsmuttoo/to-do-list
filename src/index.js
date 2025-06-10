import "./styles.css";

import {createItem} from "./data"
import{displayList} from "./display"
import { getList } from "./display";
import{createProject} from "./projects"
import {projectPage} from "./projects"
import { projectList } from "./projects";

let fullList = []

fullList[0] =createItem("steve","12","123",4,5)
fullList[1] =createItem("john","12","123",4,5)

let project = createProject("Tester")
project.setToDoList(fullList)

projectList.push(project)


projectPage()







