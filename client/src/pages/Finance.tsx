import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function Finance() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">日大 学生自治復活</h1>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">ホーム</Link>
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">問題の経緯</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">現状の課題</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務情報</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">ロードマップ</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">日大のお金の流れを見える化する</h1>
        <p className="text-lg text-slate-700 mb-12">令和5年度（2023年度）資金収支計算書から見える、日大の財務構造</p>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>サンキー図について</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                下のサンキー図は、日本大学がどのようにお金を集め、何に使っているかを視覚化したものです。左側が「収入」、右側が「支出」を表しています。
              </p>
              <p>
                流れの太さは金額の大きさを表しており、太い流れほど大きな金額が流れていることを示しています。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe 
              src="/nihon-u-student-autonomy/sankey_diagram.html" 
              style={{width: '100%', height: '800px', border: 'none'}}
              onLoad={() => setIframeLoaded(true)}
            ></iframe>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>主要な収入源</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <div>
                <p className="font-semibold">学生生徒等納付金（学費）</p>
                <p className="text-sm">約1,128億6000万円</p>
              </div>
              <div>
                <p className="font-semibold">病院収入</p>
                <p className="text-sm">約307億8800万円</p>
              </div>
              <div>
                <p className="font-semibold">補助金収入</p>
                <p className="text-sm">約120億2200万円</p>
              </div>
              <div>
                <p className="font-semibold">その他（寄付金、手数料など）</p>
                <p className="text-sm">約100億円</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>主要な支出項目</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <div>
                <p className="font-semibold">人件費（給与・福利厚生）</p>
                <p className="text-sm">約934億7000万円</p>
              </div>
              <div>
                <p className="font-semibold">教育研究経費</p>
                <p className="text-sm">約693億2200万円</p>
              </div>
              <div>
                <p className="font-semibold">管理経費</p>
                <p className="text-sm">約190億7000万円</p>
              </div>
              <div>
                <p className="font-semibold">病院経費</p>
                <p className="text-sm">約181億4100万円</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">サンキー図から見える重要なポイント</h3>
          <div className="space-y-4 text-slate-700">
            <p>
              <span className="font-semibold">1. 学費の大部分は人件費に充てられている</span> - これは、教育を提供するための教職員の給与に充てられています。
            </p>
            <p>
              <span className="font-semibold">2. 教育研究経費が相応の規模</span> - 教育の質を維持するための経費です。
            </p>
            <p>
              <span className="font-semibold">3. 管理経費の規模</span> - 大学の運営に必要な経費ですが、ここに不正事案に関連する費用が含まれていた可能性があります。
            </p>
          </div>
        </section>

        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">学生への問いかけ</h3>
          <div className="space-y-3 text-slate-700">
            <p>このサンキー図を見て、皆さんは何を感じますか？</p>
            <ul className="list-disc list-inside space-y-2">
              <li>学費がどのように使われているか、理解できましたか？</li>
              <li>管理経費が適切に使われているか、確認する仕組みはありますか？</li>
              <li>学生が、この財務情報に基づいて、大学運営に意見を言う機会はありますか？</li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">次のステップ</h3>
          <p className="text-slate-700 mb-6">
            学生自治を復活させるための具体的なアクションについて知りたいですか？
          </p>
          <Link href="/roadmap" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            ロードマップを見る
          </Link>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
        </div>
      </footer>
    </div>
  );
}
