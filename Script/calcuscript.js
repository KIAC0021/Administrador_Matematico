// Funciones para la calculadora
    function obtenerNumeros() {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        if (isNaN(num1) || isNaN(num2)) {
            alert("Ingrese números válidos");
            return null;
        }
        return { num1, num2 };
    }

    function Sumar() {
        let nums = obtenerNumeros();
        if (!nums) return;
        document.getElementById("resultado").value = nums.num1 + nums.num2;
    }

    function Restar() {
        let nums = obtenerNumeros();
        if (!nums) return;
        document.getElementById("resultado").value = nums.num1 - nums.num2;
    }

    function Multiplicar() {
        let nums = obtenerNumeros();
        if (!nums) return;
        document.getElementById("resultado").value = nums.num1 * nums.num2;
    }

    function Dividir() {
        let nums = obtenerNumeros();
        if (!nums) return;
        if (nums.num2 === 0) {
            alert("No se puede dividir entre cero");
            return;
        }
        document.getElementById("resultado").value = nums.num1 / nums.num2;
    }
