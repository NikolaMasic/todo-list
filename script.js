var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

function inputLenght(){
   return input.value.length;
}

function createListElement(){
   
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener('click', done);
    ul.appendChild(li);
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('delete'));
    btn.addEventListener('click', del)
    li.appendChild(btn)
    input.value = "";
}

function del(event){
    var li = event.target.parentElement;
    li.remove(); 
}

function done(event){
    event.target.classList.toggle('done')
}

function addListAfterClick(){
    if(inputLenght() > 0){
        createListElement()
 }
}

function addListAfterPress(event){
    if(inputLenght() > 0 && event.key === 'Enter'){
        createListElement()
 }
}

button.addEventListener('click', addListAfterClick)


input.addEventListener('keypress', addListAfterPress)






