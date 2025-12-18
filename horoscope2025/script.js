
/*画面のスライドの部分*/
document.addEventListener('DOMContentLoaded', function () {

    const sliderInner = document.querySelector(".slider-inner");

    const slides = Array.from(document.querySelectorAll(".slide"));

    /*エラー対策*/
    if (!sliderInner || slides.length === 0) {
        console.error("スライド要素が見つかりませんでした。HTMLを確認してください。");
        return;
    }

    /*無限ループのための複製*/
    const firstClone = slides[slides.length - 1].cloneNode(true);
    firstClone.classList.add('clone', 'first-clone');
    sliderInner.prepend(firstClone);


    const lastClone = slides[0].cloneNode(true);
    lastClone.classList.add('clone', 'last-clone');
    sliderInner.append(lastClone);



    const allSlides = document.querySelectorAll(".slide");
    const totalSlidesWithClones = allSlides.length;

    let currentIndex = 1;

    const realTotalSlides = slides.length;

    /*スライド移動関数*/
    function updateSlide(smooth = true) {
        sliderInner.style.transition = smooth ? 'transform 0.4s ease' : 'none';

        sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    updateSlide(false);

    /*戻るボタン*/
    document.getElementById("nextBtn").addEventListener("click", function () {
        if (currentIndex >= totalSlidesWithClones - 1) return;

        currentIndex++;
        updateSlide(true);
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        if (currentIndex <= 0) return;

        currentIndex--;
        updateSlide(true);
    });

    /*最後まで行ったら一番初めに戻る*/
    sliderInner.addEventListener('transitionend', function () {
        if (currentIndex === realTotalSlides + 1) {
            currentIndex = 1;
            updateSlide(false);
        }

        else if (currentIndex === 0) {
            currentIndex = realTotalSlides;
            updateSlide(false);
        }
    });


    /*占いに使うデータ*/

    const unseiList = [
        "【絶好調】全ての計画がスムーズに進むでしょう。<br>特に人間関係が充実しそうです。",
        "【絶好調】",
        "【絶好調】",
        "【好調】新しいチャレンジに最適な時期。<br>迷わず一歩踏み出しましょう。",
        "【好調】",
        "【好調】",
        "【普通】現状維持を心がけて。<br>大きな変化は避けた方が無難です。",
        "【普通】",
        "【注意】辛いけど今が頑張り時。<br>最後まで諦めずに頑張ろう。",
        "【注意】疲れが溜まりやすい時期。<br>無理せず、ゆったりとした時間を過ごしましょう。",
        "【低調】慎重に行動しましょう。<br>小さなミスが大きな問題につながらないよう<br>注意が必要です。",
        "【低調】",

    ];

    const luckyNumbers = Array.from({ length: 99 }, (_, i) => i + 1);

    const luckyItems = [
        "ハンカチ",
        "イヤホン",
        "ペン",
        "スマホスタンド",
        "リング",
        "ネックレス",
        "アロマキャンドル",
        "ノート",
        "マグカップ",
        "キーホルダー",
        "フライパン",
        "だるま",
        "招き猫",
        "熊手",
        "亀"
    ];

    const zodiacMap = {
        "牡羊座": "aries",
        "牡牛座": "taurus",
        "双子座": "gemini",
        "蟹座": "cancer",
        "獅子座": "leo",
        "乙女座": "virgo",
        "天秤座": "libra",
        "蠍座": "scorpio",
        "射手座": "sagittarius",
        "山羊座": "capricorn",
        "水瓶座": "aquarius",
        "魚座": "pisces"
    };

    //同じ内容が出ないように過去の結果を保存する
    let usedIndexes = {
        aries: { unsei: new Set(), number: new Set(), item: new Set() },
        taurus: { unsei: new Set(), number: new Set(), item: new Set() },
        gemini: { unsei: new Set(), number: new Set(), item: new Set() },
        cancer: { unsei: new Set(), number: new Set(), item: new Set() },
        leo: { unsei: new Set(), number: new Set(), item: new Set() },
        virgo: { unsei: new Set(), number: new Set(), item: new Set() },
        libra: { unsei: new Set(), number: new Set(), item: new Set() },
        scorpio: { unsei: new Set(), number: new Set(), item: new Set() },
        sagittarius: { unsei: new Set(), number: new Set(), item: new Set() },
        capricorn: { unsei: new Set(), number: new Set(), item: new Set() },
        aquarius: { unsei: new Set(), number: new Set(), item: new Set() },
        pisces: { unsei: new Set(), number: new Set(), item: new Set() }
    };


    /*同じ結果を出さないための関数*/
    function getUniqueRandomIndex(zodiacKey, category, listLength) {
        let index;
        const history = usedIndexes[zodiacKey][category];

        if (history.size >= listLength) {
            history.clear();
        }

        do {
            index = Math.floor(Math.random() * listLength);
        } while (history.has(index));

        history.add(index);
        return index;
    }



    /*星座ごとに処理をつける*/
    document.querySelectorAll(".zodiac-item").forEach(item => {
        const button = item.querySelector(".btn");

        /*占うボタンを押したとき*/
        button.addEventListener("click", function () {
            /*星座名からキーを作る*/
            const name = item.querySelector(".name").textContent;

            const key = name.match(/[^\（]+/)[0];

            const zodiacKey = zodiacMap[key];

            if (!zodiacKey) {
                console.error("無効な星座名:", key);
                return;
            }

            /*ランダムな結果を抽選する*/
            const unseiIndex = getUniqueRandomIndex(zodiacKey, "unsei", unseiList.length);
            const numberIndex = getUniqueRandomIndex(zodiacKey, "number", luckyNumbers.length);
            const itemIndex = getUniqueRandomIndex(zodiacKey, "item", luckyItems.length);

            const fortuneText = unseiList[unseiIndex];
            const luckyNumber = luckyNumbers[numberIndex];
            const luckyItem = luckyItems[itemIndex];
            // 【注意】があったら赤くする


            const date = item.querySelector(".date") ? item.querySelector(".date").textContent : '';

            /*もう１を占う*/
            item.innerHTML = `
                <p class="name"><strong>${name}</strong></p>
                <p class="date">${date}</p>

                <hr style="border: 0; border-top: 1px dashed #ccc; margin: 10px 0;">

                <p><strong>12月の運勢</strong></p>
                <p>${fortuneText}</p>

                <p>ラッキーナンバー：<strong>${luckyNumber}</strong></p>
                <p>ラッキーアイテム：<strong>${luckyItem}</strong></p>

                <button class="btn retry">もう一度占う</button>
            `;

            item.querySelector(".retry").addEventListener("click", function () {

                usedIndexes[zodiacKey].unsei.clear();
                usedIndexes[zodiacKey].number.clear();
                usedIndexes[zodiacKey].item.clear();

                /*ボタンを復活させる*/
                item.innerHTML = `
                    <p class="name">${key}（${name.match(/\（(.*?)\）/)[1]}）</p>
                    <p class="date">${date}</p>
                    <button class="btn">占う</button>
                `;

                const newButton = item.querySelector(".btn");
                newButton.addEventListener("click", function () {
                    button.click();
                });

                item.querySelector(".retry").addEventListener("click", function () {
                    button.click();
                });
            });
        });
    });
});



// 星座ごとのスライド番号
// 星座ごとのスライド番号
const slideIndex = {
    aries: 0,
    taurus: 0,
    gemini: 0,
    cancer: 0,

    leo: 1,
    virgo: 1,
    libra: 1,
    scorpio: 1,

    sagittarius: 3,
    capricorn: 3,
    aquarius: 3,
    pisces: 3
};

// メニュー開閉
const menuBtn = document.getElementById("menuBtn");
const starMenu = document.getElementById("starMenu");

menuBtn.addEventListener("click", () => {
    starMenu.classList.toggle("active");
});

// スライダー本体
const sliderInnerOutside = document.querySelector(".slider-inner");

// スライド幅
const slideWidth = document.querySelector(".slide").offsetWidth;

// メニュー内リンク
document.querySelectorAll(".star-menu a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = link.getAttribute("href").replace("#", "");
        const page = slideIndex[id];

        sliderInnerOutside.style.transition = "transform 0.4s ease";
        sliderInnerOutside.style.transform = `translateX(-${page * 100}%)`;

        setTimeout(() => {
            const target = document.getElementById(id);
            target.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 400);

        starMenu.classList.remove("active");
        // 星座ごとのスライド番号
    });
});