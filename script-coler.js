// ページの読み込み時に背景色を適用する関数
function applySavedColor() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

// 背景色を変更する関数
function changeColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

// ページの読み込み時に保存された色を適用
window.onload = applySavedColor;
