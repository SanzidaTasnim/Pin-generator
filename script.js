document.getElementById('generate-btn').addEventListener('click',function(){
   const generateInput = document.getElementById('generate-input');
   const mathRandom = Math.floor(((Math.random() * 9000) + 1000));
   generateInput.value = mathRandom;
})

function showInput(x){
   const inputValue = document.getElementById('input-value');
   inputValue.value += x;
}

function backspace(){
   const inputValue = document.getElementById('input-value').value;
   document.getElementById('input-value').value = inputValue.slice(0, inputValue.length - 1);
}

document.getElementById('clear').addEventListener('click',function(){
   document.getElementById('input-value').value = '';
});

document.getElementById('submit-btn').addEventListener('click',function(){
   const inputValue = document.getElementById('input-value');
   const generateInput = document.getElementById('generate-input');
   document.getElementById('matched').style.display = 'none';
   document.getElementById('didnt-match').style.display = 'none';
   if(generateInput.value == inputValue.value){
      document.getElementById('matched').style.display = 'block';
   }else{
      document.getElementById('didnt-match').style.display = 'block';
      document.getElementById('tryNum').innerHtml = i ;
   }
}) 


