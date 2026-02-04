'use client';

import { useState } from 'react';
import VideoCard from '@/components/VideoCard';
import LoadMore from '@/components/LoadMore';
import { mockVideoTips } from '@/lib/mockData';
import styles from './page.module.css';

const ITEMS_PER_PAGE = 6;

export default function TipsPage() {
    const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
    const [loading, setLoading] = useState(false);

    const displayedVideos = mockVideoTips.slice(0, displayCount);
    const hasMore = displayCount < mockVideoTips.length;

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setDisplayCount((prev) => prev + ITEMS_PER_PAGE);
            setLoading(false);
        }, 500);
    };

    return (
        <div className="page-content">
            <div className="container">
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        <span className={styles.icon}>💡</span>
                        AI 활용법
                    </h1>
                    <p className={styles.subtitle}>
                        AI 도구 활용 팁과 실전 가이드를 영상으로 배워보세요
                    </p>
                </div>

                <div className="grid grid-cols-3">
                    {displayedVideos.map((video, index) => (
                        <div key={video.id} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                            <VideoCard video={video} />
                        </div>
                    ))}
                </div>

                <LoadMore
                    onLoadMore={handleLoadMore}
                    hasMore={hasMore}
                    loading={loading}
                />
            </div>
        </div>
    );
}
