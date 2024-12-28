function updateDate() {
    const now = new Date();
    // 格式化日期
    const options = { 
        weekday: 'long', // 星期
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const timeZone = "Asia/Taipei"; // 修改 "Asia/Taipei" 為你想要的時區
    const formattedDate = now.toLocaleDateString('en-US', options,timeZone); // 修改 'en-US' 為你想要的語言代碼

    // 更新 HTML
    const dateElement = document.getElementById('date');
    dateElement.textContent = formattedDate;
}

// 初始執行一次
updateDate();