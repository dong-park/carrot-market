import type { NextPage } from "next";
import Layout from "../../components/layout";

const Live: NextPage = () => {
    return (
        <Layout title="라이브" hasTabBar>
            {([1, 2, 3, 4, 5, 6].map((_, i) => (
                <div key={i} className="py-4 px-2 space-y-2 border-b-2 last:border-b-0">
                    <div className="w-full aspect-video bg-slate-300" />
                    <div>
                        Let's try potatos
                    </div>
                </div>
            )))}
            <button className="fixed bottom-16 right-5 bg-orange-400 rounded-full text-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </button>
        </Layout>
    );
}

export default Live;