import '../../globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width, user-scalable=no"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#101010"></link>
        <meta name="msapplication-TileColor" content="#101010"></meta>
        <meta name="theme-color" content="#111111"></meta>
        <meta name="apple-mobile-web-app-title" content="Swooshly"></meta>
        <link rel="apple-touch-startup-image"
    media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
    href="/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
    href="/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
    href="/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
    href="/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
    href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
    href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/iPhone_11__iPhone_XR_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
    href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/12.9__iPad_Pro_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/10.9__iPad_Air_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/10.5__iPad_Air_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/10.2__iPad_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
    href="/splash_screens/8.3__iPad_Mini_landscape.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    href="/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    href="/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    href="/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    href="/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/iPhone_11__iPhone_XR_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
    href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/12.9__iPad_Pro_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/10.9__iPad_Air_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/10.5__iPad_Air_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/10.2__iPad_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"></link>
  <link rel="apple-touch-startup-image"
    media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
    href="/splash_screens/8.3__iPad_Mini_portrait.png"></link>
      </head>
      <body className="bg-[#111111] w-full h-screen max-w-md">
        <div className="overflow-y-hidden" id="app">
          {children}
        </div>
      </body>
    </html>
  )
}
