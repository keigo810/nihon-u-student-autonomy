import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ChevronLeft,
  Building2,
  Spline,
  ShieldAlert,
  Gavel,
  FileText,
  Network,
} from "lucide-react";

export default function BusinessDivision() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">日大 学生自治復活</h1>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">
              ホーム
            </Link>
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">
              問題の経緯
            </Link>
            <Link href="/business-division" className="text-slate-700 hover:text-slate-900 font-medium">
              事業部の実態
            </Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">
              現状の課題
            </Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">
              財務情報
            </Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">
              ロードマップ
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">株式会社日本大学事業部とは</h1>
        <p className="text-lg text-slate-600 mb-6">
          第三者委員会調査報告書が描いた「ガバナンスの死角」を掘り下げ、監査体制と不正の実態を整理します。
        </p>

        <section className="mb-12">
          <Card className="bg-slate-900 text-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <FileText className="w-5 h-5" />
                このページのソース
              </CardTitle>
              <CardDescription className="text-slate-200">
                日本大学「元理事及び前理事長による不正事案に係る第三者委員会調査報告書」（2022年3月31日）を一次資料として構成しています。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base">
              <p>
                報告書第2章・第3章は事業部を通じた迂回取引と資金流出、第4章は監査・内部統制の欠陥、第5章・第6章は再発防止策を提示しています。
              </p>
              <p>
                本ページでは、とくに「株式会社日本大学事業部」の組織運営と監査体制の問題点を抽出し、学生にも分かる形で再構成しました。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">1. 事業部はどういう組織だったのか</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                学校法人の100％子会社という立場
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                事業部は学内の購買や施設整備を担う目的で設立され、大学本部の資金で運営されていました。しかし、理事会から独立した意思決定を行い、取締役会も井ノ口忠男取締役と数名の幹部のみで構成されていました。
              </p>
              <p>
                議事録は作成されず、理事会・評議員会へ正式に報告されるのは年1回の決算資料のみ。大学本部は取引先の選定や契約金額に関する情報をほとんど得られませんでした。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-600" />
                井ノ口氏と藪本氏で固められた決裁ライン
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                報告書は、井ノ口氏が取締役会を開かずに決裁を進め、藪本雅巳氏の企業群を特定案件の専属取引先に据えていたと指摘します。電子メールや覚書の写しから、競合見積を事前に渡し、書き換え指示を出していたことが明らかになりました。
              </p>
              <p>
                取引条件の変更や追加費用の請求も、大学本部に知らせず事業部内で完結。これにより、正規の入札・見積手続が存在しないまま、高額な契約が連続して締結されました。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">2. 監査体制はなぜ機能しなかったのか</h2>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                法人監査室と監査役会の限界
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                法人監査室は2名体制で、事業部の帳簿閲覧すら井ノ口氏の承認が必要でした。報告書は、監査役会が事業部を一度も実地確認せず、理事長室の事前調整を経て形式的な意見具申しかできなかったと記録しています。
              </p>
              <p className="font-semibold text-red-700">
                → 監査報告は理事長止まりで、理事会にも学生にも届かない構造が放置されていました。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Spline className="w-5 h-5 text-amber-600" />
                内部統制の「抜け道」が放置された経緯
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                事業部の契約は、大学本部の稟議フローや学内規程の適用外とされていました。報告書は、取引額が億単位でも「事業部の判断」として処理され、監査役が細部にアクセスできなかった事実を列挙しています。
              </p>
              <p>
                内部通報制度も事業部では周知されず、現場職員が不自然さを感じても相談先がない状態でした。これが不正の早期発見を妨げたと分析されています。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">3. 報告書が暴いた不正の実像</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-purple-600" />
                刑事事件では語られなかった迂回スキーム
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                板橋病院建替えでは、管理費名目で2,200万円超を藪本氏側へ流した経緯を詳細に記載。医療機器・電子カルテ調達では、不要な中間業者を挟むことで約2億円超の価格水増しが生じたと認定しています。
              </p>
              <p>
                報告書は、受注調整のメールや追加請求書の作成指示など、刑事裁判で明らかになっていなかった証拠を整理し、「事業部がブラックボックス化した結果、大学資金が外部に流出した」と結論づけました。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. 委員会が求めた再発防止策</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <CardTitle className="text-lg">事業部統治の再構築</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2 text-sm md:text-base">
                <p>• 事業部の取締役会に社外取締役・社外監査役を配置し、大学本部が議事録と決裁を常時確認する。</p>
                <p>• 契約・入札手続を学校法人の規程に組み込み、事業部独自の例外運用を廃止する。</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-emerald-600">
              <CardHeader>
                <CardTitle className="text-lg">監査ラインの独立</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2 text-sm md:text-base">
                <p>• 法人監査室の人員増と、理事長を経由しない監査役会 → 理事会への報告ルートを構築。</p>
                <p>• 事業部に対する定期的な実地監査と内部通報制度の整備、学生・教職員を含む監視機能の導入。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">学生目線での問いかけ</h3>
          <p className="text-slate-700 mb-6">
            「大学の子会社が何をしているのか」を知る術が学生にはありませんでした。報告書が示した情報公開と監査改革は、学生自治が再び機能するための前提条件です。
          </p>
          <Link
            href="/issues"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            ガバナンスの課題へ進む
          </Link>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
          <p className="mt-2">第三者委員会報告書をもとに学生有志がまとめています。</p>
        </div>
      </footer>
    </div>
  );
}
