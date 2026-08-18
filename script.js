/* ========================================
   Hero → Works → About bridge animation
========================================= */

const worksBridge = document.querySelector(".hero__works-bridge");

if (worksBridge) {
  const worksBridgeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.35,
    }
  );

  worksBridgeObserver.observe(worksBridge);
}

/* Web Design 01〜06 sequential animation */
const processItems = document.querySelectorAll(".web-process__item");

if (processItems.length) {
  const processObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        processItems.forEach((item) => {
          item.classList.add("is-visible");
        });

        observer.disconnect();
      });
    },
    {
      threshold: 0.3,
    }
  );

  processObserver.observe(processItems[0]);
}

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

// ========================================
// Other Works Indicator
// ========================================

const otherWorksDotsContainer =
  document.querySelector(".other-works__dots");

const otherWorksLastNumber =
  document.querySelector(".other-works__last-number");

function createOtherWorksIndicator() {
  if (!otherWorksDotsContainer) return;

  // 一度空にする
  otherWorksDotsContainer.innerHTML = "";

  // 作品数に合わせてドットを自動生成
  otherWorks.forEach((work, index) => {
  const dot = document.createElement("button");

  dot.className = "other-works__dot";
  dot.type = "button";

  if (index === 0) {
    dot.classList.add("is-active");
  }

  dot.setAttribute(
    "aria-label",
    `${index + 1}件目を表示`
  );

  /* クリックした作品へ切り替え */
  dot.addEventListener("click", () => {
    currentOtherWorkIndex = index;

    updateOtherWork();

    /* activeの横線を移動 */
    const dots =
      document.querySelectorAll(".other-works__dot");

    dots.forEach((item, dotIndex) => {
      item.classList.toggle(
        "is-active",
        dotIndex === currentOtherWorkIndex
      );
    });
  });

  otherWorksDotsContainer.appendChild(dot);
});

  // 最後の数字も作品数から自動取得
  if (otherWorksLastNumber) {
    otherWorksLastNumber.textContent =
      String(otherWorks.length).padStart(2, "0");
  }
}

createOtherWorksIndicator();

function updateOtherWorksIndicator() {
  const dots =
    document.querySelectorAll(".other-works__dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle(
      "is-active",
      index === currentOtherWorkIndex
    );
  });
}

/* ========================================
   Other Works Slider
======================================== */

let currentOtherWorkIndex = 0;


/* 要素を取得 */
const otherWorkImage =
  document.getElementById("other-work-image");

const otherWorkCategory =
  document.getElementById("other-work-category");

const otherWorkTitle =
  document.getElementById("other-work-title");

const otherWorkCatch =
  document.getElementById("other-work-catch");

const otherWorkPurpose =
  document.getElementById("other-work-purpose");

const otherWorkTarget =
  document.getElementById("other-work-target");

const otherWorkRole =
  document.getElementById("other-work-role");

const otherWorkTools =
  document.getElementById("other-work-tools");


/* ========================================
   表示更新
======================================== */

let isFirstOtherWorkRender = true;

function updateOtherWork() {

  const visual = document.querySelector(".other-works__visual");
  const content = document.querySelector(".other-work__content");

  /* 初回表示だけフェードなし */
  if (isFirstOtherWorkRender) {

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

    updateOtherWorksIndicator();

    isFirstOtherWorkRender = false;

    return;
  }


  /* 2回目以降はフェード */
  visual.classList.add("is-fading");
  content.classList.add("is-fading");


  setTimeout(() => {

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

    updateOtherWorksIndicator();

    visual.classList.remove("is-fading");
    content.classList.remove("is-fading");

  }, 400);
}

/* 初期表示 */
updateOtherWork();


/* ========================================
   Other Works Auto Slide
======================================== */

setInterval(() => {

  currentOtherWorkIndex =
    (currentOtherWorkIndex + 1) % otherWorks.length;

  updateOtherWork();

}, 6500);



/* About line animation */

const about = document.querySelector(".about");

if (about) {

  const aboutObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");

      observer.unobserve(entry.target);

      const aboutSection = document.querySelector(".about");

if (aboutSection) {
  setTimeout(() => {
    aboutSection.classList.add("is-visible");
  }, 2500);
}

    });

  }, {
    threshold: 0.5
  });

  aboutObserver.observe(about);

}

/* ========================================
   SNS SLIDER
======================================== */

const snsSlides = document.querySelectorAll(".sns-slide");
const snsDots = document.querySelectorAll(".sns-slider__dot");

if (snsSlides.length > 1 && snsDots.length === snsSlides.length) {

  let currentSlide = 0;
  let snsTimer;


  /* スライド切り替え */
  function showSnsSlide(index) {

    snsSlides.forEach((slide) => {
      slide.classList.remove("is-active");
    });

    snsDots.forEach((dot) => {
      dot.classList.remove("is-active");
    });


    currentSlide = index;


    snsSlides[currentSlide].classList.add("is-active");
    snsDots[currentSlide].classList.add("is-active");

  }


  /* 自動再生 */
  function startSnsSlider() {

    snsTimer = setInterval(() => {

      const nextSlide =
        (currentSlide + 1) % snsSlides.length;

      showSnsSlide(nextSlide);

    }, 7000);

  }


  /* インジケーターをクリック */
  snsDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      clearInterval(snsTimer);

      showSnsSlide(index);

      startSnsSlider();

    });

  });


  /* スタート */
  showSnsSlide(0);
  startSnsSlider();

}

/* ========================================
   SECTION LINE HEADING
======================================== */

const sectionLineHeadings =
  document.querySelectorAll(".section-line-heading");

if (sectionLineHeadings.length) {

  const sectionLineObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.4
      }
    );


  sectionLineHeadings.forEach((heading) => {
    sectionLineObserver.observe(heading);
  });

}

const contactSection = document.querySelector(".contact");

if (contactSection) {

  const contactObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.35
    }
  );

  contactObserver.observe(contactSection);
}

/* ========================================
   スマホハンバーガー
======================================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const headerNav = document.querySelector(".header__nav");

  if (!menuButton || !headerNav) return;

  menuButton.addEventListener("click", () => {
    headerNav.classList.toggle("is-open");
    menuButton.classList.toggle("is-open");
  });
});








const snsGallery = document.querySelector('.sns__gallery');

if (snsGallery && window.innerWidth <= 768) {
  const snsItems = [...snsGallery.children];

  const unravelSNS = () => {
    const firstPositions = snsItems.map(item =>
      item.getBoundingClientRect()
    );

    snsGallery.classList.add('is-unravelled');

    const lastPositions = snsItems.map(item =>
      item.getBoundingClientRect()
    );

    snsItems.forEach((item, index) => {
      const deltaX =
        firstPositions[index].left -
        lastPositions[index].left;

      const deltaY =
        firstPositions[index].top -
        lastPositions[index].top;

      item.style.transition = 'none';
      item.style.transform =
        `translate(${deltaX}px, ${deltaY}px)`;
    });

    snsGallery.offsetHeight;

    snsItems.forEach((item, index) => {
      item.style.transition =
        `transform 1.2s cubic-bezier(.22, 1, .36, 1) ${index * 0.4}s`;

      item.style.transform = 'translate(0, 0)';
    });
  };

  const snsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          unravelSNS();
          snsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1.0
    }
  );

  snsObserver.observe(snsGallery);
}