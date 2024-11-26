import '@/app/ui/global.css';
import '@/app/ui/fonts.ts';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.classname} antialiased'}>{children}</body>
    </html>
  );
}
