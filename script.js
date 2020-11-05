
var randomNum=[];
var userPick = [];
var rightNum=[];

//genarete number

function generateNumbers(){
  for(i=0 ; i < 5 ; i++){
    let n = Math.floor((Math.random() * 99) + 1);
    randomNum.includes(n) ? i-- : randomNum.push(n);
  }
  alert(randomNum)
}


generateNumbers();


setTimeout(function(){
  while(userPick.length < 5){
    let n = parseInt(prompt('inserisci un numero'));
    userPick.includes(n) || isNaN(n) ? alert('numero gia inserito o non valido') : userPick.push(n);
  }
  let point = 0;
  for(i=0; i < userPick.length ; i++){
      if(randomNum.includes(userPick[i])){
        rightNum.push(userPick[i])
        point++;
      }
    }
  console.log('hai indovinato questi numeri ' + rightNum);
  console.log('hai totalizzato ' + point + ' punti su 5' )
},300)
