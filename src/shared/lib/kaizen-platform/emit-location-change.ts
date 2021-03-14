export const emitLocationChanged = (): void => {
  if (!window || !window['kzs']) {
    return;
  }

  const kzs = window['kzs'] as (eventName: string) => void;
  kzs('locationUpdated');
};
