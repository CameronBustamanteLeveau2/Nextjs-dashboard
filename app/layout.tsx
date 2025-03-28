import './ui/global.css'
import {inter} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 <body className={`${inter.className} antialiased`}>   
      <div style={{ backgroundColor:'rgba(238, 229, 229, 0.77)'}}>
        {children}

        </div>
        </body>
    </html>
  );
}
