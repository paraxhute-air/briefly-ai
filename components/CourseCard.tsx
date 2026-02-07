'use client';

import { EducationProgram } from '@/lib/types';
import { useBookmark } from '@/context/BookmarkContext';
import styles from './CourseCard.module.css';

interface CourseCardProps {
    course: EducationProgram;
}

const typeLabels: Record<string, string> = {
    'short-term': '단기',
    'long-term': '장기',
    'government-funded': '국비지원',
    'general': '일반',
    'vod': 'VOD',
};

const typeColors: Record<string, string> = {
    'short-term': '#06b6d4',
    'long-term': '#8b5cf6',
    'government-funded': '#10b981',
    'general': '#f59e0b',
    'vod': '#ef4444', // Red-500 for VOD
};

export default function CourseCard({ course }: CourseCardProps) {
    const { isBookmarked, addBookmark, removeBookmark } = useBookmark();
    const bookmarked = isBookmarked('education', course.id);

    const toggleBookmark = () => {
        if (bookmarked) {
            removeBookmark('education', course.id);
        } else {
            addBookmark('education', course.id);
        }
    };

    return (
        <article className={`glass-card ${styles.card}`}>
            {/* 상단 뱃지와 북마크 */}
            <span
                className={styles.typeBadge}
                style={{ background: typeColors[course.type] }}
            >
                {typeLabels[course.type]}
            </span>

            <button
                onClick={toggleBookmark}
                className={`${styles.bookmarkBtn} ${bookmarked ? styles.bookmarked : ''}`}
                aria-label="북마크"
            >
                {bookmarked ? '⭐' : '☆'}
            </button>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{course.name}</h3>
                </div>

                <p className={styles.description}>{course.description}</p>

                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>🏫</span>
                        <span className={styles.detailText}>{course.institution}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>⏱️</span>
                        <span className={styles.detailText}>{course.duration}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>📅</span>
                        <span className={styles.detailText}>시작: {course.startDate}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>💰</span>
                        <span className={styles.detailText}>{course.fee}</span>
                    </div>
                </div>

                <a href={course.link} className={styles.linkBtn}>
                    자세히 보기 →
                </a>
            </div>
        </article>
    );
}
