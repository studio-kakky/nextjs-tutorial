export const getHostname = (): string => {
  return process.env.API_HOSTNAME || '';
};
