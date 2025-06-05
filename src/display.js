const eee = 6

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
    editButton.innerHTML = "edit"
    editButton.addEventListener("click",openEdit)

    const collapseButton = document.createElement("button")
    collapseButton.innerHTML = "collapse"
    collapseButton.addEventListener("click",standard)

    function expand(){
        itemBox.innerHTML = ""
        itemBox.appendChild(title)
        itemBox.appendChild(collapseButton)
    }

    function standard(){
        itemBox.innerHTML = ""
        itemBox.appendChild(title)
    itemBox.appendChild(description)
    itemBox.appendChild(dueDate)
    itemBox.appendChild(priority)
    itemBox.appendChild(checkButton)
    itemBox.appendChild(editButton)
    itemBox.appendChild(expandButton)

    }

    function openEdit(){

    }

   standard()
    
    return {itemBox,expand,openEdit,standard,num}

}

export{displayList}