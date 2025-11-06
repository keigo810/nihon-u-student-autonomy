import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, FileText, ShieldAlert, Building2, Search, Layers } from "lucide-react";

export default function History() {
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

        <h1 className="text-4xl font-bold text-slate-900 mb-4">調査報告書から読み解く不正事案</h1>
        <p className="text-lg text-slate-600 mb-6">
          2022年3月31日に公表された日本大学「元理事及び前理事長による不正事案に係る第三者委員会調査報告書」を、学生目線で読み解きます。
        </p>

        <section className="mb-12">
          <Card className="bg-slate-900 text-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <FileText className="w-5 h-5" />
                このページのソース
              </CardTitle>
              <CardDescription className="text-slate-200">
                日本大学「元理事及び前理事長による不正事案に係る第三者委員会調査報告書」（2022年3月31日）に基づくまとめです。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base">
              <p>
                調査委員会（委員長：弁護士・郷原信郎氏）は、大学本部と株式会社日本大学事業部で発生した不正取引の全体像を掘り下げ、刑事事件として公表された事実にとどまらない内情を明らかにしました。
              </p>
              <p>
                報告書は全6章構成。第2章・第3章では個別事件の事実認定、第4章では監査・内部統制の失敗を詳細に検証しています。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">報告書の章立てを追いながら整理する</h2>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                第1章：委員会設置と調査の枠組み
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                2021年10月に理事会決議で第三者委員会が発足。委員は外部弁護士と公認会計士で構成され、大学とは独立した権限で証拠収集を行いました。委員会は事業部と医学部関係者に広くヒアリングを実施し、押収資料や会計データの分析も行っています。
              </p>
              <p>
                調査対象は「板橋病院建替え設計会社選定」「医療機器・電子カルテ調達」「前理事長のリベート収受・脱税」の3件。不正の背景にある組織体制の問題を明らかにすることが調査目的と位置付けられました。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-red-600" />
                第2章：板橋病院建替え設計会社選定の不正
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                プロポーザルで最優秀とされた企業の順位を、事業部取締役・井ノ口忠男氏が恣意的に入れ替えた事実を詳細に認定。競争相手の提案書を渡して書き直しを命じるなど、刑事裁判で争点となった部分以外にも、報告書は審査過程の操作や「管理費」名目での迂回支払を具体的なメール記録と共に示しました。
              </p>
              <p>
                井ノ口氏は「管理費は不要」と学内説明する一方で、藪本雅巳氏が実質支配する企業へ2200万円超を流す指示を出していました。報告書は、このスキームが理事会にも報告されず、株式会社日本大学事業部内で完結していた点を強調しています。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-600" />
                第3章：医療機器・電子カルテ調達での迂回取引
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                医療機器7件と電子カルテ更新の調達で、必要のない中間業者を重ねて価格を水増しした手口を追跡。報告書は、商流の途中に挿入されたニシキ、インテリジェンスなど藪本氏の関係会社の役割と利益額を初めて一覧化し、刑事告発では触れられていなかった受注調整の実態を記録しています。
              </p>
              <p>
                井ノ口氏の私情（2018年アメリカンフットボール部事件への反発）で取引先を変更したことが引き金となり、結果として約2億円超の資金が外部に流出しました。委員会は、こうした意思決定が理事会にも学長にも共有されていなかったと指摘しています。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                第4章：監査・内部統制の機能不全
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                法人監査室は2名体制で事業部の取引を網羅的に監査できず、監査役会も実地訪問を行っていませんでした。報告書は、監査役が理事長室の事前調整を経てからしか意見できない慣行や、内部統制部門が事業部に立入る権限を持たなかった点を列挙しています。
              </p>
              <p>
                株式会社日本大学事業部では、取締役会が年間1回程度しか開催されず、社外取締役・社外監査役は置かれていませんでした。会計帳簿の閲覧も井ノ口氏の許可制で、形式的な監査報告のみが大学本部に提出されていたとされています。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                第5章・第6章：原因分析と提言
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                不正の温床は、理事長への権限集中と、事業部を実質的に管理できない本部組織にあると結論づけています。学生や教職員が参加する統治機構の欠如、情報公開の遅れも構造的課題として挙げられました。
              </p>
              <p>
                委員会は、事業部の抜本的な再編、社外監査役の配置、理事会に対する独立した内部監査ラインの構築、学生・教職員が関与するガバナンス体制の整備を提言しています。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">株式会社日本大学事業部の問題点</h2>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">報告書が明らかにした「ブラックボックス」</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                事業部は大学の100％子会社でありながら、理事会・監査役会の監督から外れた独立王国になっていました。委員会は、役員会が井ノ口氏と数名の幹部のみで運営され、議事録も作成されていなかった事実を確認しています。
              </p>
              <p>
                大学本部は事業部の財務諸表を形式的に受領するだけで、契約決裁や支払状況を確認する仕組みを持っていませんでした。その結果、藪本氏の企業群に支払われた資金の大半が、正式な業務の裏付けを欠いたまま流出したと報告書は断じています。
              </p>
              <p className="font-semibold text-red-700">
                「株式会社日本大学事業部がガバナンスの死角だった」という委員会の指摘は、これまで公には語られてこなかった重大な新情報です。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">報告書で初めて整理されたポイント</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">監査体制の具体的な欠陥</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2 text-sm md:text-base">
                <p>• 監査役会は事業部を一度も訪問せず、書類審査のみで形式的に承認。</p>
                <p>• 内部監査部門は2名体制で事業部に立ち入る権限なし。</p>
                <p>• 監査役の意見は理事長室を経由しなければ理事会で共有されない慣例が存在。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">刑事事件で触れられなかった不正</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-2 text-sm md:text-base">
                <p>• 電子カルテ案件で、競合他社の見積を藪本氏側へ事前提供していた具体的やり取り。</p>
                <p>• 医療機器の価格改定に合わせ、追加のキックバック請求書を用意する方法。</p>
                <p>• 事業部での過去案件を見直した結果、同種の迂回取引が複数件存在したという内部証言。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">次はガバナンスの改善策をチェック</h3>
          <p className="text-slate-700 mb-6">
            報告書が示した課題は、学生自治の再建に直結します。どのように監査を立て直し、意思決定に学生が関与できるのかを確認しましょう。
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
          <p className="mt-2">学生有志が第三者委員会報告書を読み解いた内容をまとめています。</p>
        </div>
      </footer>
    </div>
  );
}
