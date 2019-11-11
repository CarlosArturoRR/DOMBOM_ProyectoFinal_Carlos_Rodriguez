var estudiantes = [
    {
    "codigo": "001",
    "nombre": "Manuel Perez",
    "nota": 5
  }, {
    "codigo": "002",
    "nombre": "Rosa Moreno",
    "nota": 8
  }, {
    "codigo": "003",
    "nombre": "Carlos Rojas",
    "nota": 9
  },
  {
  "codigo": "004",
  "nombre": "Estudiante Perez",
  "nota": 7
}, {
  "codigo": "005",
  "nombre": "Estudiante5",
  "nota": 8
}, {
  "codigo": "006",
  "nombre": "Estudiante6",
  "nota": 4
},{
  "codigo": "007",
  "nombre": "Estudiante7",
  "nota": 9
},
{
"codigo": "008",
"nombre": "Estudiante8",
"nota": 7
}, {
"codigo": "009",
"nombre": "Estudiante9",
"nota": 8
}, {
"codigo": "010",
"nombre": "Estudiante10",
"nota": 10
}];


document.getElementById("promedio").addEventListener("click", mostrarPromedio);
document.getElementById("mayor").addEventListener("click", mostrarNotaMayor);
document.getElementById("menor").addEventListener("click", mostrarNotaMenor);
document.getElementById("registrar").addEventListener("click", registrarAlumno);
mostrarEstudiantes();

      function mostrarPromedio() {
          var out = 0;
          var i;
          for(i = 0; i < estudiantes.length; i++) {
             out=out+estudiantes[i].nota;
          }
          out=out/10;
          alert(out);

      }


  function mostrarEstudiantes() {
      var i;

      var tabla = document.getElementById("contenido");

      var elementoTr=document.createElement("tr");
      var elementoTh=document.createElement("th");
      var elementoContenido=document.createTextNode("Codigo");
      elementoTh.appendChild(elementoContenido);
      elementoTr.appendChild(elementoTh);

      var elementoTh=document.createElement("th");
      var elementoContenido=document.createTextNode("Nombre");
      elementoTh.appendChild(elementoContenido);
      elementoTr.appendChild(elementoTh);

      var elementoTh=document.createElement("th");
      var elementoContenido=document.createTextNode("Nota");
      elementoTh.appendChild(elementoContenido);
      elementoTr.appendChild(elementoTh);

      tabla.appendChild(elementoTr);

      for(i = 0; i < estudiantes.length; i++) {

        var elementoTr=document.createElement("tr");
        var elementoTd=document.createElement("td");
        var elementoContenido=document.createTextNode(estudiantes[i].codigo);
        elementoTd.appendChild(elementoContenido);
        elementoTr.appendChild(elementoTd);

        var elementoTd=document.createElement("td");
        var elementoContenido=document.createTextNode(estudiantes[i].nombre);
        elementoTd.appendChild(elementoContenido);
        elementoTr.appendChild(elementoTd);

        var elementoTd=document.createElement("td");
        var elementoContenido=document.createTextNode(estudiantes[i].nota);
        elementoTd.appendChild(elementoContenido);
        elementoTr.appendChild(elementoTd);

        tabla.appendChild(elementoTr);
    /*    out = out + "<tr>";
        out = out + "<td>" + estudiantes[i].codigo + "<td>";
        out = out + "<td>" + estudiantes[i].nombre + "<td>";
        out = out + "<td>" + estudiantes[i].nota + "<td>";
        out = out + "<tr>";*/
      }



  }



  function mostrarNotaMayor() {
      var out = "";
      var indice = 0;
      var nota = estudiantes[0].nota;
      var i;
      for(i = 0; i < estudiantes.length; i++) {
         if(nota<estudiantes[i].nota){
           nota=estudiantes[i].nota;
           indice=i;
         }
      }
      out="Codigo:"+estudiantes[i-1].codigo+" - "+" Nombre:"+estudiantes[i-1].nombre+" - Nota:"+estudiantes[i-1].nota;
      alert(out);

  }

  function mostrarNotaMenor() {
      var out = "";
      var indice = 0;
      var nota = estudiantes[0].nota;
      var i;
      for(i = 0; i < estudiantes.length; i++) {
         if(nota>estudiantes[i].nota){
           nota=estudiantes[i].nota;
           indice=i;
         }
      }
      out="Codigo:"+estudiantes[indice].codigo+" - "+" Nombre:"+estudiantes[indice].nombre+" - Nota:"+estudiantes[indice].nota;
      alert(out);

  }

  function registrarAlumno(){
    var miEstudiante = new Object();
    miEstudiante.codigo = document.getElementById('codigo').value;
    miEstudiante.nombre = document.getElementById('nombre').value;
    miEstudiante.nota = document.getElementById('nota').value;
    estudiantes.push(miEstudiante);
    var tabla = document.getElementById("contenido");

    var elementoTr=document.createElement("tr");
    var elementoTd=document.createElement("td");
    var elementoContenido=document.createTextNode(miEstudiante.codigo);
    elementoTd.appendChild(elementoContenido);
    elementoTr.appendChild(elementoTd);

    var elementoTd=document.createElement("td");
    var elementoContenido=document.createTextNode(miEstudiante.nombre);
    elementoTd.appendChild(elementoContenido);
    elementoTr.appendChild(elementoTd);

    var elementoTd=document.createElement("td");
    var elementoContenido=document.createTextNode(miEstudiante.nota);
    elementoTd.appendChild(elementoContenido);
    elementoTr.appendChild(elementoTd);

    tabla.appendChild(elementoTr);

    alert ("El estudiante fue ingresado");
  }
