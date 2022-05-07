export const isAutenticated = (req) => {
  const serverToken = localStorage.getItem('__be_token__');
  const clientToken = req.headers.get('autentication')?.replace('Bearer ', '');

  //   console.log(`Server token: ${serverToken}`);
  //   console.log(`Clien token: ${serverToken}`);

  return serverToken === clientToken;
};
