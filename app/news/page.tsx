'use client';

import { useState } from 'react';
import NewsCard from '@/components/NewsCard';
import LoadMore from '@/components/LoadMore';
import SearchBar from '@/components/SearchBar';
import { mockNewsArticles } from '@/lib/mockData';
import { NewsArticle } from '@/lib/types';
import styles from './page.module.css';

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
    const [filter, setFilter] = useState<'all' | 'domestic' | 'international'>('all');
    const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = mockNewsArticles.filter((article) => {
        const matchCategory = filter === 'all' || article.category === filter;
        const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.source.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    const displayedArticles = filteredArticles.slice(0, displayCount);
    const hasMore = displayCount < filteredArticles.length;

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
                            <span className={styles.icon}>📰</span>
                            AI 뉴스
                        </h1>
                        <p className={styles.subtitle}>
                            국내외 최신 AI 뉴스와 AI 요약을 확인하세요
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
                            className={`${styles.filterBtn} ${filter === 'domestic' ? styles.active : ''}`}
                            onClick={() => {
                                setFilter('domestic');
                                setDisplayCount(ITEMS_PER_PAGE);
                            }}
                        >
                            국내
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'international' ? styles.active : ''}`}
                            onClick={() => {
                                setFilter('international');
                                setDisplayCount(ITEMS_PER_PAGE);
                            }}
                        >
                            해외
                        </button>
                    </div>
                </div>

                <SearchBar
                    value={searchQuery}
                    onChange={(val) => {
                        setSearchQuery(val);
                        setDisplayCount(ITEMS_PER_PAGE);
                    }}
                    placeholder="뉴스 제목이나 내용을 검색해보세요..."
                />

                <div className="grid grid-cols-3">
                    {displayedArticles.map((article, index) => (
                        <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                            <NewsCard article={article} />
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
