var form_input=document.querySelector(".form-input");
var form_button=document.querySelector(".form-button");
var list=document.querySelector(".list");
var view=document.querySelector(".view");
var container=document.querySelector('.container'); 
//event listeners

form_button.addEventListener('click',add);
list.addEventListener('click',deleteCheck)
view.addEventListener('click',show);
//Functions

function add(event){
    event.preventDefault();
    if(form_input.value=="")
    {
        alert("enter the field");
    }
    else{
        //div creation
const single=document.createElement('div');
single.classList.add('single');

//li creation
const new_text=document.createElement('li');
new_text.innerText=form_input.value;
new_text.classList.add('new_text');
single.appendChild(new_text);

//complete button
const complete_btn=document.createElement('button');
complete_btn.innerHTML='<i class="fa-solid fa-check"></i>';
complete_btn.classList.add('complete_btn');
single.appendChild(complete_btn);

//delete button
const delete_btn=document.createElement('button');
delete_btn.innerHTML='<i class="fa-sharp fa-solid fa-trash"></i>';
delete_btn.classList.add('delete_btn');
single.appendChild(delete_btn);


//append
list.appendChild(single);
    }
//clear input value
form_input.value="";
}
function deleteCheck(event)
{
    const item=event.target;
    //delete
    if(item.classList[0]==='delete_btn')
    {
        const todo = item.parentElement;
        todo.remove();
    }
    //complete
    if(item.classList[0]==='complete_btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }





/*
    function show(e)
{
    
    var container=document.querySelector('.container');
    //total
    const total =document.createElement('total');
    total.classList.add('total');
    const head=document.createElement('h3');
    head.innerHTML="All";
    const list=document.createElement('li');
    total.appendChild(head);
    total.appendChild(list);
    container.appendChild(total);


    //done
    const done=document.createElement('done');
    const head1=document.createElement('h3');
    head1.innerHTML="Finished";
    const list1=document.createElement('li');
    done.appendChild(head1);
    done.appendChild(list1);
    container.appendChild(done);


    //undone
    const undone=document.createElement('undone');
    const head2=document.createElement('h3');
    head2.innerHTML="Unfinished";
    const list2=document.createElement('li');
    undone.appendChild(head2);
    undone.appendChild(list2);
    container.appendChild(undone);


    //pointer events
    var view=document.querySelector(".view").style.pointerEvents='none';   
}*/
}


