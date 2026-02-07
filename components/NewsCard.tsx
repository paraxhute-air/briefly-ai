'use client';

import { NewsArticle } from '@/lib/types';
import { useBookmark } from '@/context/BookmarkContext';
import styles from './NewsCard.module.css';
import { useState } from 'react';
import Link from 'next/link';

interface NewsCardProps {
    article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
    const { isBookmarked, addBookmark, removeBookmark } = useBookmark();
    const bookmarked = isBookmarked('news', article.id);
    const [showFullSummary, setShowFullSummary] = useState(false);

    const toggleBookmark = () => {
        if (bookmarked) {
            removeBookmark('news', article.id);
        } else {
            addBookmark('news', article.id);
        }
    };

    return (
        <article className={`glass-card ${styles.card}`}>
            {article.imageUrl && (
                <div className={styles.imageWrapper}>
                    <img src={article.imageUrl} alt={article.title} className={styles.image} />
                    <span className={`badge badge-primary ${styles.categoryBadge}`}>
                        {article.category === 'domestic' ? '국내' : '해외'}
                    </span>
                </div>
            )}

            <button
                onClick={toggleBookmark}
                className={`${styles.bookmarkBtn} ${bookmarked ? styles.bookmarked : ''}`}
                aria-label="북마크"
            >
                {bookmarked ? '⭐' : '☆'}
            </button>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{article.title}</h3>
                </div>



                {article.aiSummary && (
                    <div className={styles.aiSummary}>
                        <div className={styles.aiLabel}>
                            <span className={styles.aiIcon}>🤖</span>
                            AI 요약
                        </div>
                        <p className={styles.aiText}>
                            {showFullSummary || article.aiSummary.length < 100
                                ? article.aiSummary
                                : `${article.aiSummary.substring(0, 100)}...`}
                        </p>
                        {article.aiSummary.length > 100 && (
                            <button
                                onClick={() => setShowFullSummary(!showFullSummary)}
                                className={styles.toggleBtn}
                            >
                                {showFullSummary ? '접기' : '더보기'}
                            </button>
                        )}
                    </div>
                )}

                <div className={styles.footer}>
                    <div className={styles.metaInfo}>
                        <span className={styles.source}>{article.source}</span>
                        <span className={styles.divider}>•</span>
                        <span className={styles.date}>{article.date}</span>
                    </div>
                    <Link href={`/article/${article.id}`} className={styles.linkBtn}>
                        기사 원문 보기 🔗
                    </Link>
                </div>
            </div>
        </article>
    );
}
