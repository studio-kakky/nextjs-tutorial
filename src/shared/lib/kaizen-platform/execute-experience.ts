import { NextRouter } from 'next/dist/next-server/lib/router/router';

export const executeExperience = (router: NextRouter): void => {
  try {
    if (!window || !window['kzs']) {
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
    });
  } catch (e) {
    console.warn(e);
  }
};
