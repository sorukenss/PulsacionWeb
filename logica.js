function calcularPulsacion(sexo,edad){
 if(sexo=='M'){
  return (210-edad)/10;
 }
 return (220-edad)/10;

}

function guardar(){
 let edad=document.getElementById('edad').value;
 let nombre=document.getElementById('nombre').value;
 let identificacion=document.getElementById('identificacion').value;
 let sexo=document.getElementById('sexo').value;
 let pulsacion=calcularPulsacion(sexo,Number(edad));
 
 let persona={
     id:identificacion,
     nombre:nombre,
     edad:edad,
     sexo:sexo,
     pulsacion:pulsacion,
 }

let personas=consultar();
personas.push(persona);

localStorage.setItem('personas', JSON.stringify(personas));
alert('se guardo');


}

function consultar(){
  let personas=localStorage.getItem('personas');
  if(personas==null){
      return[]
  }
  
  return  JSON.parse(personas);

}

function pintarTabla(){ 
    let personas=consultar();
    console.log(personas);
    personas.forEach(item=>{
        document.getElementById('tablebody').innerHTML+=
        '<tr>' +
        '<td align="center" style="dislay: none;">' + item.id + '</td>' +
        '<td align="center" style="dislay: none;">' + item.nombre+ '</td>' +
        '<td align="center" style="dislay: none;">' + item.edad+ '</td>' +
        '<td align="center" style="dislay: none;">' + item.sexo+ '</td>' + 
        '<td align="center" style="dislay: none;">' + item.pulsacion+ '</td>' + '</tr>';

    })


}

