import '../globals.css';
import BottomSheet from './bottomSheet';
import './main';

export const metadata = {
  
  title: 'Swooshly',
  description: 'Ignite your confidence, attract admirers.',
  charset: 'UTF-8',
  viewport: 'initial-scale=1, viewport-fit=cover, width=device-width, user-scalable=no',
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'black-translucent',
  'msapplication-TileColor': '#101010',
  'theme-color': '#111111',
  'apple-touch-icon': '/apple-touch-icon.png',
  'favicon-32x32': '/favicon-32x32.png',
  'favicon-16x16': '/favicon-16x16.png',
  'site.webmanifest': '/site.webmanifest',
  'safari-pinned-tab': '/safari-pinned-tab.svg',
  'apple-mobile-web-app-title': 'Swooshly',
  'apple-touch-startup-image': [
    {
      media: 'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      href: 'splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png'
    },
    {
      media: 'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      href: 'splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png'
    },
    {
      media: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      href: 'splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png'
    },
    {
      media: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      href: 'splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png'
    },
    {
      media: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      href: 'splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png'
    },
    {
      media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      href: 'splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png'
    },
    {
      media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/iPhone_11__iPhone_XR_landscape.png'
    },
    {
      media: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      href: 'splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png'
    },
    {
      media: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png'
    },
    {
      media: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png'
    },
    {
      media: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/12.9__iPad_Pro_landscape.png'
    },
    {
      media: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png'
    },
    {
      media: 'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/10.9__iPad_Air_landscape.png'
    },
    {
      media: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/10.5__iPad_Air_landscape.png'
    },
    {
      media: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/10.2__iPad_landscape.png'
    },
    {
      media: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png'
    },
    {
      media: 'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      href: 'splash_screens/8.3__iPad_Mini_landscape.png'
    },
    {
      media: 'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: 'splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png'
    },
    {
      media: 'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: 'splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png'
    },
    {
      media: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: 'splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png'
    },
    {
      media: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: 'splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png'
    },
    {
      media: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: 'splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png'
    },
    {
      media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: 'splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png'
    },
    {
      media: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/iPhone_11__iPhone_XR_portrait.png'
    },
    {
      media: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: 'splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png'
    },
    {
      media: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png'
    },
    {
      media: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png'
    },
    {
      media: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/12.9__iPad_Pro_portrait.png'
    },
    {
      media: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png'
    },
    {
      media: 'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/10.9__iPad_Air_portrait.png'
    },
    {
      media: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/10.5__iPad_Air_portrait.png'
    },
    {
      media: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/10.2__iPad_portrait.png'
    },
    {
      media: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png'
    },
    {
      media: 'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: 'splash_screens/8.3__iPad_Mini_portrait.png'
    }
  ]
}





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111111] w-full h-screen max-w-md">
        <div className="overflow-y-hidden" id="app">
          {children}
        </div>
        <div className="bg-[#000000] flex justify-center h-20 w-full fixed bottom-0 max-w-md z-50" id="nav-bar">
          <div className="flex w-[85%] h-14 justify-center items-center gap-10 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-10 h-10 open-button">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <svg onClick="loadComponent('home', true)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path
                d="M2 4.5C2 3.672 2.49108 3 3.09615 3H8.94231C9.54738 3 10.0385 3.672 10.0385 4.5V9.5C10.0385 10.328 9.54738 11 8.94231 11H3.09615C2.80544 11 2.52662 10.842 2.32106 10.5607C2.11549 10.2794 2 9.89782 2 9.5V4.5ZM13.6923 6.5C13.6923 5.672 14.1834 5 14.7885 5H19.9038C20.5089 5 21 5.672 21 6.5V17.5C21 18.328 20.5089 19 19.9038 19H14.7885C14.4977 19 14.2189 18.842 14.0134 18.5607C13.8078 18.2794 13.6923 17.8978 13.6923 17.5V6.5ZM3.46154 16.5C3.46154 15.672 3.95262 15 4.55769 15H9.67308C10.2782 15 10.7692 15.672 10.7692 16.5V19.5C10.7692 20.328 10.2782 21 9.67308 21H4.55769C4.26697 21 3.98816 20.842 3.78259 20.5607C3.57703 20.2794 3.46154 19.8978 3.46154 19.5V16.5Z"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg onClick="loadComponent('swoosh', false)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <svg onClick="loadComponent('notification', true)" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <div className="w-10 h-10 flex justify-center items-center">
              <img className="rounded-full object-cover" width="40" height="40" src="https://i.ibb.co/Kb9btz0/image-2-5.png" />
            </div>
          </div>
        </div>
          <BottomSheet />
        <div
          className="hidden fixed top-0 left-0 w-full h-screen z-50 backdrop-blur-lg bg-[#111111] bg-opacity-40 flex-col flex justify-center items-center">
          <div className="w-28 h-28">
            <img className="w-full h-full rounded-full object-cover"
              src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
          </div>
          <button className="text-white opacity-90 tracking-[1.1px] flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
            </svg>
            Recommend less
          </button>
          <button className="text-white opacity-90 tracking-[1.1px]">Close</button>
        </div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </body>
    </html>
  )
}
