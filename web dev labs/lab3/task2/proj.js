// Idnum = 0;
function addDiv() {
    const someInput1 = document.getElementById('inputField').value;
    if(someInput1 == ""){
        alert("You can't add null div");
    }
else{
    // Idnum++;
    const NewDiv = document.createElement('div');
    NewDiv.classList.add('test');

    const newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('type', 'checkbox');
    NewDiv.appendChild(newCheckBox);

    const newPar = document.createElement('p');
    const newInput1 = document.getElementById('inputField').value;
    const newContent = document.createTextNode(newInput1);
    newPar.appendChild(newContent);
    NewDiv.appendChild(newPar);

    const newImg = document.createElement('img');
    newImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQid1CTulGtyIQO0OWXbxfwACywGYP-boE8K6kdv3JhcEh8jT_eHQido9lE4D4GoKDb1dI&usqp=CAU'
    NewDiv.appendChild(newImg);
    newImg.setAttribute('id', 'Newlist');
    newImg.id = newInput1;
    // newImg.id = Idnum;

    NewDiv.setAttribute('id', 'Newlist');
    NewDiv.id = newInput1;
    // NewDiv.id = Idnum;
    

    // const Box_Div = document.getElementById('box_div');
    // Box_Div.appendChild(NewDiv);

    const countdiv = document.getElementById('box_div')
    if(countdiv.childElementCount != 0){
        let container = document.getElementById('' + newInput1);
        if (container) {
            alert("You can't add duplicate")
        } else {
            const Box_Div = document.getElementById('box_div');
            Box_Div.appendChild(NewDiv);
        }
    } else{
        const Box_Div = document.getElementById('box_div');
        Box_Div.appendChild(NewDiv);
    }   
    
    newImg.addEventListener('click', function() {
            const element1 = document.getElementById(NewDiv.id);
                element1.remove();
        });

    newCheckBox.addEventListener('change', function(){
        if(this.checked){
            newPar.classList.add('line');
        } else{
            newPar.classList.remove('line');
        }
    })
}
    
}