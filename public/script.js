document.addEventListener('DOMContentLoaded', function () {
    const prevWeekBtn = document.getElementById('prev-week');
    const nextWeekBtn = document.getElementById('next-week');
    const currentWeek = document.getElementById('current-week');
    const agencySelect = document.getElementById('agency');

    let weekDates = ['Ago 19', 'Ago 20', 'Ago 21', 'Ago 21', 'Ago 22', 'Ago 23', 'Ago 24'];

    function updateWeekDisplay() {
        currentWeek.textContent = `${weekDates[0]} – ${weekDates[weekDates.length - 1]}, 2024`;
        // Aquí puedes añadir lógica para actualizar la disponibilidad según la semana.
    }

    // Funcionalidad para navegar a la semana anterior
    prevWeekBtn.addEventListener('click', function () {
        // Aquí debes agregar la lógica para actualizar weekDates a la semana anterior
        console.log('Semana anterior');
        updateWeekDisplay();
    });

    // Funcionalidad para navegar a la semana siguiente
    nextWeekBtn.addEventListener('click', function () {
        // Aquí debes agregar la lógica para actualizar weekDates a la semana siguiente
        console.log('Semana siguiente');
        updateWeekDisplay();
    });

    // Manejo del cambio de agencia
    agencySelect.addEventListener('change', function () {
        const selectedAgency = agencySelect.value;
        console.log(`Agencia seleccionada: ${selectedAgency}`);
        // Aquí puedes actualizar la disponibilidad de horarios según la agencia seleccionada.
    });

    // Inicializar la vista de la semana
    updateWeekDisplay();
});
