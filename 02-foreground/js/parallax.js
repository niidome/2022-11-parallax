/* 背景位置をずらす要素を取得 */
let background = document.getElementsByClassName('parallax-background')[0];

/* スクロールイベントが発生する時に処理を呼び出す */
window.addEventListener('scroll', function (e) {
    /* 現在のスクロール位置を取得、動きをズラすために少し小さな値に調整(0.8倍) */
    let scroll = window.pageYOffset * 0.8;

    /* CSS の background-position を更新、高さ方向を top から下に移動させる */
    background.style.backgroundPosition = 'top ' + scroll + 'px center';
});