import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://nitya.tech";
const TITLE = "Nitya — Full-Stack Developer";
const DESCRIPTION =
  "I build and ship small, focused web products end to end — React & Next.js on the front, Node and FastAPI on the back, and a deployment pipeline that actually works.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Nitya",
  },
  description: DESCRIPTION,
  keywords: [
    "Nitya",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Nitya", url: SITE_URL }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Nitya",
    images: [{ url: "/avatar.jpg", width: 800, height: 1000, alt: "Nitya" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/avatar.jpg"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0a09" },
  ],
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || "dark";
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
