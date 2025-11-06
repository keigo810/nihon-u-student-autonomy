import { Link } from "wouter";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <Container className="flex items-center justify-between py-4">
        <Link href="/">
          <a className="text-xl font-bold text-gray-900 hover:text-blue-600">
            日大の「自治」を取り戻そう
          </a>
        </Link>
        <nav className="space-x-6">
          <Link href="/governance">
            <a className="text-gray-600 hover:text-blue-600">ガバナンス</a>
          </Link>
          <Link href="/issues">
            <a className="text-gray-600 hover:text-blue-600">不正事案</a>
          </Link>
          <Link href="/finance">
            <a className="text-gray-600 hover:text-blue-600">財務情報</a>
          </Link>
          <Link href="/roadmap">
            <a className="text-gray-600 hover:text-blue-600">ロードマップ</a>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
