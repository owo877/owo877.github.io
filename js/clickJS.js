document.body.addEventListener('click', function (e) {
    // 創建點擊效果元素
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.style.left = `${e.clientX - 10}px`; // 水平位置
    effect.style.top = `${e.clientY - 10}px`; // 垂直位置

    // 將元素加入頁面
    document.body.appendChild(effect);

    // 動畫結束後移除元素
    effect.addEventListener('animationend', () => effect.remove());
});