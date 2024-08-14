var expImg = document.getElementsByClassName('expand');
var paragraphs = document.querySelectorAll('p');

paragraphs.forEach(element => {
    element.style.display = "none";
});

function HideAnswer(element){
    for(var i = 0; i <= expImg.length; i++){
      
        if(expImg[i] == element){
            paragraphs[i].style.display = "none";
            expImg[i].src = "./assets/images/icon-plus.svg";
            element.onclick = function(){
                ShowAnswer(element);
            };
        }   
    }
}

function ShowAnswer(element){

    for(var i = 0; i <= expImg.length; i++){
      
        if(expImg[i] == element){
            paragraphs[i].style.display = "block";
            expImg[i].src = "./assets/images/icon-minus.svg";
            element.onclick = function(){
                HideAnswer(element);
            };
        }   
    }
    
}

