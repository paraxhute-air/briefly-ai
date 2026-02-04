'use client';

import { useState, useEffect } from 'react';
import { useBookmark } from '@/context/BookmarkContext';
import NewsCard from '@/components/NewsCard';
import VideoCard from '@/components/VideoCard';
import CourseCard from '@/components/CourseCard';
import { mockNewsArticles, mockVideoTips, mockEducationPrograms } from '@/lib/mockData';
import { UserProfile, NotificationSettings } from '@/lib/types';
import styles from './page.module.css';

export default function MyPage() {
    const { bookmarks, getBookmarksByType } = useBookmark();
    const [activeTab, setActiveTab] = useState<'news' | 'video' | 'education'>('news');
    const [profile, setProfile] = useState<UserProfile>({
        name: 'AI 탐험가',
        email: 'user@briefly-ai.com',
    });
    const [notifications, setNotifications] = useState<NotificationSettings>({
        aiNews: true,
        aiTips: true,
        education: true,
        weekly: false,
    });
    const [isEditingProfile, setIsEditingProfile] = useState(false);

    const newsBookmarks = getBookmarksByType('news');
    const videoBookmarks = getBookmarksByType('video');
    const educationBookmarks = getBookmarksByType('education');

    const bookmarkedNews = mockNewsArticles.filter((article) =>
        newsBookmarks.some((b) => b.itemId === article.id)
    );
    const bookmarkedVideos = mockVideoTips.filter((video) =>
        videoBookmarks.some((b) => b.itemId === video.id)
    );
    const bookmarkedCourses = mockEducationPrograms.filter((course) =>
        educationBookmarks.some((b) => b.itemId === course.id)
    );

    const handleProfileSave = () => {
        setIsEditingProfile(false);
        // 실제로는 여기서 백엔드에 저장
    };

    const toggleNotification = (key: keyof NotificationSettings) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="page-content">
            <div className="container">
                <h1 className={styles.pageTitle}>
                    <span className={styles.icon}>👤</span>
                    마이페이지
                </h1>

                <div className={styles.sections}>
                    {/* 프로필 섹션 */}
                    <section className={`glass-card ${styles.section}`}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>프로필</h2>
                            <button
                                onClick={() => isEditingProfile ? handleProfileSave() : setIsEditingProfile(true)}
                                className={`btn btn-secondary ${styles.editBtn}`}
                            >
                                {isEditingProfile ? '저장' : '수정'}
                            </button>
                        </div>

                        <div className={styles.profileContent}>
                            <div className={styles.avatar}>
                                {profile.name.charAt(0).toUpperCase()}
                            </div>

                            <div className={styles.profileInfo}>
                                {isEditingProfile ? (
                                    <>
                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                            className={styles.input}
                                            placeholder="이름"
                                        />
                                        <input
                                            type="email"
                                            value={profile.email}
                                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                            className={styles.input}
                                            placeholder="이메일"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <h3 className={styles.profileName}>{profile.name}</h3>
                                        <p className={styles.profileEmail}>{profile.email}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* 알림 설정 섹션 */}
                    <section className={`glass-card ${styles.section}`}>
                        <h2 className={styles.sectionTitle}>알림 설정</h2>

                        <div className={styles.notificationList}>
                            <div className={styles.notificationItem}>
                                <div>
                                    <div className={styles.notificationLabel}>AI 뉴스 알림</div>
                                    <div className={styles.notificationDesc}>새로운 AI 뉴스가 등록되면 알림을 받습니다</div>
                                </div>
                                <label className={styles.toggle}>
                                    <input
                                        type="checkbox"
                                        checked={notifications.aiNews}
                                        onChange={() => toggleNotification('aiNews')}
                                    />
                                    <span className={styles.toggleSlider}></span>
                                </label>
                            </div>

                            <div className={styles.notificationItem}>
                                <div>
                                    <div className={styles.notificationLabel}>AI 활용 팁 알림</div>
                                    <div className={styles.notificationDesc}>새로운 활용법 영상이 추가되면 알림을 받습니다</div>
                                </div>
                                <label className={styles.toggle}>
                                    <input
                                        type="checkbox"
                                        checked={notifications.aiTips}
                                        onChange={() => toggleNotification('aiTips')}
                                    />
                                    <span className={styles.toggleSlider}></span>
                                </label>
                            </div>

                            <div className={styles.notificationItem}>
                                <div>
                                    <div className={styles.notificationLabel}>교육 프로그램 알림</div>
                                    <div className={styles.notificationDesc}>새로운 교육 과정이 등록되면 알림을 받습니다</div>
                                </div>
                                <label className={styles.toggle}>
                                    <input
                                        type="checkbox"
                                        checked={notifications.education}
                                        onChange={() => toggleNotification('education')}
                                    />
                                    <span className={styles.toggleSlider}></span>
                                </label>
                            </div>

                            <div className={styles.notificationItem}>
                                <div>
                                    <div className={styles.notificationLabel}>주간 요약 알림</div>
                                    <div className={styles.notificationDesc}>매주 AI 소식 요약을 받습니다</div>
                                </div>
                                <label className={styles.toggle}>
                                    <input
                                        type="checkbox"
                                        checked={notifications.weekly}
                                        onChange={() => toggleNotification('weekly')}
                                    />
                                    <span className={styles.toggleSlider}></span>
                                </label>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 북마크 섹션 */}
                <section className={styles.bookmarkSection}>
                    <h2 className={styles.sectionTitle}>찜한 콘텐츠</h2>

                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'news' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('news')}
                        >
                            뉴스 ({newsBookmarks.length})
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'video' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('video')}
                        >
                            활용법 ({videoBookmarks.length})
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'education' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('education')}
                        >
                            교육 ({educationBookmarks.length})
                        </button>
                    </div>

                    <div className={styles.bookmarkContent}>
                        {activeTab === 'news' && (
                            <div className="grid grid-cols-3">
                                {bookmarkedNews.length > 0 ? (
                                    bookmarkedNews.map((article) => (
                                        <NewsCard key={article.id} article={article} />
                                    ))
                                ) : (
                                    <p className={styles.emptyMessage}>찜한 뉴스가 없습니다</p>
                                )}
                            </div>
                        )}

                        {activeTab === 'video' && (
                            <div className="grid grid-cols-3">
                                {bookmarkedVideos.length > 0 ? (
                                    bookmarkedVideos.map((video) => (
                                        <VideoCard key={video.id} video={video} />
                                    ))
                                ) : (
                                    <p className={styles.emptyMessage}>찜한 영상이 없습니다</p>
                                )}
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div className="grid grid-cols-3">
                                {bookmarkedCourses.length > 0 ? (
                                    bookmarkedCourses.map((course) => (
                                        <CourseCard key={course.id} course={course} />
                                    ))
                                ) : (
                                    <p className={styles.emptyMessage}>찜한 교육 프로그램이 없습니다</p>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
