import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

type KpiCard = {
  title: string;
  tag?: string;
  tagColor?: string;
  description: string;
  barColor?: string;
  progress: number;
};

const KPI_CARDS: KpiCard[] = [
  {
    title: "教育活動収支差額",
    tag: "本業",
    tagColor: "bg-blue-50 text-blue-700",
    description: "教育研究活動が安定して黒字を維持できているかを確認。",
    progress: 70,
  },
  {
    title: "設備関係支出",
    tag: "更新",
    tagColor: "bg-emerald-50 text-emerald-700",
    description: "将来の教育環境に向けた投資が更新サイクルと整合しているか。",
    barColor: "bg-emerald-500",
    progress: 55,
  },
  {
    title: "借入金残高（長短内訳）",
    tag: "負債",
    tagColor: "bg-orange-50 text-orange-700",
    description: "返済期間と利率が適切か、短期偏重になっていないかをチェック。",
    barColor: "bg-orange-500",
    progress: 40,
  },
  {
    title: "特定資産残高／当期減価償却費",
    description: "設備更新の原資を十分に積み立てているか。",
    progress: 60,
  },
  {
    title: "基本金の増減",
    description: "組入／取崩の動きから、目的拘束の強さと教育資産の維持度合いを把握。",
    barColor: "bg-emerald-500",
    progress: 50,
  },
];

export default function FinanceLearn() {
  const [, setLocation] = useLocation();
  const [compactView, setCompactView] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        本文へ移動
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLocation("/finance")}
              className="flex items-center gap-1 rounded border border-blue-100 px-2 py-1 text-sm font-medium text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              財務情報に戻る
            </button>
            <span className="text-base font-semibold">大学会計の基礎</span>
          </div>
          <nav aria-label="主要ナビゲーション">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <a className="hover:underline" href="#sec-3h1m">
                  3表＋1目録
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#sec-why">
                  支出＞収入の理由
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#sec-terms">
                  用語
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#sec-kpi">
                  KPI
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#sec-audit">
                  監査
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4 py-10">
        <section aria-labelledby="hero" className="mb-12">
          <div className="flex flex-col gap-6 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 p-8 text-white shadow-lg">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                【最終版】大学会計の基礎
              </p>
              <h1 id="hero" className="mt-2 text-3xl font-bold md:text-4xl">
                最短でわかる「大学のお金」と「私たちの未来」
              </h1>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-blue-50 md:text-lg">
              大学の財務諸表は、私たちの学費がどう使われ、大学が将来も安定して学びの場を提供できるかを示す「成績表」です。専門用語が多く難しく見えても、
              <strong className="font-semibold text-white">「どこを」「どう見るか」</strong>
              を押さえれば本質が見えてきます。監査のプロの視点で、大学会計の読み方を最短で整理しました。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#sec-3h1m"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                3表＋1目録を見る
              </a>
              <button
                type="button"
                onClick={() => setCompactView((prev) => !prev)}
                aria-pressed={compactView}
                aria-controls="sec-3h1m"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {compactView ? "通常表示" : "簡易表示"}
              </button>
            </div>
          </div>
        </section>

        <section id="sec-3h1m" aria-labelledby="h-3h1m" className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-600">
              1
            </span>
            <h2 id="h-3h1m" className="text-2xl font-bold">
              大学会計の基本：「資金」と「活動」を分けて見る
            </h2>
          </div>
          <p className="mb-6 max-w-3xl text-sm text-slate-700 md:text-base">
            大学会計では、現金の動きそのものである<strong className="font-semibold text-slate-900">「資金」</strong>と、教育活動としての成果を示す<strong className="font-semibold text-slate-900">「活動」</strong>を切り分けて捉えます。まずは事業活動収支計算書の教育活動収支（本業）が黒字かどうかを確認しましょう。
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <header className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-emerald-800">資金収支計算書（現金の出入り）</h3>
              </header>
              <p className="text-sm text-slate-700 md:text-base">
                年度の現金の「入り」と「出」を集計。<span className="font-medium text-emerald-800">〔教育活動資金／施設設備等活動資金／その他の活動資金〕</span>の三つに分類されます。
              </p>
              {!compactView && (
                <figure className="mt-4" aria-label="資金収支計算書の三区分">
                  <svg viewBox="0 0 600 90" className="h-24 w-full" role="img">
                    <rect x="0" y="20" width="200" height="50" rx="10" fill="#10b981" />
                    <rect x="205" y="20" width="190" height="50" rx="10" fill="#34d399" />
                    <rect x="400" y="20" width="200" height="50" rx="10" fill="#6ee7b7" />
                    <text x="100" y="50" textAnchor="middle" fill="#042f2e" fontSize="16">
                      教育活動資金
                    </text>
                    <text x="300" y="50" textAnchor="middle" fill="#064e3b" fontSize="16">
                      施設設備等
                    </text>
                    <text x="500" y="50" textAnchor="middle" fill="#064e3b" fontSize="16">
                      その他
                    </text>
                  </svg>
                  <figcaption className="mt-2 text-xs text-slate-500">
                    設備投資や借入金元本返済など、現金を減らす要素はここで確認できます。
                  </figcaption>
                </figure>
              )}
            </article>

            <article className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <header className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-3 w-3 rounded-full bg-blue-600" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-blue-800">事業活動収支計算書（教育の損益）</h3>
              </header>
              <p className="text-sm text-slate-700 md:text-base">
                教育・研究の損益を表す計算書。<span className="font-medium text-blue-800">〔教育活動収支／教育活動外収支／特別収支〕</span>に分かれ、まずは教育活動収支の黒字が重要です。
              </p>
              {!compactView && (
                <figure className="mt-4" aria-label="事業活動収支計算書の三区分">
                  <svg viewBox="0 0 600 90" className="h-24 w-full" role="img">
                    <rect x="0" y="20" width="260" height="50" rx="10" fill="#2563eb" />
                    <rect x="265" y="20" width="190" height="50" rx="10" fill="#3b82f6" />
                    <rect x="460" y="20" width="140" height="50" rx="10" fill="#60a5fa" />
                    <text x="130" y="50" textAnchor="middle" fill="#0b2546" fontSize="16">
                      教育活動
                    </text>
                    <text x="360" y="50" textAnchor="middle" fill="#0b2546" fontSize="16">
                      教育活動外
                    </text>
                    <text x="530" y="50" textAnchor="middle" fill="#0b2546" fontSize="16">
                      特別
                    </text>
                  </svg>
                  <figcaption className="mt-2 text-xs text-slate-500">
                    活動の損益と現金の動きは別物。双方を並べて確認することが重要です。
                  </figcaption>
                </figure>
              )}
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <header className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-3 w-3 rounded-full bg-slate-700" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-900">貸借対照表（残高リスト）</h3>
              </header>
              <p className="text-sm text-slate-700 md:text-base">
                資産・負債・純資産の残高を示す一覧表。特定資産と借入金の内訳、純資産の増減を押さえましょう。
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <header className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-3 w-3 rounded-full bg-slate-400" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-800">財産目録（実在の裏付け）</h3>
              </header>
              <p className="text-sm text-slate-700 md:text-base">
                土地・建物・図書など、大学が保有する資産を一つずつ記載したリスト。貸借対照表の金額が実際の資産で裏付けられているか確認できます。
              </p>
            </article>
          </div>
        </section>

        <section id="sec-why" aria-labelledby="h-why" className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-600">
              2
            </span>
            <h2 id="h-why" className="text-2xl font-bold">
              なぜ「支出＞収入」になるのか（資金収支のカラクリ）
            </h2>
          </div>
          <p className="max-w-3xl text-sm text-slate-700 md:text-base">
            資金収支計算書で支出が収入を上回っても、直ちに赤字経営と断定するのは早計です。多額の投資や元本返済、基本金組入があると、事業活動収支が黒字でも現金は減少します。
          </p>
          {!compactView && (
            <figure
              className="mt-6 rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm"
              aria-label="資金収支がマイナスになる主要因のフロー"
            >
              <svg viewBox="0 0 820 170" className="h-44 w-full" role="img">
                <rect x="12" y="30" width="210" height="60" rx="14" fill="#2563eb" />
                <text x="117" y="65" textAnchor="middle" fontSize="16" fill="#ffffff">
                  事業活動が黒字
                </text>
                <polygon points="232,60 260,48 260,72" fill="#94a3b8" />
                <rect x="270" y="10" width="200" height="50" rx="14" fill="#10b981" />
                <text x="370" y="42" textAnchor="middle" fontSize="15" fill="#042f2e">
                  設備投資の支出
                </text>
                <rect x="270" y="70" width="200" height="50" rx="14" fill="#34d399" />
                <text x="370" y="102" textAnchor="middle" fontSize="15" fill="#064e3b">
                  借入金元本返済
                </text>
                <rect x="270" y="130" width="200" height="50" rx="14" fill="#6ee7b7" />
                <text x="370" y="162" textAnchor="middle" fontSize="15" fill="#065f46">
                  基本金組入
                </text>
                <polygon points="490,36 520,24 520,48" fill="#94a3b8" />
                <polygon points="490,96 520,84 520,108" fill="#94a3b8" />
                <polygon points="490,156 520,144 520,168" fill="#94a3b8" />
                <rect x="530" y="60" width="280" height="70" rx="14" fill="#0f766e" />
                <text x="670" y="100" textAnchor="middle" fontSize="16" fill="#ecfeff">
                  資金収支（マイナス化し得る）
                </text>
              </svg>
              <figcaption className="mt-2 text-xs text-slate-500">
                設備投資・借入金元本返済・基本金組入は費用ではなくても現金を減らす要素です。
              </figcaption>
            </figure>
          )}
        </section>

        <section id="sec-terms" aria-labelledby="h-terms" className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-600">
              3
            </span>
            <h2 id="h-terms" className="text-2xl font-bold">誤解しやすい用語の正しい理解</h2>
          </div>
          <div className="space-y-4">
            <details className="group rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm" open>
              <summary className="cursor-pointer text-lg font-semibold text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                ① 基本金：教育資産の固定化枠（組入／取崩）
              </summary>
              {!compactView && (
                <p className="mt-3 text-sm text-slate-700 md:text-base">
                  基本金は、大学が教育・研究を継続するための資産を長期的に維持する枠組みです。資産購入のために資金を<strong className="font-semibold text-slate-900">組入</strong>れると資金の自由度が下がり、<strong className="font-semibold text-slate-900">取崩</strong>には厳しい目的制約があります。
                </p>
              )}
            </details>

            <details className="group rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                ② 減価償却費：非資金費用という考え方
              </summary>
              {!compactView && (
                <p className="mt-3 text-sm text-slate-700 md:text-base">
                  減価償却費は現金の支出を伴わない会計上の費用です。授業料などの現金収入が支出を上回っている場合にのみ、減価償却費相当額の資金が学内に残り、将来の設備更新原資となり得ます。
                </p>
              )}
            </details>

            <details className="group rounded-2xl border border-orange-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                ③ 大学の「蓄え」の正しい見方：“内部留保”は使わない
              </summary>
              {!compactView && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700 md:text-base">
                  <li>純資産の増減（貸借対照表）</li>
                  <li>特定資産の積立（貸借対照表）</li>
                  <li>翌年度繰越支払資金（資金収支計算書）</li>
                </ul>
              )}
            </details>
          </div>
        </section>

        <section id="sec-kpi" aria-labelledby="h-kpi" className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-600">
              4
            </span>
            <h2 id="h-kpi" className="text-2xl font-bold">【学生向けKPI】ここだけ押さえれば大学の健全性がわかる</h2>
          </div>
          <p className="mb-6 max-w-3xl text-sm text-slate-700 md:text-base">
            財務諸表すべてを細かく読む必要はありません。以下の指標を定点観測するだけで、大学の健全性と将来の投資余力を素早く把握できます。
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {KPI_CARDS.map((kpi) => (
              <article
                key={kpi.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <header className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{kpi.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{kpi.description}</p>
                  </div>
                  {kpi.tag && (
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${kpi.tagColor}`}>
                      {kpi.tag}
                    </span>
                  )}
                </header>
                {!compactView && (
                  <div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-slate-200">
                      <span
                        className={`absolute inset-y-0 left-0 rounded-full ${kpi.barColor ?? "bg-blue-500"}`}
                        style={{ width: `${kpi.progress}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">達成イメージ（例示）</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="sec-audit" aria-labelledby="h-audit" className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-600">
              5
            </span>
            <h2 id="h-audit" className="text-2xl font-bold">さらに踏み込む：透明性をチェックする監査の視点</h2>
          </div>
          <p className="max-w-3xl text-sm text-slate-700 md:text-base">
            決算書と一体で公表される以下の情報も併せて確認すると、大学のガバナンスやリスク管理の成熟度が見えてきます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-700 md:text-base">
            <li>
              <strong className="font-semibold text-slate-900">監査報告書の意見：</strong> 公認会計士が「適正」と認めているか。「強調事項」や「限定付適正」が付されていないか。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">関係者取引の注記：</strong> 理事や関連会社との取引が適切か。第三者委員会報告書の指摘と整合するか。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">退職給付債務の前提：</strong> 割引率・運用利回り・退職率などの仮定が現実的かを確認。
            </li>
          </ul>
        </section>

        <section aria-labelledby="h-notes" className="mb-20">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-600">
              6
            </span>
            <h2 id="h-notes" className="text-2xl font-bold">財務諸表の表示ルールと数値例に関する注記</h2>
          </div>
          <ul className="list-disc space-y-2 pl-6 text-sm text-slate-700 md:text-base">
            <li>
              <strong className="font-semibold text-slate-900">出典の明記：</strong> 財務諸表の数値は年度・様式名・ページを確認のうえ引用すること。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">単位の統一：</strong> 公表資料ごとに単位（百万円・億円など）が異なるため、桁区切りや丸めルールを脚注でそろえる。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">比較情報の活用：</strong> 単年度ではなく、前年比や過去3年のトレンドを並べると変化が読み取りやすくなる。
            </li>
          </ul>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
              数値例（学校法人日本大学 令和5年度決算概要 資金収支計算書）
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="px-4 py-3">項目</th>
                    <th className="px-4 py-3 text-right">金額</th>
                    <th className="px-4 py-3">出典</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="px-4 py-3">資金収入合計</td>
                    <td className="px-4 py-3 text-right">186,8xx 百万円</td>
                    <td className="px-4 py-3 text-xs text-slate-600">学校法人日本大学 令和5年度決算概要 資金収支計算書 p.xx</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">資金支出合計</td>
                    <td className="px-4 py-3 text-right">239,1xx 百万円</td>
                    <td className="px-4 py-3 text-xs text-slate-600">同上 p.xx</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="px-4 py-3 text-xs text-slate-500">
              注：単位＝百万円。角括弧内のxxは実数反映時に必ず差し替え、桁区切りと丸め方（四捨五入など）を注記に明記すること。
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-600">
          © {currentYear} 学生向け大学会計ガイド
        </div>
      </footer>
    </div>
  );
}

