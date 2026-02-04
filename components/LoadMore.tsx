'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LoadMore.module.css';

interface LoadMoreProps {
    onLoadMore: () => void;
    hasMore: boolean;
    loading: boolean;
}

export default function LoadMore({ onLoadMore, hasMore, loading }: LoadMoreProps) {
    const [isMobile, setIsMobile] = useState(false);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    // 모바일 감지
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 모바일에서 Intersection Observer로 무한 스크롤
    useEffect(() => {
        if (!isMobile || !hasMore || loading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    onLoadMore();
                }
            },
            { threshold: 0.1 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => observer.disconnect();
    }, [isMobile, hasMore, loading, onLoadMore]);

    if (!hasMore) {
        return (
            <div className={styles.endMessage}>
                <p>모든 콘텐츠를 불러왔습니다 ✨</p>
            </div>
        );
    }

    return (
        <div ref={loadMoreRef} className={styles.loadMoreContainer}>
            {loading ? (
                <div className={styles.spinner} />
            ) : (
                <>
                    {!isMobile && (
                        <button onClick={onLoadMore} className={`btn btn-secondary ${styles.loadMoreBtn}`}>
                            더 보기
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
