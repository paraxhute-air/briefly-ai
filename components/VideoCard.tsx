'use client';

import { VideoTip } from '@/lib/types';
import { useBookmark } from '@/context/BookmarkContext';
import styles from './VideoCard.module.css';

interface VideoCardProps {
    video: VideoTip;
}

export default function VideoCard({ video }: VideoCardProps) {
    const { isBookmarked, addBookmark, removeBookmark } = useBookmark();
    const bookmarked = isBookmarked('video', video.id);

    const toggleBookmark = () => {
        if (bookmarked) {
            removeBookmark('video', video.id);
        } else {
            addBookmark('video', video.id);
        }
    };

    return (
        <article className={`glass-card ${styles.card}`}>
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className={styles.thumbnailWrapper}>
                <img src={video.thumbnailUrl} alt={video.title} className={styles.thumbnail} />
                <div className={styles.playOverlay}>
                    <div className={styles.playButton}>▶</div>
                </div>
                <span className={styles.duration}>{video.duration}</span>
            </a>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{video.title}</h3>
                    <button
                        onClick={toggleBookmark}
                        className={`${styles.bookmarkBtn} ${bookmarked ? styles.bookmarked : ''}`}
                        aria-label="북마크"
                    >
                        {bookmarked ? '⭐' : '☆'}
                    </button>
                </div>

                <div className={styles.meta}>
                    <span className={styles.channel}>📺 {video.channel}</span>
                    <div className={styles.stats}>
                        <span>👁️ {video.views}</span>
                        <span>📅 {video.uploadDate}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
