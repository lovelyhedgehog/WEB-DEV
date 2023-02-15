let addToDoButton = document.getElementById('addButton');
let toDoList = document.querySelector('.toDoList');
let inputField = document.getElementById('inputField');
let del = document.getElementsByClassName('del'); 

addToDoButton.onclick = function() {
    if (inputField.value != '') {
        
        let li = document.createElement('li');
        li.innerText = inputField.value;
        toDoList.appendChild(li);
        
        inputField.value = '';
        
        let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.style.float = 'left';
        checkbox.style.marginTop = "3px";
        checkbox.style.marginRight = "10px";
        
        checkbox.onclick = function () {
            let pr = this.parentElement;
            if(pr.style.textDecoration == 'line-through') {
                pr.style.textDecoration = 'none';
            } else {
                pr.style.textDecoration = 'line-through';
            }
        }
        li.appendChild(checkbox);

        let img = document.createElement('IMG');
        img.src = "delete.png";
        img.style.placeContent = "end left";
        img.style.float = "right";
        img.style.width = '15px';
        img.style.height = '15px';

        img.className = "del";
        li.appendChild(img);
    } else {
        alert('Empty Input');
    }
    for (i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            var pr = this.parentElement;
            pr.style.display = "none";
        }
  }
}
