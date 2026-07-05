import "./globals.css";

export const metadata = {
  title: "GraphLore",
  description:
    "Interactive frontend for GraphLore narrative graph exploration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
