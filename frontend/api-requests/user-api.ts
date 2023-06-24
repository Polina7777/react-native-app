import { url_ngrok } from ".";

export const getUsers = async () => {
  const response = await fetch(`${url_ngrok}api/users?populate=*`, {
    method: "GET",
  });
  const data = await response.json();
  const users = data;
  return users;
};
export const getUsersById = async (id: string) => {
  const response = await fetch(`${url_ngrok}api/users/${id}?populate=*`, {
    method: "GET",
  });
  const data = await response.json();
  const user = data;
  return user;
};

export const userApi = { getUsers, getUsersById };
