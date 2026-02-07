import Link from 'next/link';
import styles from './page.module.css';
import { mockNewsArticles, mockVideoTips, mockEducationPrograms } from '@/lib/mockData';
import NewsCard from '@/components/NewsCard';
import VideoCard from '@/components/VideoCard';
import CourseCard from '@/components/CourseCard';

export default function Home() {
  const latestNews = mockNewsArticles.slice(0, 5);
  const latestTips = mockVideoTips.slice(0, 5);
  const latestEdu = mockEducationPrograms.slice(0, 5);

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroGradient} />

        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              AI 시대의 필수 정보를
              <br />
              <span className="gradient-text">빠르고 간편하게</span>
            </h1>

            <p className={styles.heroSubtitle}>
              매일 쏟아지는 AI 뉴스, 활용 팁, 교육 프로그램을
              <br />
              편리하게 찾아보세요
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/news" className="btn btn-primary">
                📰 AI 뉴스 보기
              </Link>
              <Link href="/tips" className="btn btn-primary">
                💡 AI 꿀팁 보기
              </Link>
              <Link href="/education" className="btn btn-primary">
                🎓 AI 교육 보기
              </Link>
            </div>

            <div className={styles.features}>
              <div className={`glass-card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>📰</div>
                <h3>실시간 AI 뉴스</h3>
                <p>국내외 최신 AI 소식과 AI 요약을 한번에</p>
              </div>

              <div className={`glass-card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>💡</div>
                <h3>AI 꿀팁</h3>
                <p>ChatGPT, Midjourney 등 AI 도구 활용법</p>
              </div>

              <div className={`glass-card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>🎓</div>
                <h3>교육 프로그램</h3>
                <p>국비지원 과정부터 전문가 과정까지</p>
              </div>

              <div className={`glass-card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>⭐</div>
                <h3>북마크 기능</h3>
                <p>관심 있는 콘텐츠를 저장하고 관리</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={`${styles.section} ${styles.sectionNews}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className="text-2xl">📰</span> AI 뉴스
            </h2>
            <Link href="/news" className={styles.moreBtn}>
              더 보기 &gt;
            </Link>
          </div>
          <div className={styles.sectionContent}>
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTips}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className="text-2xl">💡</span> AI 꿀팁
            </h2>
            <Link href="/tips" className={styles.moreBtn}>
              더 보기 &gt;
            </Link>
          </div>
          <div className={styles.sectionContent}>
            {latestTips.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionEdu}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className="text-2xl">🎓</span> AI 교육
            </h2>
            <Link href="/education" className={styles.moreBtn}>
              더 보기 &gt;
            </Link>
          </div>
          <div className={styles.sectionContent}>
            {latestEdu.map((program) => (
              <CourseCard key={program.id} course={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
