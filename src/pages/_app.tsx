import '../shared/styles/global.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { emitLocationChanged } from '../shared/lib/kaizen-platform/emit-location-change';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(emitLocationChanged, [router.asPath]);

  return <Component {...pageProps} />;
}
