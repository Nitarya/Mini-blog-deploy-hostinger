import "./globals.css";

// The root layout wraps every page in the app.
export const metadata = {
  title: "Mini Blog",
  description: "A tiny blog built to learn Next.js file-based routing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
