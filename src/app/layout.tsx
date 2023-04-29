import './globals.css'  

export const metadata = {
  title: 'Asseto Corsa Competizone Guide',
  description: 'Guide to Asseto Corsa Competizone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-zinc-700 text-white"}>{children}</body>
    </html>
  )
}
