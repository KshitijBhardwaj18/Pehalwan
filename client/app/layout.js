import "./globals.css";

export const metadata = {
  title: "Pehalwan",
  description: "A social media for fitness freaks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body bg ">{children}</body>
    </html>
  );
}
