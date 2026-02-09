import type { Metadata } from "next";
import { HeaderBlog } from "@/app/_components/header";
import { HOME_OG_IMAGE_URL } from "@/app/lib/constants";
import {
  Atkinson_Hyperlegible,
  Atkinson_Hyperlegible_Mono,
} from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  variable: "--font-atkinson-mono",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Blog Template`,
  description: `A blog template.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${atkinson.variable} ${atkinsonMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderBlog />

          <div className="fixed top-0 left-0 h-screen w-screen z-0 bg-white dark:bg-black transition-colors duration-200" />

          <div className="fixed top-0 left-0 h-screen w-screen z-1 bg-linear-to-t from-[#aaaaaa] from-0% via-[#aaaaaa]/0 via-25% to-transparent to-50%">
            <ul className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <li className="absolute block bg-white/20 -bottom-37.5 left-[25%] w-20 h-20 animate-[animate_25s_linear_infinite] animation-delay-[0s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[10%] w-5 h-5 animate-[animate_12s_linear_infinite] animation-delay-[2s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[70%] w-5 h-5 animate-[animate_25s_linear_infinite] animation-delay-[4s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[40%] w-15 h-15 animate-[animate_18s_linear_infinite] animation-delay-[0s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[65%] w-5 h-5 animate-[animate_25s_linear_infinite] animation-delay-[0s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[75%] w-27.5 h-27.5 animate-[animate_25s_linear_infinite] animation-delay-[3s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[35%] w-37.5 h-37.5 animate-[animate_25s_linear_infinite] animation-delay-[7s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[50%] w-6.25 h-6.25 animate-[animate_45s_linear_infinite] animation-delay-[15s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[20%] w-3.75 h-3.75 animate-[animate_35s_linear_infinite] animation-delay-[2s]"></li>
              <li className="absolute block list-none bg-white/20 -bottom-37.5 left-[85%] w-37.5 h-37.5 animate-[animate_11s_linear_infinite] animation-delay-[0s]"></li>
            </ul>
          </div>

          <div className="absolute w-screen top-12 min-h-[calc(100vh-48px)] z-2">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
