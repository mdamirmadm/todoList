const inp = document.getElementById('inp');
const btn = document.getElementById('addBtn');
const list = document.getElementById('items-list'); 

btn.onclick = function(e){
    if(inp.value !==""){
        const todoText = inp.value;
    const li = document.createElement('li');
    li.classList.add('todo');
    li.innerText = todoText;

    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    const checkedBtn = document.createElement('BUTTON');
    const textChkBtn = document.createTextNode('Checked');
    const deleteBtn = document.createElement('button');
    const textDelBtn = document.createTextNode('Delete');
    const editBtn = document.createElement('BUTTON');
    const textEditBtn = document.createTextNode('Edit');
    checkedBtn.classList.add('checked');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');
    
    listContainer.append(li);
    checkedBtn.appendChild(textChkBtn);
    editBtn.appendChild(textEditBtn);
    deleteBtn.appendChild(textDelBtn);
    listContainer.append(checkedBtn);
    listContainer.append(editBtn);
    listContainer.append(deleteBtn);

    list.append(listContainer);

    checkedBtn.onclick = function(e){
        e.target.previousElementSibling.classList.toggle('checkedUnchecked');
    };

    editBtn.onclick = function(e){
        const todoedit = prompt("Enter the todo item");
        if(todoedit!==""){
            e.target.previousElementSibling.previousElementSibling.innerText = todoedit;
        } 
    }

    deleteBtn.onclick = function(e){
        e.target.parentElement.remove();
    };

    inp.value="";
    } 
};