const BASE_URL = "https://jsonplaceholder.typicode.com";
export const getUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getUserPost = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
