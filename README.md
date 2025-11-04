# 2025年後期「JavaScript基礎」授業課題

このリポジトリは、授業で学んだ内容をまとめ、取り組みを記録するためのものです。
毎回の授業が終わったらpushして進捗を管理します。

## 📆 授業ログ

### 9月30日
-変数のキーワード(let,const)

### 要素の取得

'''
document,querySelector('CSSセレクター');
'''

### テキストの追加

'''
Element.textCount = '追加する文字列';
'''

###　イベント

'''
Btn.addEventListner('click',function)
'''

10/28
html
disabled  ボタンの無効化

script
console.log(Math.round(1.4)); //四捨五入 1
console.log(Math.round(1.5)); //四捨五入 2
console.log(Math.floor(10.3)); //切り捨て 10
console.log(Math.ceil(10.3)) //切り上げ 11

currenTime = 現在


関数
function makeOnigiri(){
            console.log('おにぎりを買った！')
        }
        makeOnigiri();

// 1. button要素を全て取得して、変数buttonsに代入する
const buttons = document.querySelectorAll('button');
console.log(buttons);

// 2. buttonsの要素数分、ランダムな数（0〜8）を生成する
const randomNum = Math.floor(Math.random()*9)
console.log(randomNum);



//html
<!-- <h1>当たりを探せ！</h1>
    <div class="buttons">
      <button>押す</button>
      <button>押す</button>
      <button>押す</button>
      <button>押す</button>
      <button>押す</button>
      <button>押す</button>
      <button>押す</button>
      <button>押す</button>
      <button>押す</button>
    </div> -->

//css
h1 {
  text-align: center;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 500px;
  margin-inline: auto;
}
button {
  padding: 10px;
  font-size: 16px;
}
body.winner {
  background-color: pink;
}
body.loser {
  background-color: #ccc;
}


//js
//ボタンを押して当たったら背景がピンク色、はずれたらグレー色になるようにしてください。

// 1. button要素を全て取得して、変数buttonsに代入する
const buttons = document.querySelectorAll('button');
console.log(buttons);

// 2. buttonsの要素数分、ランダムな数（0〜8）を生成する
const randomNum = Math.floor(Math.random() * 9)
console.log(randomNum);

// 3. for文で、buttonsの要素数分、クリックイベントを設定する

for(let i = 0; i < buttons.length; i++){
buttons[i].addEventListener('click',function(){
  //console.log('クリックしたぞ' + i);
  const bodyElm = document.querySelector('body');
  console.log(i,randomNum);
  if(randomNum === i){
    bodyElm.classList.remove('loser');
    bodyElm.classList.add = ('winner');
  }else{
    bodyElm.classList.remove('loser');
    bodyElm.classList.add = ('winner');
  }
})
}



















//