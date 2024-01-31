function dateChanged() {
    // Показываем селектор времени, когда выбрана дата
    document.getElementById('time-selector').style.display = 'block';
}

document.getElementById('time-picker').addEventListener('change', function() {
    const date = document.getElementById('date-picker').value;
    const time = document.getElementById('time-picker').value;

    fetch('/send_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, time }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
// При необходимости, здесь можно добавить дополнительные функции для обработки выбранного времени