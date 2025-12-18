//関数式化()
const loadWeather = function () {

}




// ボタンを押す
const button = document.querySelector('.loadBtn');
button.addEventListener('click', function () {
    console.log('ボタンを押したよ');

    //関数を実行させる
    loadWeather();
    const result = document.querySelector('.box');
    //読み込み中を表示
})
// fetchで APIにアクセス
fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
    .then(function (response) {
        //取得したJSONをオブジェクトに変換するメソッド.json()
        return response.json();
    })
    .then(function (json) {
        // document.body.textContent = JSON.stringify(json);
        console.log(json[0].timeSeries[0].areas[0].weathers[0]); //天気
        console.log(json[0].timeSeries[2].areas[0].weathers[0]); // 最高気温：12℃
        console.log(json[0].timeSeries[2].areas[0].weathers[1]); // 最低気温：12℃
        console.log(json[0].timeSeries[1].areas[0].weathers[0]); // 降水確率（午前）：0 %
        console.log(json[0].timeSeries[1].areas[0].weathers[1]);// 降水確率（午後）：0 %
    })

result.innerHTML5 =
    `
      <ul>
          <li>
              <p>天気：${weatherText}</p>
          </li>
          <i>
              <p>最高気温：${maxTemp}℃</p>
          </i>
          <i>
              <p>最低気温：${minTemp}℃</p>
          </i>
          <i>
              <p>降水確率（午前）：${popMorning}%</p>
          </i>
          <i>
              <p>降水確率（午後）：${popAfternoon}%</p>
          </i>
      </ul>
      ';
      })
      .catch(function (error) {
			console.log(error);
		});
});
