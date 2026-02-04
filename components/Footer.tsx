import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>
                        <span className={styles.footerIcon}>🤖</span>
                        briefly-ai
                    </h3>
                    <p className={styles.footerDesc}>
                        AI 시대의 필수 정보를 한 눈에
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerSubtitle}>빠른 링크</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="/news">AI 새소식</a></li>
                        <li><a href="/tips">AI 활용법</a></li>
                        <li><a href="/education">AI 교육프로그램</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerSubtitle}>소셜 미디어</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="#" target="_blank">GitHub</a></li>
                        <li><a href="#" target="_blank">Twitter</a></li>
                        <li><a href="#" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerSubtitle}>문의하기</h4>
                    <p className={styles.footerContact}>contact@briefly-ai.com</p>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2026 briefly-ai. All rights reserved.</p>
            </div>
        </footer>
    );
}
