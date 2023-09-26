import './globals.css';

export const metadata = {
    title: 'Ignite your confidence | Swooshly',
    description: 'Ignite your confidence, attract admirers.',
    charset: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1.0',
    keywords: 'Swooshly, swooshly, confidence, admirers',
    robots: 'index, follow',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-TileColor': '#101010',
    'theme-color': '#111111',
    'apple-touch-icon': '/apple-touch-icon.png',
    'favicon-32x32': '/favicon-32x32.png',
    'favicon-16x16': '/favicon-16x16.png',
    'site.webmanifest': '/site.webmanifest',
    'safari-pinned-tab': '/safari-pinned-tab.svg',
    'apple-mobile-web-app-title': 'Swooshly'
}





export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
