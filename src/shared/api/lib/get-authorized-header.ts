export const getAuthorizationHeader = (): { authorization: string } => {
  return { authorization: `Bearer ${process.env.YELP_API_KEY}` };
};
