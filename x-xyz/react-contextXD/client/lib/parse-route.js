export default function parseRoute(hashRoute) {
  // console.log('hashRoute before', hashRoute);
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }
  // console.log('hashRoute after', hashRoute);
  const [path, queryString] = hashRoute.split('?');
  const params = new URLSearchParams(queryString);
  return { path, params };
}
