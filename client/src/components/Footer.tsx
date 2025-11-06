import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50 py-8">
      <Container className="text-center text-sm text-gray-500">
        <p>&copy; 2025 日大の「自治」を取り戻そう. All rights reserved.</p>
        <p className="mt-2">
          このサイトは、日本大学の学生自治の回復を目指す有志の学生によって運営されています。
        </p>
      </Container>
    </footer>
  );
}
