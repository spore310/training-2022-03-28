let newTask = document.querySelector('.--input-text');
let add = document.querySelector('.--input-button');

async function postlist(data,id){
    let list = getlist();
    let api= await fetch('http://localhost:3000/todos',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
}
async function markToogleTrue(e){
    let api = await fetch(`http://localhost:3000/todos/${e}`,{
        method:'PUT',
        headers:{
            'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({isCompleted: true})
    })
}
async function editEntry(e,value){
    let api = await fetch(`http://localhost:3000/todos/${e}`,{
        method:'PUT',
        headers:{
            'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({content: value})
    })
}
async function markToogleFalse(e){
    let api = await fetch(`http://localhost:3000/todos/${e}`,{
        method:'PUT',
        headers:{
            'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({isCompleted: false})
    })
}
async function mark(e){
    let api = await fetch(`http://localhost:3000/todos/${e}`,{
        method:'DELETE',
        headers:{
            'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
}
async function getlist(){
    return await fetch('http://localhost:3000/todos').then(res=>res.json());
}
//UL for the pending tasks
function pending(){
    return document.querySelector('.--list-pending');
}
//UL for the complete tasks
function complete(){
    return document.querySelector('.--list-completed');
}
//helper function for adding items to pending from form
function AddTask(value, id){
    let list = pending();

    let Node = document.createElement("li");

    let Input = document.createElement('input');
    let Edit_button= document.createElement('button');
    let Delete_button= document.createElement('button');
    let Toogle_button = document.createElement('button'); 

    Edit_button.className = '--edit';
    Delete_button.className = '--delete';
    Toogle_button.className = '--toogle';
    Input.className = '--pending-item';

    Input.setAttribute('type','text');
    Input.setAttribute('id', `${id}`)
    Input.value = value;
    Edit_button.innerText = 'Edit';
    Delete_button.innerText = 'Delete';
    Toogle_button.innerText = 'Toogle';

    Toogle_button.addEventListener('click', Toogle)
    Delete_button.addEventListener('click', Delete);
    Edit_button.addEventListener('click', Edit);

    list.appendChild(Node);
    Node.appendChild(Input);
    Node.appendChild(Edit_button);
    Node.appendChild(Delete_button);
    Node.appendChild(Toogle_button);
}
function AddComplete(value,id){
    let list = complete();

    let Node = document.createElement("li");

    let Input = document.createElement('input');
    let Edit_button= document.createElement('button');
    let Delete_button= document.createElement('button');
    let Toogle_button = document.createElement('button'); 

    Edit_button.className = '--edit';
    Delete_button.className = '--delete';
    Toogle_button.className = '--toogle';
    Input.className = '--pending-item';

    Input.setAttribute('type','text');
    Input.setAttribute('id', `${id}`)
    Input.value = value;
    Edit_button.innerText = 'Edit';
    Delete_button.innerText = 'Delete';
    Toogle_button.innerText = 'Toogle';

    Toogle_button.addEventListener('click', Toogle)
    Delete_button.addEventListener('click', Delete);
    Edit_button.addEventListener('click', Edit);

    list.appendChild(Node);
    Node.appendChild(Input);
    Node.appendChild(Edit_button);
    Node.appendChild(Delete_button);
    Node.appendChild(Toogle_button);
}

function Toogle(event){
    let button = event.target;
    let parent = button.parentNode.parentNode;
    let li = button.parentNode;
    let input = parent.parentNode;
    let list1 = pending();
    let list2 = complete();
    
    if(parent.className ===list1.className){
        list2.appendChild(li)
        markToogleTrue(li.firstChild.id);
    }else if(parent.className === list2.className){
        list1.appendChild(li);
        markToogleFalse(li.firstChild.id);
    }
}
function Delete(event){
    let button = event.target;
    let li = button.parentNode;
    let list = li.parentNode;
    mark(li.firstChild.id)
    list.removeChild(li);

};

function Edit(event){
    let button = event.target;
    let li = button.parentNode;
    let input = li.firstChild;
    editEntry(input.id, input.value)
    console.log(input.id)
}

(async(model,list_complete,list_pending,)=>{
    let Data = await model();
    let finished = Data.filter(ele=>ele.isCompleted===false);
    let pending =Data.filter(ele=>ele.isCompleted===true);
    if(Data){
        for(let i=0;i<finished.length;i++){
            AddTask(finished[i].content, finished[i].id);
        }
        for(let i=0;i<pending.length;i++){
            AddComplete(pending[i].content,pending[i].id)
        }
    }
    
})(getlist,pending(), complete());


add.addEventListener('click', async function(r){
    let self = r.target;
    let text = document.querySelector('.--input-text');
    let obj = {content: text.value, isCompleted:false,id:getlist().length}
    
    let result = await postlist(obj, getlist().length);
    console.log(result);
    AddTask(text.value);

})
