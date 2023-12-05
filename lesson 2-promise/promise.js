const dom ={
    vegetable:document.getElementById("vegetable"),
    candy:document.getElementById("candy"),
    frozen:document.getElementById("frozen"),

}

dom.vegetable.onclick = () => {
  fetch('./vegetable.json')
  .then(response => response.json())
  .then(vegetables => {
   const div1=document.createElement('div');
   document.body.appendchild(div1);
   vegetables.forEach(b => {
   div1.innerHTML+=`name: ${b.name},price${b.price}`;
   });
   return 'vegetable of vegetable';

}) 
.then(str=> alert(`end load ${str}!`))

}
dom.candys.onclick = () => {
  fetch('./candy.json')
  .then(candy => response.json())
  .then(vegetable => {
   const div1=document.createElement('div');
   document.body.appendchild(div1);
   candys.forEach(candy => {
   div1.innerHTML+=`name: ${b.name},price${b.price}`;
   });
   return 'candy of candys';

}) 
.then(str=> alert(`end load ${str}!`))
}
 

dom.frozen.onclick = () => {
  fetch('./frozen.json')
  .then(response => response.json())
  .then(frozens => {
   const div1=document.createElement('div');
   document.body.appendchild(div1);
   frozens.forEach(b => {
   div1.innerHTML+=`name: ${b.name},price${b.price}`;
   });
   return 'frozen of frozen';

}) 
.then(str=> alert(`end load ${str}!`))
}
 
  

