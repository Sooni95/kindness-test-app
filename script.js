const questions = [
    {
        question: "친구가 불행 배틀을 신청하며 '나 요즘 너무 힘들어...'라고 운을 뗄 때, 당신의 반응은?",
        options: [
            { text: "묵묵히 들어주며 '말해줘서 고마워' 스킬 시전. (공감 만렙!)", score: 10 },
            { text: "'그래서 해결책은 이거야!' 라며 초고속 문제 해결 모드 가동. (ESFJ세요...?)" , score: 7 },
            { text: "'나도 힘든데... 아! 혹시 내일부터 날씨 좋대!' 라며 화제 전환. (파워 T, 혹은 회피형 인간?)" , score: 4 },
            { text: "슬쩍 이어폰을 만지작거리며 '어디 아프냐'는 눈빛 발사. (난 내 갈 길 간다)" , score: 1 }
        ]
    },
    {
        question: "엘리베이터 문이 닫히기 직전, 저 멀리서 필사적으로 뛰어오는 사람을 발견했다면?",
        options: [
            { text: "스피드웨건처럼 '열림' 버튼을 누르고 미소를 지어준다. (천사 강림!)", score: 10 },
            { text: "살짝 뜸 들이다가 '아... 이 정도면 눌러줘야지...' 하며 마지못해 누른다. (갈등하는 속마음)", score: 7 },
            { text: "'이미 늦었어...'라고 중얼거리며 닫히는 문에 대한 집착을 보인다. (나만 아니면 돼)", score: 4 },
            { text: "오히려 닫힘 버튼을 한 번 더 누르고 눈을 감는다. (극악무도한 자)", score: 1 }
        ]
    },
    {
        question: "길을 걷다 누군가 지갑을 떨어뜨린 것을 봤다. 당신의 머릿속은?",
        options: [
            { text: "'저분은 이 지갑을 얼마나 애타게 찾을까?' 걱정하며 번개처럼 주워준다. (오지라퍼... 아니, 의인!)", score: 10 },
            { text: "'어? 지갑이네... 누구 없나? 나라도 주워줄까?' 잠시 스캔 후 조심스럽게 알려준다. (소심한 정의감)", score: 7 },
            { text: "'내 알 바 아닌데...' 라고 생각하며 총총 지나간다. (지갑 주인은 나야 나)", score: 4 },
            { text: "'어... 저 안에 얼마가 들었을까?' 슬쩍 눈길만 준다. (블랙핑크 '머니' BGM 자동 재생)", score: 1 }
        ]
    },
    {
        question: "만원 버스/지하철에서 서 있는데, 내 옆으로 노약자/임산부가 나타났다. 당신의 동공은?",
        options: [
            { text: "'자, 여기 제 자리입니다!' 외치며 스턴트맨처럼 일어난다. (매너의 아이콘)", score: 10 },
            { text: "'아, 피곤한데...' 하고 잠시 시선을 피하다가, 결국 눈이 마주쳐서 일어난다. (유교 코인 탑승)", score: 7 },
            { text: "스마트폰 화면을 열심히 쳐다보며 '못 본 척' 연기를 한다. (연기 대상감)", score: 4 },
            { text: "'먼저 앉은 사람이 임자지!' 라는 마인드로 꿀잠 모드에 돌입한다. (세상 편함)", score: 1 }
        ]
    },
    {
        question: "주말 꿀잠 중인데, 베프가 갑자기 '야, 나 지금 급하게 이사 좀 도와줘!' 라고 SOS를 보냈다. 당신은?",
        options: [
            { text: "'당장 간다, 내 몸 부서져라 돕겠다!' 츄리닝 입고 뛰어나간다. (천생연분)", score: 10 },
            { text: "'아... 오늘 약속이 있었는데... 일단 상황 들어보고 최대한 도와줄게.' 라며 계산기를 두드린다. (손익분기점 따지는 중)", score: 7 },
            { text: "'나 오늘 몸이 안 좋아서 죽겠네...' 라며 가짜 기침을 한다. (명배우 납시오)", score: 4 },
            { text: "전화기를 던지고 다시 잠든다. (프로 잠수러)", score: 1 }
            ]
    },
    {
        question: "나에게 약간의 손해가 있지만, 다른 사람에게는 로또 당첨급 도움이 되는 상황이라면?",
        options: [
            { text: "내 통장 잔고가 마이너스라도 일단 돕는다. (보살님?)", score: 10 },
            { text: "'이 정도면 손해 볼 만하지' 하고 시원하게 돕는다. (착함에 유료 옵션 추가)", score: 7 },
            { text: "'내게 이득이 없다면 꿈쩍도 하지 않을 것이다!' 라고 외치며 이기심을 뽐낸다. (자본주의의 노예)", score: 4 },
            { text: "상대방이 나에게 빚을 진다는 확신이 들 때만 돕는다. (철저한 비즈니스)", score: 1 }
        ]
    },
    {
        question: "친한 동료가 상사에게 부당한 대우를 받는 것을 목격했다. 당신의 뇌 구조는?",
        options: [
            { text: "'이건 아니다!' 싶어서 바로 나서서 한 마디 한다. (정의의 사도)", score: 10 },
            { text: "'어떡하지... 어떻게 도와줘야 하지?' 고민하다가 동료에게 몰래 위로의 커피를 건넨다. (소심한 응원)", score: 7 },
            { text: "'나까지 엮이면 피곤해...' 라며 조용히 헤드셋을 낀다. (평화주의자? 혹은 방관자?)", score: 4 },
            { text: "'꼬시다! 난 저 상사 편이다!' 속으로 팝콘을 튀긴다. (의문의 빌런)", score: 1 }
        ]
    },
    {
        question: "공공장소에서 누군가 시끄럽게 통화하며 분위기를 흐린다. 당신의 인내심은?",
        options: [
            { text: "'죄송하지만, 다른 분들도 계셔서요.' 라고 나긋나긋하게 주의를 준다. (점잖은 해결사)", score: 10 },
            { text: "째려보거나 한숨을 쉬면서 불편한 기색을 내비친다. (눈으로 말해요)", score: 7 },
            { text: "'내가 참아야지...' 하며 부처님 멘탈을 뽐낸다. (수행 중)", score: 4 },
            { text: "나도 따라서 더 크게 통화를 시작한다. (이판사판)", score: 1 }
        ]
    },
    {
        question: "누군가에게 불만을 표현해야 할 때, 당신의 화법은?",
        options: [
            { text: "'혹시... 제가 너무 예민한가요? 하지만 솔직히 조금 불편해서요...'", score: 10 },
            { text: "'이 점은 개선되면 좋겠습니다.' (깔끔! 핵심만 콕!)", score: 7 },
            { text: "불만을 입 밖에 내는 대신, 혼자 끙끙 앓다가 사라져 버린다. (갑분사라짐)", score: 4 },
            { text: "랩 배틀하듯이 논스톱으로 불만을 쏟아낸다. (힙합 전사)", score: 1 }
        ]
    },
    {
        question: "내가 잘못한 일이 있다면, 솔직하게 인정하고 사과하는 편인가?",
        options: [
            { text: "그렇다. '네, 제 잘못입니다. 죄송합니다!' (쿨내 진동)", score: 10 },
            { text: "음... 사과하긴 하는데, 구구절절 변명부터 시작한다. (TMI 주의)", score: 7 },
            { text: "사과는 커녕, 오히려 상대방에게 책임을 전가한다. (프로 남탓러)", score: 4 },
            { text: "잘못을 인정하느니 차라리 잠수를 탄다. (오리발의 달인)", score: 1 }
        ]
    },
    {
        question: "처음 만난 사람과 대화할 때, 당신의 리액션은?",
        options: [
            { text: "'와~ 정말요?', '대단하시네요!' 라며 폭풍 리액션으로 분위기를 띄운다. (인싸 재질)", score: 10 },
            { text: "내 얘기 위주로 신나게 떠든다. (투 머치 토커)", score: 7 },
            { text: "어색해서 자꾸 딴짓하거나 폰을 만지작거린다. (아싸 본능)", score: 4 },
            { text: "'이 대화 언제 끝나지?' 생각하며 영혼 없이 듣는다. (탈출각 재는 중)", score: 1 }
        ]
    },
    {
        question: "나에게 도움을 준 사람에게는 반드시 보답하려고 노력하는 편인가?",
        options: [
            { text: "그렇다! 어떻게든 갚을 기회를 엿본다. (은혜 갚는 까치)", score: 10 },
            { text: "고맙긴 한데... 솔직히 바빠서 딱히 챙기진 못한다. (인간적인 현실)", score: 7 },
            { text: "'뭐, 나 아니어도 누군가에게 도움 주겠지?' 하고 쿨하게 넘긴다. (쿨내 진동)", score: 4 },
            { text: "'내가 도움받은 건 운이 좋은 거고!' 라며 아예 생각하지 않는다. (철면피)", score: 1 }
        ]
    },
    {
        question: "나의 이익과 타인의 이익이 충돌할 때, 당신의 선택은?",
        options: [
            { text: "'제가 좀 손해 보면 어때요! 다 같이 좋으면 됐지!' (희생정신 만렙)", score: 10 },
            { text: "'적절한 선에서 타협점을 찾아봅시다!' (윈-윈 전략가)", score: 7 },
            { text: "'내 이익이 우선이지!' 라며 이기적인 면모를 드러낸다. (칼날 같은 현실주의자)", score: 4 },
            { text: "어떻게든 타인의 이익을 빼앗아 내 이익으로 만든다. (진정한 승리자...?)", score: 1 }
        ]
    }
];

// 결과 유형 정의 (총점에 따라 어떤 결과가 나올지)
const results = [
    {
        minScore: 110,
        title: "만인의 위로자: 천사인가요? 날개 숨기지 마요!",
        image: "https://via.placeholder.com/400x200?text=만인의+위로자", // 실제 이미지 URL로 교체하세요!
        description: "당신은 세상의 모든 착함을 품고 있는 보기 드문 존재입니다. 타인의 아픔을 자신의 것처럼 느끼고, 희생을 두려워하지 않는 진정한 보살입니다. 당신의 주변에는 항상 따뜻한 온기가 감돌 거예요.",
        traits: ["이타심 만렙", "공감 능력 최강", "배려의 아이콘", "말없이 실천하는 행동가"],
        advice: "너무 착해서 손해 볼까 걱정됩니다. 가끔은 '나' 자신도 돌보는 이기적인 착함도 필요해요!"
    },
    {
        minScore: 90,
        title: "정의로운 착함: 츤데레 매력의 히어로!",
        image: "https://via.placeholder.com/400x200?text=정의로운+착함", // 실제 이미지 URL로 교체하세요!
        description: "당신은 겉으로는 차가워 보일 수 있지만, 속은 누구보다 따뜻하고 정의롭습니다. 불의를 보면 참지 못하고, 옳은 일을 위해서는 망설이지 않죠. 당신의 츤데레 같은 착함에 주변 사람들은 매력을 느낍니다.",
        traits: ["강력한 정의감", "솔직하고 직설적", "행동으로 보여주는 타입", "칼 같지만 따뜻함"],
        advice: "가끔은 부드러운 말 한마디가 더 큰 감동을 줄 수 있어요. 속마음을 좀 더 표현해 보세요!"
    },
    {
        minScore: 70,
        title: "실용적인 착함: 현실적인 해결사!",
        image: "https://via.placeholder.com/400x200?text=실용적인+착함", // 실제 이미지 URL로 교체하세요!
        description: "당신은 감정적인 공감보다는 실질적인 도움을 주는 데 능숙합니다. 문제 해결 능력이 뛰어나며, 현실적인 조언으로 주변 사람들에게 큰 힘이 되어줍니다. 당신의 착함은 매우 현실적이고 도움이 됩니다.",
        traits: ["문제 해결 능력 우수", "실용주의자", "현실적인 조언가", "효율적인 도움"],
        advice: "가끔은 이성적인 판단보다는 따뜻한 위로가 필요할 때도 있어요. 감성적인 부분도 채워준다면 금상첨화!"
    },
    {
        minScore: 50,
        title: "선택적 착함: 내 사람에겐 따뜻하겠지...?",
        image: "https://via.placeholder.com/400x200?text=선택적+착함", // 실제 이미지 URL로 교체하세요!
        description: "당신은 모든 사람에게 친절하기보다는, '내 사람'이라고 생각하는 이들에게 특별히 착합니다. 아는 사람에게는 간 쓸개 다 빼줄 것 같지만, 모르는 사람에게는 철저히 무관심할 수 있습니다. 경계가 명확한 당신의 착함입니다.",
        traits: ["친한 사람에게 헌신적", "내 영역 중요시", "선 긋기 명확", "솔직한 감정 표현"],
        advice: "조금만 더 마음의 문을 열어보세요. 새로운 관계 속에서 예상치 못한 기쁨을 찾을 수도 있습니다!"
    },
    {
        minScore: 0, // 가장 낮은 점수 범위
        title: "알 수 없는 착함: 혹시 지금 잠시 스쳐간 바람이세요...?",
        image: "https://via.placeholder.com/400x200?text=알수없는+착함", // 실제 이미지 URL로 교체하세요!
        description: "음... 당신의 착함 지수는 측정 불가 영역에 가깝습니다. 자신만의 세상에서 행복하게 사는 타입이거나, 세상의 비정함에 너무 지쳐버린 걸까요? 당신의 착함을 찾아내는 건 미션 임파서블 같습니다.",
        traits: ["개인주의 성향 강함", "자기애 충만", "세상만사 무관심", "남들 시선 신경 안 씀"],
        advice: "자신을 사랑하는 것도 중요하지만, 가끔은 주변에 따뜻한 눈길을 주는 건 어떨까요? 작은 변화가 큰 행복으로 돌아올 수 있습니다!"
    }
];

// DOM 요소 가져오기
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-button');
const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
// nextButton은 이제 JavaScript에서 숨기거나 HTML에서 제거했으므로 주석 처리하거나 참조하지 않습니다.
// const nextButton = document.getElementById('next-button');
const progressBarFill = document.getElementById('progress-bar-fill');
const resultTitle = document.getElementById('result-title');
const resultImage = document.getElementById('result-image');
const resultDescription = document.getElementById('result-description');
const traitList = document.getElementById('trait-list');
const adviceText = document.getElementById('advice-text');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let totalScore = 0;

// 시작 버튼 클릭 이벤트
startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    questionScreen.style.display = 'block';
    currentQuestionIndex = 0;
    totalScore = 0;
    loadQuestion();
});

// 다시 테스트하기 버튼 클릭 이벤트
restartButton.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    // 모든 상태 초기화는 startButton 클릭 시 다시 이루어집니다.
});

// 질문 로드 함수
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionNumberElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    questionTextElement.textContent = question.question;
    optionsContainer.innerHTML = ''; // 기존 옵션 지우기

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(button, option.score)); // 옵션 클릭 시 바로 다음으로 넘어감
        optionsContainer.appendChild(button);
    });

    updateProgressBar();
}

// 옵션 선택 함수 (클릭 시 바로 다음 질문/결과로 이동)
function selectOption(selectedButton, score) {
    // 모든 옵션 버튼에서 'selected' 클래스 제거 (시각적 초기화)
    document.querySelectorAll('.option-button').forEach(button => {
        button.classList.remove('selected');
    });
    // 선택된 버튼에 'selected' 클래스 추가 (시각적 피드백)
    selectedButton.classList.add('selected');

    // 선택된 옵션 점수를 즉시 총점에 더합니다.
    totalScore += score;

    // 짧은 지연 후 다음 질문으로 넘어가기 (선택 시 시각적 피드백 확인 시간)
    setTimeout(() => {
        currentQuestionIndex++; // 다음 질문 인덱스로 이동

        if (currentQuestionIndex < questions.length) {
            loadQuestion(); // 다음 질문 로드
        } else {
            showResult(); // 모든 질문이 끝나면 결과 표시
        }
    }, 300); // 0.3초 (300ms) 지연. 이 값을 조절하여 속도 조절 가능. 0으로 하면 바로 넘어감.
}

// 진행 바 업데이트 함수
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

// 결과 표시 함수
function showResult() {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    // 점수에 따라 적절한 결과 찾기 (가장 높은 점수 범위부터 낮은 점수 범위 순으로 확인)
    let result = results.find(r => totalScore >= r.minScore);
    if (!result) { // 점수 범위에 맞는 결과가 없을 경우 (혹시 모를 오류 방지)
        result = results[results.length - 1]; // 가장 낮은 점수 결과로 기본 설정
    }

    resultTitle.textContent = result.title;
    resultImage.src = result.image;
    resultImage.alt = result.title;
    resultDescription.textContent = result.description;

    traitList.innerHTML = '';
    result.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitList.appendChild(li);
    });

    adviceText.textContent = result.advice;
}