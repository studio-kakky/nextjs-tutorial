export interface Request {
  query: Record<string, string>;
  cookies: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
}
