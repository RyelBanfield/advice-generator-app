import "./globals.css";

export const metadata = {
  title: "Frontend Mentor - Advice generator app",
  description: "Advice generator app coding challenge",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
