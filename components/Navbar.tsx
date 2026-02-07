'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: 'AI 뉴스', path: '/news', icon: '📰' },
        { label: 'AI 꿀팁', path: '/tips', icon: '💡' },
        { label: 'AI 교육', path: '/education', icon: '🎓' },
        { label: '마이페이지', path: '/mypage', icon: '👤' },
    ];

    return (
        <>
            {/* 데스크톱 네비게이션 */}
            <nav className={`${styles.navbar} hidden-mobile`}>
                <div className={styles.navContainer}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>🤖</span>
                        <span className={styles.logoText}>briefly-ai</span>
                    </Link>

                    <ul className={styles.navMenu}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`${styles.navLink} ${pathname === item.path ? styles.active : ''}`}
                                >
                                    <span className={styles.navIcon}>{item.icon}</span>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden-mobile" style={{ marginLeft: '1rem' }}>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            {/* 모바일 상단 헤더 */}
            <header className={styles.mobileHeader}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🤖</span>
                    <span className={styles.logoText}>briefly-ai</span>
                </Link>
                <ThemeToggle />
            </header>

            {/* 모바일 하단 네비게이션 */}
            <nav className={styles.mobileNav}>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`${styles.mobileNavLink} ${pathname === item.path ? styles.mobileActive : ''}`}
                    >
                        <span className={styles.mobileNavIcon}>{item.icon}</span>
                        <span className={styles.mobileNavLabel}>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
}
