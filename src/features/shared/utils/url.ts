export const getUrlWithParam = (
  url: string,
  param: Record<string, string | number | undefined>,
): string => {
  const query = Object.entries(param)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return url + (query ? `?${query}` : '');
};
