var button = document.getElementById('btn');
var img = document.getElementById('btn-img');

var colorChanger = button.addEventListener('click', function() {
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white';
    
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    img.src = './Images/moon (1).png';
  
  } else {
    document.body.style.backgroundColor = 'black';
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    img.src = './Images/sun.png';
   
  }
});


 






 





