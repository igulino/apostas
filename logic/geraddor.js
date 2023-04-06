var sarcov = new Array([]);
const doc = Array([]);
const coletor = Array([]);
var user = Array([]);
var dal = 0;

btn.addEventListener('click', gera)
//gerando números randómicos
function gera() {

    let c = 0;

    while (c < 3) {
        c++;
        sarcov.push(Math.floor(Math.random() * 100));
    }
    var aspirina = sarcov.reduce(function(acumulador, valorAtual, indice, array) {
        return Number( acumulador + valorAtual );
      });
    console.log('núm gerados', sarcov);

    grap(aspirina);
}

//guardando a array e fazendo comparações
function grap(aspirina) {
   var index = 0;

   while (index < doc.length) {
      index++;
      var element = doc[index];
      console.log(index);
      if (element == aspirina){
      console.log('é igual');  
      sarcov = new Array([]);
      let c = 0
      while (c < 3) {
        c++;
        sarcov.push(Math.floor(Math.random() * 100));}
        aspirina = sarcov.reduce(function(acumulador, valorAtual, indice, array) {
          return Number( acumulador + valorAtual );
        });
      }
      else{console.log(element, '!=', aspirina);};
    };

   doc.push(aspirina)
   console.log('array acumuladora', doc);

   //limpando a sarcov
   for (let i = sarcov.length; i > 0; i--) {
        sarcov.pop();
      };
      
    interfc(doc)
};

function interfc(doc) {
  dal++
  p1.innerHTML = doc[1];

  document.getElementById('p2').hidden;
  document.getElementById('p3').hidden;
  document.getElementById('p4').hidden;
  document.getElementById('p5').hidden;


  if (dal == 2) {
    p2.innerHTML = doc[2];
    document.getElementById('p2').visible
  }else
  if (dal == 3) {
    p3.innerHTML = doc[3]
    document.getElementById('p3').visible
  }else
  if (dal == 4) {
    p4.innerHTML = doc[4]
    document.getElementById('p4').visible
  }else
  if (dal == 5) {
    p5.innerHTML = doc[5]
    document.getElementById('p5').visible
  }
};

//clicks
var comum = 0;
var power = false;
var pare = 0;
p1.onclick = () =>{
  power = true;
  pare++;
  comum = doc[1]

  coletor.push(doc[1]);
  verify(pare, power);
  console.log(coletor);
};
p2.onclick = () =>{
  power = true;
  pare++;
  comum = doc[2];
 
  coletor.push(doc[2]);
  verify(pare, power);
  console.log(coletor);
};
p3.onclick = () =>{
  power = true;
  pare++;
  comum = doc[3];
  
  coletor.push(doc[3]);
  verify(pare, power);
  console.log(coletor);
};
p4.onclick = () =>{
  power = true;
  pare++;
  comum = doc[4];

  coletor.push(doc[4]);
  verify(pare, power);
  console.log(coletor);
};
p5.onclick = () =>{
   power = true;
   pare++;
   comum = doc[5];
  
   coletor.push(doc[5]);
   verify(pare, power);
   console.log(coletor);
};

//limitar número de array
function verify(pare, power) {
    
  for (let i = coletor.length; i > 4; i--) {
    coletor.pop()
  }
  if (power == true) {
    escolhas.innerHTML = coletor
  }
};

del.onclick = () => {

  for (let index = 0; index <= coletor.length; index++) {
    var element = coletor[index];
    if (element == comum) {
        coletor.splice(index, 1);
        escolhas.innerHTML = coletor
    }
    else{console.log('nothing');}
  }
  console.log(coletor);
};

sorteio.onclick = () => {
  var ascul;
  var bueiro = Array([]);
  for (let arg = 0; arg <= 2;){
	  ascul = Math.floor(Math.random() * 10);
    if (ascul <= 5 && ascul > 0){
      arg++;
      console.log(ascul);
      bueiro.push(doc[ascul]);
    }
  }
console.log('sort', bueiro);
sorteados.innerHTML = bueiro
}