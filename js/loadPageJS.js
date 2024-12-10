// 動態加載頁面函數
function loadPage(url) {
    fetch(url) // 使用 fetch 請求指定的 HTML 頁面
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！狀態碼: ${response.status}`);
            }
            return response.text(); // 獲取 HTML 文本
        })
        .then(html => {
            // 將內容插入到指定區域
            document.getElementById('contentArea').innerHTML = html;
        })
        .catch(error => {
            // 處理錯誤
            console.error('載入頁面失敗:', error);
            document.getElementById('contentArea').innerHTML = `<p>無法載入頁面：${error.message} 請嘗試此頁面：https://owo877.github.io/%E6%9C%9F%E6%9C%AB%E5%A0%B1%E5%91%8A/home.html</p>`;
        });
}