import { NextRouter } from 'next/dist/next-server/lib/router/router';

export const executeExperience = (router: NextRouter) => {
  try {
    if (!window || !window.hasOwnProperty('kzs')) {
      return;
    }

    const kzs = window['kzs'] as (eventName: string) => void;
    if (router.query.b_kz_preview_hash || router.query.b_kz_editor_preview) {
      setTimeout(() => {
        window.dispatchEvent(new Event('kzContentReady'));
        kzs('applyVariation');
      }, 2000);
      return;
    }

    setTimeout(() => {
      kzs('execute');
    }, 0);
  } catch (e) {
    console.warn(e);
  }
};
