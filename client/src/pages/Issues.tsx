import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, ShieldOff, Building, FileWarning, UsersRound } from "lucide-react";

export default function Issues() {
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

        <h1 className="text-4xl font-bold text-slate-900 mb-4">ガバナンス欠陥の核心</h1>
        <p className="text-lg text-slate-600 mb-8">
          第三者委員会の調査結果をもとに、不正を許した統治構造の問題を整理します。
        </p>

        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg">調査報告書が示した構造的な欠陥</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                報告書は、「監査が届かない」「子会社がブラックボックス」「学生・教職員が関与できない」という3つの断絶が重なった結果、個人の判断で巨額資金が動いたと分析しています。
              </p>
              <p className="font-semibold text-slate-900">
                以下ではそれぞれの断絶を掘り下げ、自治再建に向けた論点を整理します。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1. 監査体制が理事長に縛られていた</h2>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldOff className="w-5 h-5 text-red-600" />
                報告書の指摘
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                法人監査室は2名のみで、事業部への立入権限がなく書面確認に終始。監査役会は理事長室の了承を得ないと動けない慣行があり、理事会へ直接問題提起できませんでした。
              </p>
              <p>
                監査報告書は理事長への提出で止まり、理事会や評議員会には「問題なし」とだけ伝えられていたと記載されています。監査役自身も事業部を一度も視察していませんでした。
              </p>
              <p className="font-semibold text-red-700">
                → 監査が機能するには、理事長から独立した報告ラインと、十分な人員・権限が不可欠です。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2. 株式会社日本大学事業部という「空白地帯」</h2>
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-600" />
                なぜブラックボックス化したのか
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                事業部は大学の100％子会社ですが、取締役会は形式的に年1回のみ。社外取締役・社外監査役はゼロで、議事録や内部規程も井ノ口取締役の管理下にありました。
              </p>
              <p>
                調達・契約の決裁は事業部内で完結し、大学本部は結果の報告だけを受領。報告書は「本部が事業部の口座出納を把握しておらず、資金流出に気づく仕組みがなかった」と断じています。
              </p>
              <p className="font-semibold text-amber-700">
                → 子会社管理のガイドライン、社外役員の導入、理事会と連動する監督プロセスが必須です。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3. 情報統制と内部通報の断絶</h2>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileWarning className="w-5 h-5 text-blue-600" />
                「声を上げられない」環境
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                報告書によれば、内部通報窓口は本部総務部門に一本化され、匿名性が担保されていませんでした。過去に通報した職員が人事で不利益を被った事例が共有され、現場では沈黙が常態化していました。
              </p>
              <p>
                井ノ口氏に逆らうと異動させられるという恐怖が支配し、調達担当者は不正を知りながら抗議できなかったと証言しています。
              </p>
              <p className="font-semibold text-blue-700">
                → 独立した通報窓口と報復禁止の徹底が、学生・教職員が不正を止める第一歩です。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. 学生・教職員が蚊帳の外だった意思決定</h2>
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg flex items-center gap-2">
                <UsersRound className="w-5 h-5 text-purple-600" />
                自治が働かなかった背景
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>
                大学の重要事項は理事会でのみ決定され、学生・教職員の代表が参加する場は設けられていませんでした。報告書は、意思決定過程が閉鎖的であったことが不信を生み、チェック機能の欠如につながったと指摘します。
              </p>
              <p>
                学生自治会が事業部問題を把握したのは報道後であり、事前に情報共有を受ける仕組みもありませんでした。
              </p>
              <p className="font-semibold text-purple-700">
                → 学生・教職員が参加する協議機関を設け、重要案件を事前に議論することが再発防止の要です。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-slate-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">改革に向けて</h3>
          <p className="text-slate-700 mb-6">
            監査ラインの独立、子会社統治の透明化、通報制度の再設計、学生参画の制度化。この4点を実現しない限り、報告書が指摘したリスクは残り続けます。
          </p>
          <Link href="/roadmap" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            改革ロードマップを確認する
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
