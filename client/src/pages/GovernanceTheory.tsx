import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { ExternalLink } from "lucide-react";

export function GovernanceTheory() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Container className="py-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ガバナンスとは何か？ 日大の事例から考える
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            日本大学の不正事案を教訓に、大学ガバナンスの「あるべき姿」と学生の役割を考察します。
          </p>

          <Separator className="my-8" />

          <section id="section-1" className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-900">1. 大学ガバナンスの「あるべき姿」</h2>
            <p className="mt-4 text-gray-700">
              大学ガバナンス（Governance）とは、大学がその目的を達成するために、**意思決定**、**業務執行**、**監視・監督**を適切に行うための仕組みや体制を指します。
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">健全なガバナンスの三要素</h3>
            <p className="mt-2 text-gray-700">
              健全な大学ガバナンスは、主に以下の三つの要素によって構成されます。
            </p>
            <div className="mt-4 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">要素</TableHead>
                    <TableHead>役割</TableHead>
                    <TableHead>日大の事例における欠陥</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">意思決定機関</TableCell>
                    <TableCell>大学の基本方針や重要事項を決定する（例：理事会、評議員会）。</TableCell>
                    <TableCell>理事会が形骸化し、特定の役員（元理事長）に権限が集中していた。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">業務執行機関</TableCell>
                    <TableCell>意思決定に基づき、日常の業務を遂行する（例：学長、各学部長）。</TableCell>
                    <TableCell>業務執行の監督が不十分で、事業部が特定の役員によって私物化された。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">監視・監督機関</TableCell>
                    <TableCell>意思決定と業務執行が法令や規則に従って適切に行われているかをチェックする（例：監事、評議員会）。</TableCell>
                    <TableCell>監事の独立性が確保されず、評議員会の意見聴取機能も十分に機能していなかった。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">私立学校法改正によるガバナンス強化</h3>
            <p className="mt-2 text-gray-700">
              近年、私立大学の不祥事を受け、私立学校法が改正され、ガバナンス強化が図られています。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              <li>
                **理事会の法定化と外部理事の導入**: 理事会を最高の意思決定機関とし、業務執行に対する監督責任を明確化。また、理事の過半数を外部の有識者とすることが求められています。
              </li>
              <li>
                **監事の独立性強化**: 監事の選任方法を改善し、独立性を確保。
              </li>
              <li>
                **評議員会の権限強化**: 評議員会を理事会から独立させ、理事の選任・解任や事業計画について意見を述べる権限を強化。
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              これらの改革は、**特定の個人や閉鎖的な組織による独断的な運営を防ぎ**、大学の公益性を確保することを目的としています。
            </p>
          </section>

          <Separator className="my-8" />

          <section id="section-2" className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-900">2. 学生自治の役割：「全構成員自治」の視点</h2>
            <p className="mt-4 text-gray-700">
              大学のガバナンスにおいて、学生は単なる「サービスを受ける側」ではなく、大学を構成する**不可欠な一員**です。
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">大学の自治と学生の権利</h3>
            <p className="mt-2 text-gray-700">
              日本国憲法第23条が保障する「学問の自由」を制度的に担保するのが「大学の自治」です。この自治の主体は、かつては教授会のみと解釈されていましたが、現在では**学生も大学の全構成員**として、大学運営に参画する権利と義務を持つという考え方が有力です。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              <li>
                **権利（自己決定権）**: 学生は、学費、カリキュラム、施設利用など、自分たちの学生生活に関わる事柄について、意見を述べ、決定に関わる権利（自己決定権）を持ちます。学生自治は、この権利を侵害するような大学当局の一方的な政策を防ぐための**手段**です。
              </li>
              <li>
                **義務（責任）**: 学生は、大学の構成員として、大学の目標達成に協力し、大学の健全な運営に貢献する**責任**を負います。
              </li>
            </ul>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">学生自治会の具体的な役割</h3>
            <p className="mt-2 text-gray-700">
              学生自治会は、学生の意見を組織的に集約し、大学当局と対話する**唯一の窓口**としての役割を担います。
            </p>
            <div className="mt-4 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">役割</TableHead>
                    <TableHead>具体的な活動例</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">意見集約と代弁</TableCell>
                    <TableCell>学生アンケートの実施、大学当局との定期的な協議、学生の要望の伝達。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">監視・チェック機能</TableCell>
                    <TableCell>財務情報の公開要求、学費使途の検証、大学運営の透明性確保への貢献。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">福利厚生の提供</TableCell>
                    <TableCell>課外活動の支援、学内施設の管理・運営への参画、生活環境の改善提案。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <Separator className="my-8" />

          <section id="section-3" className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-900">3. 日大のガバナンス欠陥と学生自治の必要性</h2>
            <p className="mt-4 text-gray-700">
              日本大学の不正事案は、まさに健全なガバナンスの三要素がすべて機能不全に陥っていたことを示しています。
            </p>

            <div className="mt-4 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">欠陥の具体例</TableHead>
                    <TableHead>健全なガバナンスとの対比</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">理事長の権限集中</TableCell>
                    <TableCell>意思決定機関（理事会）が機能せず、トップダウンの独裁的な運営に陥った。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">事業部の私物化</TableCell>
                    <TableCell>業務執行機関に対する監視・監督が働かず、不正な取引が横行した。</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">監事・評議員会の機能不全</TableCell>
                    <TableCell>監視・監督機関が独立性を欠き、チェック機能が働かなかった。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 italic text-gray-600">
              学生が大学運営に主体的に関わることで、特定の個人や閉鎖的な組織による独断的な運営を防ぎ、大学の公益性を守る「最後の砦」となることができます。
            </blockquote>

            <p className="mt-4 text-gray-700">
              学生がガバナンスの一翼を担うことで、大学の透明性が高まり、学生生活の質の向上、ひいては大学全体の信頼回復につながります。
            </p>
          </section>

          <Separator className="my-8" />

          <section id="references" className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-900">参考文献</h2>
            <ul className="mt-4 list-decimal space-y-2 pl-5 text-gray-700">
              <li>
                文部科学省. 「新たな未来を築くための大学教育の質的転換に向けて」. 2012年.
              </li>
              <li>
                日本大学. 「元理事及び前理事長による不正事案に係る第三者委員会」調査報告書. 2022年3月31日.
              </li>
              <li>
                日本私立大学協会. 「学校法人は誰のものか 私学のガバナンスを考える」.
              </li>
              <li>
                東京大学教養学部学生自治会. 「大学の自治とは」.
              </li>
            </ul>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
