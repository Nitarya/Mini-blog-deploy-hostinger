import "./globals.css";

export const metadata = {
  title: "Nitya — Portfolio",
  description: "Developer portfolio of Nitya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
