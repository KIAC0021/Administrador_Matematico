
    function cuadrado(){
        let num1 = document.getElementById("num1").value;
        if (isNaN(num1)){
            alert("Ingrese un numero valido");
            return;
        }
        let resultado = num1 * num1;
        document.getElementById("resultado").value = resultado;
    }
