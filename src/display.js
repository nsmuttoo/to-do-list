const eee = 6

function displayList(list){
const content = document.getElementById("content")

    for(let i=0; i<list.length; i++){
       content.appendChild(displayItem(list[i],i)) 
    }
}

function displayItem(item, num){
    const itemBox = document.createElement("div")
    itemBox.id = num
    const title = document.createElement("div")
    title.innerHTML = item.title

    console.log(itemBox.id)
    itemBox.appendChild(title)
    return itemBox

}

export{displayList}