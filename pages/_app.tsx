import { useEffect } from 'react';
import NextHead from 'next/head';
import type { AppProps } from 'next/app'
import '../styles/globals.css'

let reloadInterval: NodeJS.Timer;

function lazyReload() {
  clearInterval(reloadInterval);
  reloadInterval = setInterval(() => {
    if (document.hasFocus()) {
      window.location.reload();
    }
  }, 100);
}

function forcePageReload(registration: ServiceWorkerRegistration) {
  if (!navigator.serviceWorker.controller) {
    return;
  }

  if (registration.waiting) {
    registration.waiting.postMessage('skipWaiting');
    return;
  }

  function listenInstalledStateChange() {
    registration.installing?.addEventListener('statechange', function (event) {
      if (this.state === 'installed' && registration.waiting) {
        registration.waiting.postMessage('skipWaiting');
      } else if (this.state === 'activated') {
        lazyReload();
      }
    });
  }

  if (registration.installing) {
    listenInstalledStateChange();
    return;
  }

  registration.addEventListener('updatefound', listenInstalledStateChange);
}

async function registerServiceWorker() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    const registration = await navigator.serviceWorker.register('/sw.js');
    forcePageReload(registration);
  }
}

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <>
      <NextHead>
        <title>Partify</title>
        <meta name="description" content='Partify' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}
