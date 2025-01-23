function addItem(title, description) {
    if (title.value == "") {
        alert("Title can not be empty.");
        return;
    }
    let list = document.querySelector("#list");

    // create list item
    let item = document.createElement("li");
    item.className = "item";

    // create title and description
    let itemTitle = document.createElement("p");
    itemTitle.className = "itemTitle";
    let itemDescription = document.createElement("p");
    itemDescription.className = "itemDescription";

    itemTitle.innerText = "Title: " + title.value;
    itemDescription.innerText = description.value;

    // append to item
    item.appendChild(itemTitle);
    item.appendChild(itemDescription);

    // append item to list
    list.appendChild(item);

    // reset input
    title.value = "";
    description.value = "";
    alert('s')
}

document.querySelector("#submitButton").addEventListener("click", function() {
    addItem(document.querySelector("#itemName"), document.querySelector("#itemDes"))
})