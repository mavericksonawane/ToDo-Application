// This is the JavaScript code regarding the ToDo Application.
// It contains the functions of Adding and Removing the respective task.
// programmer: Mayur Sonawane
// github: mavericksonawane
// email : mavericksonawane@gmail.com
// ************************* BeAMaverick ********************************

alert('WELCOME to my ToDo Application :)');

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)

function addItem(params) {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if(item === '') {
        return false;
    }
    else {
        // Creating li
        li = document.createElement('li');

        // Creating Checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        // Creating Label
        var label = document.createElement('label');
        label.setAttribute('for', 'item'); //optional

        // Add these elements on WebPage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 3);

        input.value ='';

    }
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}
