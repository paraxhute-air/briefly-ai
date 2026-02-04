// 타입 정의
export interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    source: string;
    date: string;
    category: 'domestic' | 'international';
    url: string;
    imageUrl?: string;
    aiSummary?: string;
}

export interface VideoTip {
    id: string;
    title: string;
    channel: string;
    duration: string;
    thumbnailUrl: string;
    videoUrl: string;
    views: string;
    uploadDate: string;
}

export interface EducationProgram {
    id: string;
    name: string;
    type: 'short-term' | 'long-term' | 'government-funded' | 'general';
    duration: string;
    institution: string;
    description: string;
    startDate: string;
    fee: string;
    link: string;
}

export interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
}

export interface Bookmark {
    id: string;
    type: 'news' | 'video' | 'education';
    itemId: string;
    timestamp: number;
}

export interface NotificationSettings {
    aiNews: boolean;
    aiTips: boolean;
    education: boolean;
    weekly: boolean;
}
