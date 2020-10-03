function seleccionar(){
    var opc = document.getElementById('opc').value;
    opc=parseInt(opc);
    var resultado='';
    switch (opc){
        case 1: resultado="DOMINDO<br>SUNDAY"; 
                document.getElementById("dia").style.color="#00FF";break;
        case 2: resultado= 'LUNES<br>MONDAY';
                document.getElementById("dia").style.color="red"; break;
        case 3: resultado= 'MARTES<br>TUESDAY'; 
                document.getElementById("dia").style.color="orange";break;
        case 4: resultado= 'MIERCOLES<br>WEDNESDAY'; 
                document.getElementById("dia").style.color="green";break;
        case 5: resultado= 'JUEVES<br>THURSDAY'; 
                document.getElementById("dia").style.color="yellow";break;
        case 6: resultado= 'VIERNES<br>FRIDAY';
                document.getElementById("dia").style.color="black"; break;
        case 7: resultado= 'SABADO<br>SATURDAY';
                document.getElementById("dia").style.color="#33FFEC "; break;
    }
    document.getElementById('dia').innerHTML=resultado;
}