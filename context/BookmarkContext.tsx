'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Bookmark } from '@/lib/types';

interface BookmarkContextType {
    bookmarks: Bookmark[];
    addBookmark: (type: 'news' | 'video' | 'education', itemId: string) => void;
    removeBookmark: (type: 'news' | 'video' | 'education', itemId: string) => void;
    isBookmarked: (type: 'news' | 'video' | 'education', itemId: string) => boolean;
    getBookmarksByType: (type: 'news' | 'video' | 'education') => Bookmark[];
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: ReactNode }) {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // localStorage에서 북마크 로드
    useEffect(() => {
        const savedBookmarks = localStorage.getItem('briefly-ai-bookmarks');
        if (savedBookmarks) {
            setBookmarks(JSON.parse(savedBookmarks));
        }
        setIsLoaded(true);
    }, []);

    // 북마크 변경 시 localStorage에 저장
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('briefly-ai-bookmarks', JSON.stringify(bookmarks));
        }
    }, [bookmarks, isLoaded]);

    const addBookmark = (type: 'news' | 'video' | 'education', itemId: string) => {
        const newBookmark: Bookmark = {
            id: `${type}-${itemId}-${Date.now()}`,
            type,
            itemId,
            timestamp: Date.now(),
        };
        setBookmarks((prev) => [...prev, newBookmark]);
    };

    const removeBookmark = (type: 'news' | 'video' | 'education', itemId: string) => {
        setBookmarks((prev) => prev.filter((b) => !(b.type === type && b.itemId === itemId)));
    };

    const isBookmarked = (type: 'news' | 'video' | 'education', itemId: string): boolean => {
        return bookmarks.some((b) => b.type === type && b.itemId === itemId);
    };

    const getBookmarksByType = (type: 'news' | 'video' | 'education'): Bookmark[] => {
        return bookmarks.filter((b) => b.type === type);
    };

    return (
        <BookmarkContext.Provider
            value={{
                bookmarks,
                addBookmark,
                removeBookmark,
                isBookmarked,
                getBookmarksByType,
            }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}

export function useBookmark() {
    const context = useContext(BookmarkContext);
    if (context === undefined) {
        throw new Error('useBookmark must be used within a BookmarkProvider');
    }
    return context;
}
