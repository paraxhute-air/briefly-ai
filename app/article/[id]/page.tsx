'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ArticlePage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    return (
        <div className="min-h-screen pt-24 px-4 flex flex-col items-center justify-center text-center">
            <div className="glass-card p-12 max-w-2xl w-full">
                <div className="text-6xl mb-6">📰</div>
                <h1 className="text-3xl font-bold mb-4 gradient-text">기사 원문 페이지</h1>
                <p className="text-text-secondary mb-8 text-lg">
                    이 페이지는 임시 페이지입니다.<br />
                    기사 ID: <span className="text-primary font-mono bg-primary/10 px-2 py-1 rounded">{id}</span>
                </p>
                <p className="text-text-muted mb-8">
                    실제 서비스에서는 해당 언론사의 원문 페이지로 연결되거나<br />
                    전체 기사 내용을 불러와서 보여주게 됩니다.
                </p>
                <button
                    onClick={() => router.back()}
                    className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                    뒤로 가기
                </button>
            </div>
        </div>
    );
}
