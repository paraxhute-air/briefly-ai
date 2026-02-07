import { NewsArticle, VideoTip, EducationProgram } from './types';

/* ------------------------------------------------------------------
 * Seed (원본 데이터)
 * ------------------------------------------------------------------ */

// AI 뉴스 Seed
const BASE_NEWS: NewsArticle[] = [
    {
        id: 'news-1',
        title: 'OpenAI, GPT-5 개발 공식 발표... 2026년 출시 예정',
        summary: 'OpenAI가 차세대 AI 모델인 GPT-5의 개발을 공식적으로 발표했습니다. 이전 버전보다 10배 향상된 성능을 보여줄 것으로 기대됩니다.',
        source: '테크크런치',
        date: '2026-02-03',
        category: 'international',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        aiSummary: 'OpenAI의 GPT-5는 멀티모달 기능 강화, 추론 능력 향상, 더 긴 컨텍스트 윈도우를 특징으로 합니다.',
    },
    {
        id: 'news-2',
        title: '네이버, 초거대 AI \'하이퍼클로바X 2.0\' 공개',
        summary: '네이버가 한국어 최적화 AI 모델 하이퍼클로바X의 2세대 버전을 발표했습니다. 한국어 이해도가 크게 향상되었습니다.',
        source: '조선일보',
        date: '2026-02-02',
        category: 'domestic',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
        aiSummary: '하이퍼클로바X 2.0은 한국어 특화 기능과 비즈니스 활용도를 크게 강화했습니다.',
    },
    {
        id: 'news-3',
        title: 'Google DeepMind, 단백질 구조 예측 AI 새 버전 발표',
        summary: 'AlphaFold 3가 공개되며 의료 및 과학 연구에 혁신을 가져올 것으로 예상됩니다.',
        source: 'Nature',
        date: '2026-02-01',
        category: 'international',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
        aiSummary: 'AlphaFold 3는 단백질-단백질 상호작용 예측 정확도를 95%까지 향상시켰습니다.',
    },
    {
        id: 'news-4',
        title: '삼성전자, AI 반도체 개발에 10조원 투자',
        summary: '삼성전자가 차세대 AI 반도체 개발을 위해 대규모 투자를 결정했습니다.',
        source: '한국경제',
        date: '2026-01-31',
        category: 'domestic',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800',
        aiSummary: '삼성전자의 10조원 투자는 AGI 칩 개발을 가속화하고 메모리 반도체 리더십을 공고히 할 것입니다.',
    },
    {
        id: 'news-5',
        title: 'Meta, AI 기반 실시간 번역 서비스 출시',
        summary: 'Meta가 100개 이상의 언어를 실시간으로 번역하는 AI 서비스를 발표했습니다.',
        source: 'TechCrunch',
        date: '2026-01-30',
        category: 'international',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
        aiSummary: 'Meta의 새로운 모델인 SeamlessM4T는 음성과 텍스트를 아우르는 통합 번역 기능을 제공합니다.',
    },
    {
        id: 'news-6',
        title: 'LG AI연구원, 자율주행 AI 기술 국제 특허 획득',
        summary: 'LG AI연구원이 개발한 자율주행 AI 기술이 미국과 유럽에서 특허를 획득했습니다.',
        source: '동아일보',
        date: '2026-01-29',
        category: 'domestic',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
        aiSummary: 'LG AI연구원의 엑사원(EXAONE) 기반 자율주행 기술은 악천후 환경에서도 높은 인식률을 자랑합니다.',
    },
    {
        id: 'news-7',
        title: 'Microsoft, AI 코딩 도우미 Copilot 대폭 업그레이드',
        summary: 'GitHub Copilot의 새 버전이 출시되며 코드 작성 정확도가 40% 향상되었습니다.',
        source: 'The Verge',
        date: '2026-01-28',
        category: 'international',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
        aiSummary: 'Copilot 업그레이드는 상황 인식 능력이 강화되어 복잡한 코드 리팩토링도 자동화할 수 있습니다.',
    },
    {
        id: 'news-8',
        title: '카카오, AI 헬스케어 플랫폼 베타 서비스 시작',
        summary: '카카오가 AI를 활용한 맞춤형 건강관리 서비스를 시작했습니다.',
        source: '중앙일보',
        date: '2026-01-27',
        category: 'domestic',
        url: '#',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
        aiSummary: '카카오 헬스케어의 \'파스타\' 앱은 연속혈당측정기(CGM)와 연동되어 실시간 건강 관리를 돕습니다.',
    },
];

// AI 활용법(비디오) Seed
const BASE_VIDEO: VideoTip[] = [
    {
        id: 'video-1',
        title: 'ChatGPT로 생산성 10배 올리는 프롬프트 엔지니어링',
        channel: 'AI 마스터',
        duration: '15:30',
        thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230605071535/Prompt-Engineering---The-AI-Revolution.webp?w=800',
        videoUrl: 'https://youtube.com',
        views: '125K',
        uploadDate: '2026-02-01',
    },
    {
        id: 'video-2',
        title: 'Midjourney V6 완벽 가이드 - 원하는 이미지 만들기',
        channel: 'AI 크리에이터',
        duration: '22:15',
        thumbnailUrl: 'https://static.beebom.com/wp-content/uploads/2023/04/Featured-Midjourney-.jpg?w=750&quality=75?w=800',
        videoUrl: 'https://youtube.com',
        views: '89K',
        uploadDate: '2026-01-30',
    },
    {
        id: 'video-3',
        title: 'AI로 영상 편집 자동화하기 - Runway Gen-2 활용법',
        channel: '비디오 AI',
        duration: '18:45',
        thumbnailUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800',
        videoUrl: 'https://youtube.com',
        views: '67K',
        uploadDate: '2026-01-28',
    },
    {
        id: 'video-4',
        title: 'Claude 3로 논문 요약하고 번역하기',
        channel: 'AI 연구소',
        duration: '12:20',
        thumbnailUrl: 'https://images.unsplash.com/photo-1456324463128-7ff6903988d8?w=800',
        videoUrl: 'https://youtube.com',
        views: '54K',
        uploadDate: '2026-01-27',
    },
    {
        id: 'video-5',
        title: '무료 AI 도구 10가지 - 업무 효율 극대화',
        channel: 'AI 팁스',
        duration: '25:00',
        thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
        videoUrl: 'https://youtube.com',
        views: '210K',
        uploadDate: '2026-01-25',
    },
    {
        id: 'video-6',
        title: 'Notion AI 200% 활용하기 - 스마트 워크 시스템',
        channel: '생산성 플러스',
        duration: '20:10',
        thumbnailUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
        videoUrl: 'https://youtube.com',
        views: '145K',
        uploadDate: '2026-01-24',
    },
];

// AI 교육 프로그램 Seed
const BASE_EDU: EducationProgram[] = [
    {
        id: 'edu-1',
        name: 'AI 프롬프트 엔지니어링 실무 과정',
        type: 'short-term',
        duration: '4주',
        institution: '패스트캠퍼스',
        description: 'ChatGPT, Claude 등 생성형 AI를 실무에 바로 적용할 수 있는 프롬프트 작성 기법을 학습합니다.',
        startDate: '2026-03-01',
        fee: '490,000원',
        link: '#',
    },
    {
        id: 'edu-2',
        name: 'AI 융합 전문가 양성 과정',
        type: 'government-funded',
        duration: '6개월',
        institution: 'K-Digital Training',
        description: '머신러닝, 딥러닝 기초부터 실전 프로젝트까지. 국비 지원으로 무료 수강 가능합니다.',
        startDate: '2026-03-15',
        fee: '무료 (국비지원)',
        link: '#',
    },
    {
        id: 'edu-3',
        name: '생성형 AI 마스터 클래스',
        type: 'long-term',
        duration: '3개월',
        institution: '멋쟁이사자처럼',
        description: 'Midjourney, Stable Diffusion, ChatGPT를 활용한 콘텐츠 제작 전문가 과정입니다.',
        startDate: '2026-02-20',
        fee: '1,200,000원',
        link: '#',
    },
    {
        id: 'edu-4',
        name: 'AI 비즈니스 전략 과정',
        type: 'short-term',
        duration: '2주',
        institution: '서울대 AI연구원',
        description: '경영진을 위한 AI 도입 전략 및 비즈니스 모델 설계 과정입니다.',
        startDate: '2026-03-10',
        fee: '800,000원',
        link: '#',
    },
    {
        id: 'edu-5',
        name: 'AI 개발자 취업 부트캠프',
        type: 'government-funded',
        duration: '5개월',
        institution: '코드스테이츠',
        description: 'Python, TensorFlow, PyTorch를 활용한 AI 모델 개발 및 배포까지 실습합니다.',
        startDate: '2026-03-05',
        fee: '무료 (국비지원)',
        link: '#',
    },
    {
        id: 'edu-6',
        name: 'ChatGPT API 활용 웹 개발',
        type: 'general',
        duration: '6주',
        institution: '인프런',
        description: 'ChatGPT API를 활용하여 AI 기능을 탑재한 웹 서비스를 개발하는 과정입니다.',
        startDate: '2026-02-25',
        fee: '350,000원',
        link: '#',
    },
    {
        id: 'edu-7',
        name: 'AI 데이터 분석 전문가 과정',
        type: 'long-term',
        duration: '4개월',
        institution: '엘리스',
        description: '데이터 수집, 전처리, AI 모델 학습, 시각화까지 전 과정을 다룹니다.',
        startDate: '2026-03-20',
        fee: '1,500,000원',
        link: '#',
    },
    {
        id: 'edu-8',
        name: '실무자가 알려주는 AI 마케팅 VOD',
        type: 'vod',
        duration: '5시간 30분',
        institution: '패스트캠퍼스',
        description: '마케팅 현직자가 알려주는 AI 툴 활용법과 카피라이팅 자동화 노하우.',
        startDate: '상시 수강',
        fee: '120,000원',
        link: '#',
    },
    {
        id: 'edu-9',
        name: 'LangChain으로 나만의 AI 앱 만들기',
        type: 'vod',
        duration: '8시간',
        institution: '인프런',
        description: 'LangChain 프레임워크를 활용하여 RAG 기반의 AI 애플리케이션을 구축합니다.',
        startDate: '상시 수강',
        fee: '88,000원',
        link: '#',
    },
];

/* ------------------------------------------------------------------
 * Utils: 배열을 "총 N개"로 확장 (순환 복제 + id 유니크)
 * ------------------------------------------------------------------ */

function expandToCount<T extends { id: string }>(
    base: T[],
    targetCount: number,
    idPrefix: string
): T[] {
    if (base.length === 0) return [];

    return Array.from({ length: targetCount }, (_, i) => {
        const src = base[i % base.length];

        // ✅ React key, 북마크 등 충돌 방지를 위해 id를 무조건 유니크하게 생성
        const newId = `${idPrefix}-${i + 1}`;

        return {
            ...src,
            id: newId,
        };
    });
}

/* ------------------------------------------------------------------
 * Final Exports: 각각 "총 20개"
 * ------------------------------------------------------------------ */

export const mockNewsArticles: NewsArticle[] = expandToCount(BASE_NEWS, 20, 'news');
export const mockVideoTips: VideoTip[] = expandToCount(BASE_VIDEO, 20, 'video');
export const mockEducationPrograms: EducationProgram[] = expandToCount(BASE_EDU, 20, 'edu');
