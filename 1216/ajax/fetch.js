//htmlから表示する要素を取得
const result = document.querySelector('reseltFetch');

// 関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            //console.log(json);
            //バックティックでテンプレートリテラル
            result.innerHTML = '<p>${json.news}</p>';
        })
        .catch(function (error) {
            console.log(error);
        });
};

//関数の実行
const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    //読み込み直し
    loadNews();
});
