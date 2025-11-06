import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, BookOpen, BarChart3, Lightbulb, Users, Building2 } from "lucide-react";
import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold text-slate-900">日大 学生自治復活</h1>
          <div className="hidden md:flex gap-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">ホーム</Link>
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">問題の経緯</Link>
            <Link href="/business-division" className="text-slate-700 hover:text-slate-900 font-medium">事業部の実態</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">現状の課題</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務情報</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">ロードマップ</Link>
          </div>
          <div className="md:hidden flex gap-3 text-xs">
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">経緯</Link>
            <Link href="/business-division" className="text-slate-700 hover:text-slate-900 font-medium">事業部</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">課題</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">行動</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">日大の「自治」を取り戻そう</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">学生が主体的に大学運営に関わることの重要性</p>
          <p className="text-base md:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
            大学は、学生の学習と成長の場です。しかし、その大学がどのように運営されているか、学生の声が本当に反映されているか、考えたことはありますか？
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-16 w-full">
        {/* Introduction Section */}
        <section className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">日本大学で何が起きたのか</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                日本大学では、かつて学生自治が機能していました。しかし、現在、その自治は形骸化しています。同時に、大学の運営上の問題が明らかになり、学生の信頼が揺らいでいます。
              </p>
              <p>
                本サイトの分析は、2022年3月31日に公表された「元理事及び前理事長による不正事案に係る第三者委員会調査報告書」を一次資料として構成されています。第三者委員会が明らかにした事実と提言を、学生目線で読み解きました。
              </p>
            </div>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">報告書が語る危機</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">事業部を通じた不透明な取引</p>
                  <p>株式会社日本大学事業部がガバナンスの死角となり、巨額資金が流出しました。</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">監査機能の麻痺</p>
                  <p>理事長直下に置かれた監査ラインが不正を見逃し、学生・教職員の声も届きませんでした。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Sections Grid */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">このサイトで学べること</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: History */}
            <Link href="/history">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        問題の経緯
                      </CardTitle>
                      <CardDescription>不正事案の背景と関係者</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    元理事長・元理事による不正事案の具体的な内容、関係者、調査報告書の概要を学生向けにわかりやすく説明します。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく見る <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card 2: Business Division */}
            <Link href="/business-division">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-red-600" />
                        事業部の実態
                      </CardTitle>
                      <CardDescription>ブラックボックス化した子会社の実像</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    取締役会の形骸化、監査が届かなかった理由、刑事事件では触れられない迂回スキームを第三者委員会報告書から読み解きます。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく見る <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card 3: Current Issues */}
            <Link href="/issues">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                        現状の課題
                      </CardTitle>
                      <CardDescription>監査と事業部統治の致命的な欠陥</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    第三者委員会が指摘した監査ラインの麻痺、事業部のブラックボックス化、内部通報の断絶、学生不在の意思決定を詳しく読み解きます。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく見る <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card 4: Finance */}
            <Link href="/finance">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-green-600" />
                        財務情報
                      </CardTitle>
                      <CardDescription>学費の流れを可視化</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    サンキー図を使って、日大がどのようにお金を集め、何に使っているかを視覚化します。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく見る <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card 5: Roadmap */}
            <Link href="/roadmap">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        ロードマップ
                      </CardTitle>
                      <CardDescription>学生自治復活へのアクション</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="mb-4">
                    学生自治を復活させるための具体的なアクション案と、学生が取るべき行動を提案します。
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    詳しく見る <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-100 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">学生自治の復活は、皆さんの行動から始まります</h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            皆さんの大学です。皆さんの学費です。皆さんの学生生活です。
            大学運営に関わるのは、大学当局だけではありません。学生が主体的に関わることで、より良い大学、より良い学生生活を実現することができます。
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            学生自治会設立に参加する
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
          <p className="mt-2">このサイトは、学生による学生のための情報提供サイトです。</p>
        </div>
      </footer>
    </div>
  );
}
