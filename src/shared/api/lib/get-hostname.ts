export const getHostname = (): string => {
  if (!process || !process.env || !process.env.VERCEL_URL) {
    return '';
  }

  const hostname = process.env.VERCEL_URL;

  return /^localhost:.*/.test(hostname) ? `http://${hostname}` : `https://${hostname}`;
};
