
//INPUT FIELD AND FEEDBACKS
let  itemInput = document.querySelector('#itemInput');
const itemContainer = document.querySelector('.item-container'); 
const feedback =  document.querySelector('.feedback');



//BUTTONS
const addBtn =  document.querySelector('#add-btn');
const clearBtn =  document.querySelector('#clear-list');


addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let val = itemInput.value;
    if(val == ""){
        //show alert message
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
    }else{

        //creating the elements
        const itemList =  document.createElement('div');
        itemList.classList.add('item-list');
        itemContainer.appendChild(itemList);

        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `<h5 class="item-name text-capitalize">${val}</h5>`;
        itemList.appendChild(item);
        // console.log(item);
        // console.log(itemList);

        const itemIcons =  document.createElement('div');
        itemIcons.classList.add('item-icons');
        itemIcons.innerHTML = `<a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle complete-item"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle delete-item"></i></a>`;
        item.appendChild(itemIcons);

        itemInput.value = "";

        // console.log(itemIcons);

        //wire up the buttons!
        itemIcons.addEventListener('click', function(e){
            let index = e.target.classList;
            let target =  e.currentTarget;
            let firstChild = target.parentElement.firstChild;
            let parent = target.parentElement;

            if(index.contains('complete-item')){
                firstChild.classList.add('line-thru')
            }

            if(index.contains('delete-item')){
                itemList.removeChild(parent)
            }
        })
    }   
})

clearBtn.addEventListener('click', function(){
    itemContainer.innerHTML = "";
})
//wire up the clear itemContainer button
//wire up the edit, clear, done
//for the complete(done)  button, create a class and add text-decoration:line-thru on click
//on edit button click, find the innerText of the element clicked, change the form value to the innerText and delete the elements??
//lol, let's really try out number 4

//proposed solution for the edit buttons 
//find a way to remove the icon-item container


















