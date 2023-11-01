import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="keywords" content="Swooshly, swooshly, confidence, admirers"></meta>

                <meta name="title" content="Swooshly - Ignite your confidence" />
                <meta name="description" content="Ignite your confidence, attract admirers." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://swooshly.org" />
                <meta property="og:title" content="Swooshly - Ignite your confidence" />
                <meta property="og:description" content="Ignite your confidence, attract admirers." />
                <meta property="og:image" content="https://swooshly.org/logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://swooshly.org" />
                <meta property="twitter:title" content="Swooshly - Ignite your confidence" />
                <meta property="twitter:description" content="Ignite your confidence, attract admirers." />
                <meta property="twitter:image" content="https://swooshly.org/logo.png" />

                <meta name="robots" content="index, follow"></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
                <meta name="language" content="English"></meta>
                <meta name="revisit-after" content="2 days"></meta>
                <meta name="author" content="Deltasoft"></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#101010" />
                <meta name="msapplication-TileColor" content="#101010"></meta>
                <meta name="theme-color" content="#111111"></meta>
                <meta name="apple-mobile-web-app-title" content="Swooshly"></meta>
                <title>Ignite your confidence | Swooshly</title>
            </head>
            <body className="bg-[#111111]">
                {children}
            </body>
        </html>
    )
}
