
    function calcularNomina() {
        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value;
        const horasTrabajadas = parseFloat(document.getElementById('horas').value);
        const costoPorHora = parseFloat(document.getElementById('costo').value);

        if (!id || !nombre || isNaN(horasTrabajadas) || isNaN(costoPorHora)) {
            alert('Por favor, complete todos los campos correctamente.');
            return;
        }

        let horasNormales = Math.min(horasTrabajadas, 40);
        let horasExtras = Math.max(0, horasTrabajadas - 40);

        let pagoHorasNormales = horasNormales * costoPorHora;
        let pagoHorasExtras = horasExtras * costoPorHora * 2;

        let subtotal = pagoHorasNormales + pagoHorasExtras;
        let ispt = subtotal * 0.10;
        let totalPagar = subtotal - ispt;

        document.getElementById('normales').value = horasNormales.toFixed(2);
        document.getElementById('extras').value = horasExtras.toFixed(2);
        document.getElementById('subtotal').value = subtotal.toFixed(2);
        document.getElementById('ispt').value = ispt.toFixed(2);
        document.getElementById('total').value = totalPagar.toFixed(2);
    }

    function borrarCampos() {
        document.getElementById('id').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('horas').value = '';
        document.getElementById('costo').value = '';
        document.getElementById('normales').value = '';
        document.getElementById('extras').value = '';
        document.getElementById('subtotal').value = '';
        document.getElementById('ispt').value = '';
        document.getElementById('total').value = '';
    }

    // === Restricción y formateo ===
    // Solo números en el campo ID
    document.getElementById('id').addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, ''); // quita todo lo que no sea número
    });

    // Title Case en el campo nombre
    document.getElementById('nombre').addEventListener('input', function () {
        this.value = this.value
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
    });
