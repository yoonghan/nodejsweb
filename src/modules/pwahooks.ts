`use strict`
import { useState, useEffect } from 'react';
import { ANDROID_PACKAGE_NAME } from '../shared/const';
import { register } from 'next-offline/runtime';

/**
If await navigator.serviceWorker.getRegistration(domain) is returning as undefined after registered.
Do.
1) Delete the service worker from console's application
2) Browse another website before returning to the domain, this is to clear Service worker
3) Return back to the domain and register service worker again before running navigator.serviceWorker.getRegistration(domain)
**/

export function usePwaHooks(autoRegisterForApp:boolean) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isTwaApp, setIsTwaApp] = useState(false);

  function runRegistrationCheck() {
    getRegistration();
  }

  async function getRegistration() {
    const domain = window.location.hostname;
    if(navigator && navigator.serviceWorker) {
      const swRegistry = await navigator.serviceWorker.getRegistration(domain);

      if(swRegistry) {
        const isSwRegistered = swRegistry.scope !== '';
        setIsRegistered(isSwRegistered);
        return;
      }
    }
    setIsRegistered(false);
  }

  useEffect(() => {
    //utm_source is based on start_url defined in manifest.json 
    if(document.referrer.includes(`android-app://${ANDROID_PACKAGE_NAME}`) ||
      location.href.includes('?utm_source=launcher')) {
      setIsTwaApp(true);
      if(autoRegisterForApp){ //Auto register if opened from app.
        (register as any)();
      }
    }

    runRegistrationCheck();
  }, []);

  return [isRegistered, runRegistrationCheck, isTwaApp];
}
