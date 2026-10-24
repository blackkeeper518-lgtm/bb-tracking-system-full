import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // หัวข้อตอนส่งลิงก์
  title: "BB STORE - VIP TRACKING",
  description: "ระบบเช็คพัสดุ Real-time สำหรับลูกค้า VIP ของ BB STORE",
  openGraph: {
    title: "BB STORE - VIP TRACKING",
    description: "กรอกเบอร์โทรศัพท์เพื่อเช็คพัสดุได้ทันที",
    url: "https://bbstorefullv-1.vercel.app/",
    siteName: "BB STORE",
    images: [
      {
        // 🔥 นี่คือลิงก์รูปฟีนิกซ์ม่วงที่เชฟต้องการครับ
        url: "https://img1.pic.in.th/images/unnamed-175fe1f2edce7a569.jpg.png",
        width: 1200,
        height: 630,
        alt: "BB STORE VIP",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://img1.pic.in.th/images/unnamed-175fe1f2edce7a569.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
