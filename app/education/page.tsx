'use client';

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import LoadMore from '@/components/LoadMore';
import { mockEducationPrograms } from '@/lib/mockData';
import { EducationProgram } from '@/lib/types';
import styles from './page.module.css';

const ITEMS_PER_PAGE = 6;

export default function EducationPage() {
    const [filter, setFilter] = useState<'all' | 'short-term' | 'long-term' | 'government-funded' | 'general'>('all');
    const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
    const [loading, setLoading] = useState(false);

    const filteredPrograms = filter === 'all'
        ? mockEducationPrograms
        : mockEducationPrograms.filter((program) => program.type === filter);

    const displayedPrograms = filteredPrograms.slice(0, displayCount);
    const hasMore = displayCount < filteredPrograms.length;

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
                    <div>
                        <h1 className={styles.title}>
                            <span className={styles.icon}>🎓</span>
                            AI 교육프로그램
                        </h1>
                        <p className={styles.subtitle}>
                            국비지원부터 전문가 과정까지 다양한 AI 교육 프로그램
                        </p>
                    </div>

                    <div className={styles.filters}>
                        <button
                            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                            onClick={() => {
                                setFilter('all');
                                setDisplayCount(ITEMS_PER_PAGE);
                            }}
                        >
                            전체
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'government-funded' ? styles.active : ''}`}
                            onClick={() => {
                                setFilter('government-funded');
                                setDisplayCount(ITEMS_PER_PAGE);
                            }}
                        >
                            국비지원
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'short-term' ? styles.active : ''}`}
                            onClick={() => {
                                setFilter('short-term');
                                setDisplayCount(ITEMS_PER_PAGE);
                            }}
                        >
                            단기
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'long-term' ? styles.active : ''}`}
                            onClick={() => {
                                setFilter('long-term');
                                setDisplayCount(ITEMS_PER_PAGE);
                            }}
                        >
                            장기
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3">
                    {displayedPrograms.map((program, index) => (
                        <div key={program.id} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                            <CourseCard course={program} />
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
