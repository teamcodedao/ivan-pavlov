import type {Metadata} from 'next';
import {Nanum_Pen_Script, Macondo} from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const font = Nanum_Pen_Script({
  weight: ['400'],
  subsets: ['latin'],
});

const macondo = Macondo({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--macondo-font',
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
      <body className={clsx(font.className, macondo.variable)}>{children}</body>
    </html>
  );
}
