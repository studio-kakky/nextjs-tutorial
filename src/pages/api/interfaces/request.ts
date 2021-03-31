export interface Request {
  query: Record<string, string>;
  cookies: Record<string, string>;
  body: any;
}
