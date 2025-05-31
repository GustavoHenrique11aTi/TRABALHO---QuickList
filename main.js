const item  = []

function addItem() {
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: false 
    }
    item.push(item)

    console.log(items)
}