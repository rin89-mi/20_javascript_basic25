// 1オブジェクトで色を用意
// 34色制作して、配列にする
const settingColors = [
    { r: 255, g: 0, b: 0 }, //赤
    { r: 0, g: 255, b: 0 }, //緑
    { r: 0, g: 0, b: 255 }, //青
    { r: 255, g: 255, b: 0 } //黄色
]

// 5documentの縦の長さ取得
const fullHeight = document.documentElement.scrollHeight;
console.log(fullHeight); //2400 (単位はpx)

// 8スクロール量を計算
// 画面に見えている高さ（ブラウザの表示部分）
const viewHeight = document.documentElement.clientHeight;

// スクロールできる合計の長さを計算
const scrollable = fullHeight - viewHeight;

// 2オブジェクトの色をbodyの背景色にする
const bodyElm = document.body; //ドットで繋いでいるので、オブジェクト
// document.querySelector('body')Z
console.log(bodyElm);
document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';

// 4スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('スクローーーーーーーーーーーーーーール');
    //現在のスクロール位置
    const scrollY = window.scrollY;
    console.log(scrollY);
    // 61 / 4進んだら色が変わるようにする
    // 7スクロールを4分割
    if (scrollable < (fullHeight * 1) / 4) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[0].r +
            ',' +
            settingColors[0].g +
            ',' +
            settingColors[0].b +
            ')';
    } else if (scrollable < (fullHeight * 1) / 2) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[1].r +
            ',' +
            settingColors[1].g +
            ',' +
            settingColors[1].b +
            ')';
    } else if (scrollable < (fullHeight * 1) / 2) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[2].r +
            ',' +
            settingColors[2].g +
            ',' +
            settingColors[2].b +
            ')';
    } else {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[3].r +
            ',' +
            settingColors[3].g +
            ',' +
            settingColors[3].b +
            ')';
    }
})




// 9変数scrollableを4分割
// 10関数の定義
// 11関数の呼び出し（実行）の実引数