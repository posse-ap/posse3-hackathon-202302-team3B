'use strict';

{
  /**
   * @typedef QUIZ
   * @property {number} correctNumber 問題番号
   * @property {string | undefined} note ノート
   * @property {string} question 問題文
   * @property {string[]} answers 回答の配列
   */

  /**
   * @description 問題と回答の定数
   * @type {QUIZ[]}
   */
  const ALL_QUIZ = [
    {
      question: '大学でどの学部に在籍しているでしょう？',
      answers: ['理工学部', '経営学部', '商学部'],
      correctNumber: 0,
    },
    {
      question: '出身地はどこでしょう？',
      answers: ['神奈川県横浜市', '埼玉県和光市', '東京都八王子市'],
      correctNumber: 0,
    },
    {
      question: '趣味はなんでしょう？',
      answers: ['推し活', '飼っているデグー(ネズミの親戚の動物)のまろんくんと戯れること', 'Youtubeのネタ動画見ること'],
      correctNumber: 1,
    },
    {
      question: '最近ハマっていることはなんでしょう？',
      answers: ['邦ロック聞き漁ること', 'MARVEL見ること', '野菜生活グリーンスムージーを飲むこと'],
      correctNumber: 2,
    },
    {
      question: '将来の夢はなんでしょう？',
      answers: ['毎日笑って過ごすこと', 'のんびりと暮らすこと', '誠実に生きること'],
      correctNumber: 1,
    },
  ];

  /**
   * @description クイズコンテナーの取得
   * @type {HTMLElement}
   */
  const quizContainer = document.getElementById('js-quizContainer');

  /**
   * @description クイズ１つ１つのHTMLを生成するための関数
   * @param quizItem { QUIZ }
   * @param questionNumber { number }
   * @returns {string}
   */

  /*クイズのHTMLを作成*/
  const createQuizHtml = (quizItem, questionNumber) => {

    /**
     * @description 回答の生成
     * @type {string}
     */
    /*mapはforEachみたいなもん。quizItemの中のanswersのそれぞれにanswerという名前とanswerIndexで数字をふる*/
    const answersHtml = quizItem.answers.map((answer, answerIndex) => 
        `<li class="p-quiz-box__answer__item">
          <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
            ${answer}<i class="u-icon__arrow"></i>
          </button>
        </li>`
    ).join('');

    // 引用テキストの生成
    const noteHtml = quizItem.note ? `<cite class="p-quiz-box__note">
    <i class="u-icon__note"></i>${quizItem.note}
    </cite>` : '';
    

    /*クイズページの具体的なHTML作成スタート*/
    return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
    <!-- Q（数字）＋  問題文  ＋  写真  -->
      <div class="p-quiz-box__question">
        <h2 class="p-quiz-box__question__title">
          <span class="p-quiz-box__label">Q${questionNumber + 1}</span>
          <span
            class="p-quiz-box__question__title__text">${quizItem.question}</span>
        </h2>
        <figure class="p-quiz-box__question__image">
          <img src="../assets/img/quiz/img-quiz0${questionNumber + 1}.png" alt="">
        </figure>
      </div>
    <!-- A 選択肢 選択肢 選択肢 -->
      <div class="p-quiz-box__answer">
        <span class="p-quiz-box__label p-quiz-box__label--accent">A</span>
        <ul class="p-quiz-box__answer__list">
          ${answersHtml}
        </ul>
    <!-- 答えをクリックした後に正解or不正解と正答が出る-->
        <div class="p-quiz-box__answer__correct js-answerBox">
          <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
          <p class="p-quiz-box__answer__correct__content">
            <span class="p-quiz-box__answer__correct__content__label">A</span>
            <span class="js-answerText"></span>
          </p>
        </div>
      </div>
      ${noteHtml}
    </section>`
  }

  /**
   * @type {string}
   * @description 生成したクイズのHTMLを #js-quizContainer に挿入
   */
  /*56行目でつくったquizContainer（唯一index.htmlから取り出してつくった関数）の中を取り出して（何も入ってないものを取り出したから書き換えるとかではなく、何も書いていないところに書いていく）
  ALL_QUIZのそれぞれにquizItemという名前をつけてindexで番号をつける*/
  quizContainer.innerHTML = ALL_QUIZ.map((quizItem, index) => {
    return createQuizHtml(quizItem, index)
  }).join('')

  /**
   * @type {NodeListOf<Element>}
   * @description すべての問題を取得
   */
  const allQuiz  = document.querySelectorAll('.js-quiz');

  /**
   * @description buttonタグにdisabledを付与
   * @param answers {NodeListOf<Element>}
   */
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

  /**
   * @description trueかfalseで出力する文字列を出し分ける
   * @param target {Element}
   * @param isCorrect {boolean}
   */
  //targetという仮引数を立てて何も入っていないものをinnerTextで取り出して　[isCorrectの関数に対する式（183行目）がtureなら'正解！'と表示しfalseなら'不正解...'と表示する] のを入れる（187行目でtargetにanswerTitleを当てはめる→js-answerTitleというクラス名がついているタグに[]の内容を適用）
  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }

  /**
   * @description trueかfalseでクラス名を付け分ける
   * @param target {Element}
   * @param isCorrect {boolean}
   */
  //targetという仮引数を立てて｛isCorrectの関数に対する式（184行目）がtureなら'is-correct'と表示しfalseなら'is-incorrect'というクラス名をつける｝（189行目でtargetにanswerBoxを当てはめる→js-ans
  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }

  /**
   * 各問題の中での処理
   */
  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));

        // 全てのボタンを非活性化
        setDisabled(answers);

        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const correctNumber = ALL_QUIZ[selectedQuiz].correctNumber
        const isCorrect = correctNumber === selectedAnswerNumber;

        // 回答欄にテキストやclass名を付与
        answerText.innerText = ALL_QUIZ[selectedQuiz].answers[correctNumber];
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })
}
