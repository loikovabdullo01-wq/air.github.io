function searchFlights() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const results = document.getElementById("results");

    if (!from || !to || !date) {
        results.innerHTML = "<p style='color:red; text-align:center;'>Заполните все поля</p>";
        return;
    }

    // Список билетов (ручной ввод)
    const flights = [
        { time: "08:30", price: 25000, link: "https://example.com" },
        { time: "13:15", price: 32000, link: "https://example.com" },
        { time: "19:45", price: 28000, link: "https://example.com" }
    ];

    // Текст извинения и заголовок
    let html = `
        <div style="background: #fff3cd; color: #856404; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #ffeeba; font-size: 14px;">
            ⚠️ <strong>Извините, сервер у нас не работает.</strong> <br>
            Вы можете выбрать рейсы из списка ниже и купить билет по прямой ссылке.
        </div>
        <h3 style="text-align:center;">Рейсы: ${from} — ${to}</h3>
    `;

    // Вывод списка билетов
    flights.forEach((f) => {
        const finalPrice = addCommission(f.price);
        const profit = finalPrice - f.price;

        html += `
        <div class="flight" style="background: #fff; border: 1px solid #eee; padding: 15px; margin-bottom: 10px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <span style="font-size: 1.2em; font-weight: bold;">${f.time}</span><br>
                    <span style="color: #555;">Цена: ${formatRUB(finalPrice)}</span>
                </div>
                <div>
                    ${adminMode ? `<small style="color: green; display:block;">Прибыль: ${formatRUB(profit)}</small>` : ""}
                    <a href="${f.link}" target="_blank" style="text-decoration: none;">
                        <button class="buy" style="margin:0; width: auto; padding: 10px 20px;">Купить по ссылке</button>
                    </a>
                </div>
            </div>
        </div>
        `;
    });

    results.innerHTML = html;
}
