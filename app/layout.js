import "./globals.css";

export const metadata = {
  title: "TaskMaster Pro | Fullstack Task Management Application",
  description: "Modern glassmorphic task management web application powered by Node.js Express MongoDB backend and Next.js frontend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
