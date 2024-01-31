document.getElementById('date-picker').addEventListener('change', dateChanged);
document.getElementById('time-picker').addEventListener('change', timeChanged);

function dateChanged() {
    // Показываем селектор времени, когда выбрана дата
    document.getElementById('time-selector').style.display = 'block';
}

function timeChanged() {
    const date = document.getElementById('date-picker').value;
    const time = document.getElementById('time-picker').value;

    // Отправка данных на сервер
    fetch('/send_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, time }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        closeWebApp(); // Закрытие веб-приложения после успешной отправки
    })
    .catch(error => console.error('Error:', error));
}

function closeWebApp() {
    // Проверка, доступен ли объект Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.close();
    }
}
