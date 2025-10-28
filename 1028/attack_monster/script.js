// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth; //再描写のためのおまじない
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP;
let hp2 = MAX_HP;

// モンスター
const enemy = document.querySelector('.enemyImg');
const enemy2 = document.querySelector('.enemyImg2');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

const hpText2 = document.querySelector('.hpText2 span');
const hpBar2 = document.querySelector('.hpBar2');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn'); const attackButton2 = document.querySelector('.attackBtn2');

//効果音の取得
const seDefeat = document.querySelector('#se-defeat');
const seHit = document.querySelector('#se-hit');

// 1ランダムダメージの実装
//①　ランダムダメージの実装
attackButton.addEventListener('click', function () {
  const damage =
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  // ダメージ計算
  hp = hp - damage;
  hpText.textContent = hp;
  // ②HP表示の更新ロジック修正(マイナス値の修正)
  hp = hp - damage;
  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    //③撃破時のエフェクト適用(enemy-fly または enemy-squash)

    enemy.classList.add('enemy--squash');

    //断末魔
    //撃破後のボタン無効化処理
    attackButton.disabled = true;
    //変数に入れずに、そのまま.でつなぐ書きただでもok
    //撃破メッセージ
    document.querySelector('.log').textContent = 'モンスターを倒した！';

    seDefeat.play();
  } else {
    hpText.textContent = hp; //テキストを書き換える
    hpBar.value = hp;
    //⑥攻撃時の効果音の追加
    shakeEnemy();
    seHit.currentTime = 0; //連続した時に再生位置を0に戻す
    seHit.play();
  }
})


//モンスター②
// attackButton.addEventListener('click', function () {
//   const damage =
//     Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
//   // ダメージ計算
//   hp = hp - damage;
//   hpText.textContent = hp;
//   // ②HP表示の更新ロジック修正(マイナス値の修正)
//   hp = hp - damage;
//   if (hp <= 0) {
//     hpText.textContent = 0;
//     hpBar.value = 0;
//     //③撃破時のエフェクト適用(enemy-fly または enemy-squash)

//     enemy.classList.add('enemy--squash');

//     //断末魔
//     //撃破後のボタン無効化処理
//     attackButton.disabled = true;
//     //変数に入れずに、そのまま.でつなぐ書きただでもok
//     //撃破メッセージ
//     document.querySelector('.log').textContent = 'モンスターを倒した！';

//     seDefeat.play();
//   } else {
//     hpText.textContent = hp; //テキストを書き換える
//     hpBar.value = hp;
//     //⑥攻撃時の効果音の追加
//     shakeEnemy();
//     seHit.currentTime = 0; //連続した時に再生位置を0に戻す
//     seHit.play();
//   }
