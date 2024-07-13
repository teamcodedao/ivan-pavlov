import type {Metadata} from 'next';
import {Nanum_Pen_Script} from 'next/font/google';
import './globals.css';

const font = Nanum_Pen_Script({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ivan Petrovich Pavlov',
  description: 'Ivan Petrovich Pavlov',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
