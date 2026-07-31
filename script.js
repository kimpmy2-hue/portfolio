// =========================
// Other Works Slider
// =========================

const otherWorks = [
  {
    category: "イベントポスター",
    title: "D&D 夏祭りライブポスター",
    catchCopy: "ライブが待ち遠しくなる、夏の空気をデザイン。",
    purpose: "イベント告知・集客",
    target: "地域の方・ライブ来場者",
    role: "ヒアリング / デザイン",
    tools: "Canva",
    image: "images/dand-summer-poster.png",
    alt: "D&D 夏祭りライブポスター"
  },
  {
    category: "イベントポスター",
    title: "D&D 敬老会ライブポスター",
    catchCopy: "世代を超えて楽しめる、温もりのある一枚。",
    purpose: "イベント告知・集客",
    target: "地域の方・敬老会参加者",
    role: "ヒアリング / デザイン",
    tools: "Canva",
    image: "images/dand-keiro-poster.png",
    alt: "D&D 敬老会ライブポスター"
  },
  {
    category: "イベントチラシ",
    title: "ハイキングイベントチラシ",
    catchCopy: "「行ってみたい」を引き出す情報設計。",
    purpose: "イベント告知・集客",
    target: "自然散策を楽しみたい方",
    role: "企画 / デザイン",
    tools: "Canva",
    image: "images/hiking-flyer.png",
    alt: "ハイキングイベントチラシ"
  },
  {
    category: "Instagram投稿テンプレート",
    title: "D&D<br>Instagram投稿テンプレート",
    catchCopy: "世界観を整え、発信をもっと続けやすく。",
    purpose: "ブランドイメージ統一・認知拡大",
    target: "音楽活動に興味のある方",
    role: "企画（設計） / ヒアリング / デザイン",
    tools: "Canva",
    image: "images/dand-instagram-template.png",
    alt: "D&D Instagram投稿テンプレート"
  },
  {
    category: "Instagram投稿テンプレート",
    title: "ネイルサロン<br>Instagram投稿テンプレート",
    catchCopy: "選ばれる理由が伝わる、統一感のある発信へ。",
    purpose: "ブランドイメージ統一・認知拡大",
    target: "ネイルサロンを探している30〜40代女性",
    role: "企画 / デザイン",
    tools: "Canva",
    image: "images/nail-instagram-template.png",
    alt: "ネイルサロン Instagram投稿テンプレート"
  }
];

let currentOtherWorkIndex = 0;

const otherWorkImage = document.getElementById("other-work-image");
const otherWorkCategory = document.getElementById("other-work-category");
const otherWorkTitle = document.getElementById("other-work-title");
const otherWorkCatch = document.getElementById("other-work-catch");
const otherWorkPurpose = document.getElementById("other-work-purpose");
const otherWorkTarget = document.getElementById("other-work-target");
const otherWorkRole = document.getElementById("other-work-role");
const otherWorkTools = document.getElementById("other-work-tools");
const otherWorkCounter = document.getElementById("other-work-counter");
const otherWorkPrev = document.getElementById("other-work-prev");
const otherWorkNext = document.getElementById("other-work-next");

function updateOtherWork() {
  const work = otherWorks[currentOtherWorkIndex];

  otherWorkImage.src = work.image;
  otherWorkImage.alt = work.alt;
  otherWorkCategory.textContent = work.category;
  otherWorkTitle.innerHTML = work.title;
  otherWorkCatch.textContent = work.catchCopy;
  otherWorkPurpose.textContent = work.purpose;
  otherWorkTarget.textContent = work.target;
  otherWorkRole.textContent = work.role;
  otherWorkTools.textContent = work.tools;

  otherWorkCounter.textContent =
    `${String(currentOtherWorkIndex + 1).padStart(2, "0")} / ${String(otherWorks.length).padStart(2, "0")}`;
}

otherWorkNext.addEventListener("click", () => {
  currentOtherWorkIndex =
    (currentOtherWorkIndex + 1) % otherWorks.length;

  updateOtherWork();
});

otherWorkPrev.addEventListener("click", () => {
  currentOtherWorkIndex =
    (currentOtherWorkIndex - 1 + otherWorks.length) % otherWorks.length;

  updateOtherWork();
});

updateOtherWork();