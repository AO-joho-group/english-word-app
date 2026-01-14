// 画面要素
const home = document.getElementById("home");
const study = document.getElementById("study");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");

// 単語データ（仮）
const words = [
  ["abandon", "放棄する"],
  ["accurate", "正確な"],
  ["achieve", "達成する"],
  ["affect", "影響する"],
  ["ancient", "古代の"],
  ["benefit", "利益"],
  ["compare", "比較する"]
];

// シャッフル
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

let questions = shuffle(words.slice());
let currentIndex = 0;

// 問題表示
function showQuestion() {
  resultEl.textContent = "";
  choicesEl.innerHTML = "";

  if (currentIndex >= questions.length) {
    questions = shuffle(words.slice());
    currentIndex = 0;
  }

  const [eng, correctJp] = questions[currentIndex];
  questionEl.textContent = eng;

  const otherChoices = words
    .filter(([e, j]) => j !== correctJp)
    .map(([e, j]) => j);

  shuffle(otherChoices);

  const choices = shuffle([
    correctJp,
    otherChoices[0],
    otherChoices[1],
    otherChoices[2]
  ]);

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice");

    btn.onclick = () => {
      if (choice === correctJp) {
        resultEl.textContent = "正解";
        setTimeout(() => {
          currentIndex++;
          showQuestion();
        }, 800);
      } else {
        resultEl.textContent = "不正解";
      }
    };

    choicesEl.appendChild(btn);
  });
}

// 画面切り替え
startBtn.onclick = () => {
  home.style.display = "none";
  study.style.display = "block";
  showQuestion();
};

backBtn.onclick = () => {
  study.style.display = "none";
  home.style.display = "block";
};
