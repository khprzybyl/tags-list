const BASE_URL = 'https://api.stackexchange.com/2.2/tags';

export const fetchTags = async (
  page = 1,
  pageSize = 10,
  order = 'desc',
  sort = 'popular'
) => {
  const url = `${BASE_URL}?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
