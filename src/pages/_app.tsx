import Head from 'next/head';
import { useEffect } from 'react';
import { AppType } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '../utils/api';
import Footer from '../components/Home/Footer/Footer';
import NavigationBar from '../components/Home/NavBar/NavBar';

import '../styles/fonts.css';
import '../styles/globals.css';

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
        registration.installing?.addEventListener('statechange', function () {
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
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js');
        forcePageReload(registration);
    }
}

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    useEffect(() => {
        void registerServiceWorker();
    }, []);

    return (
        <>
            <Head>
                <title>Partify</title>
                <meta name='description' content='Partify' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>

            <SessionProvider session={session}>
                <NavigationBar />

                <Component {...pageProps} />

                <Footer />
            </SessionProvider>
        </>
    );
};

export default api.withTRPC(MyApp);
