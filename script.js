function generateCalendar() {
    const today = new Date();
    document.getElementById("current-day").textContent = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarTable = document.getElementById("calendar");
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    let tableContent = "<tr>";
    daysOfWeek.forEach((day, index) => {
        tableContent += `<th class="${index === 0 ? 'sunday' : ''}">${day}</th>`;
    });
    tableContent += "</tr><tr>";
    
    for (let i = 0; i < firstDay; i++) {
        tableContent += "<td></td>";
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayIndex = (firstDay + day - 1) % 7;
        const isToday = day === today.getDate();
        tableContent += `<td class="${dayIndex === 0 ? 'sunday' : ''} ${isToday ? 'highlight' : ''}">${day}</td>`;
        if (dayIndex === 6) {
            tableContent += "</tr><tr>";
        }
    }
    
    tableContent += "</tr>";
    calendarTable.innerHTML = tableContent;
}

generateCalendar();

