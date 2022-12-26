import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const jost = localFont({
  src: [
    {
      path: '../public/fonts/jost/jost_light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/jost/jost_medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-jost',
});

const geometrySoftPro = localFont({
  src: '../public/fonts/geometry_soft_pro/geometry_soft pro_bold_n.otf',
  variable: '--font-geometry-soft-pro',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jost.variable} ${geometrySoftPro.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
