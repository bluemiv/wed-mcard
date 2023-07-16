import './globals.css';
import { Nanum_Myeongjo } from 'next/font/google';
import { EmptyLayout } from '@/layout';

const myeongjo = Nanum_Myeongjo({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: '김태홍 💜 이서진',
  description: '신랑 김태홍 | 신부 이서진',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={myeongjo.className}>
        <EmptyLayout>{children}</EmptyLayout>
      </body>
    </html>
  );
}
