const input = document.querySelector('.input_note'),
    buttonAdd = document.querySelector('.add'),
    todoCont = document.querySelector('.todo_cont'),
    divNote = document.createElement('div'),
    arrayNote = [];

    divNote.classList.add('note_cont');
    todoCont.appendChild(divNote);



buttonAdd.addEventListener('click', function(){
    let inputValue = input.value;

    if(inputValue.trim() != '') {
        arrayNote.push(inputValue.trim());
    }

    divNote.innerHTML = '';
    
    for(let i = 0; i < arrayNote.length; i++){
        let noteCont = document.createElement('div'),
            inputNote = document.createElement('textarea'),
            check = document.createElement('input'),
            buttonDel = document.createElement('button'),
            buttonChange = document.createElement('button');

            divNote.appendChild(noteCont);
        
            inputNote.style.resize = 'none';
            inputNote.setAttribute('type', 'text');
            inputNote.setAttribute('disabled', '');
            inputNote.classList.add(`note`, 'input_note');
            inputNote.id = i;
            noteCont.appendChild(inputNote);
            
            inputNote.value = arrayNote[i];

            if(inputNote.scrollHeight > 54){
                inputNote.style.height = inputNote.scrollHeight + 'px'; 
            }
            
            check.classList.add('check');
            check.setAttribute('type', 'checkbox');
            noteCont.appendChild(check);
    
            buttonDel.classList.add('btn-del');
            noteCont.appendChild(buttonDel);
            buttonDel.innerHTML = 'Del';

            buttonChange.classList.add('btn-ch');
            noteCont.appendChild(buttonChange);
            buttonChange.innerHTML = 'Change';
            
    }
    console.log(arrayNote);

    input.value = '';

    checker();
    deleteBtn();
    changeBtn();

});

function checker(){
    let check = document.querySelectorAll('.check');

    check.forEach(function(item, i){
        item.addEventListener('change', function(){
            let divCheck = document.getElementById(i);
                divCheck.classList.toggle('through');

        })
    })
}

function deleteBtn(){
    let buttonDel = document.querySelectorAll('.btn-del');

    buttonDel.forEach(function(item, i){
        item.addEventListener('click', function(){
            let divDel = item.parentElement;
                divDel.remove();
                arrayNote.splice(i, 1);
        })
    })
}


function changeBtn(){
    let btnCh = document.querySelectorAll('.btn-ch');

    btnCh.forEach(function(item, i){
        item.addEventListener('click', function(){
            let divCh = document.getElementById(i);
            if(divCh.hasAttribute('disabled')){
                divCh.removeAttribute('disabled');
                divCh.focus();
                item.innerHTML = 'Ok';
                
                console.log(arrayNote)
            }else{
                divCh.setAttribute('disabled', '');
                item.innerHTML = 'Change';
                arrayNote.splice(i, 1, divCh.value);

                console.log(arrayNote)
            }
        })
    })
}
