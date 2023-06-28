import { url_ngrok } from ".";

export const getFavorites = async (id: string) => {
  const response = await fetch(`${url_ngrok}api/favorites/${id}?populate=*`, {
    method: "GET",
  });
  const data = await response.json();
  const favorites = data.data.attributes.foods.data;
  return favorites;
};

export const setFavorite = async (id: string, recipe: any) => {
  const recipeId = String(recipe.id);
  try {
    const response = await fetch(`${url_ngrok}api/favorites/${id}`, {
      headers:{
      "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        data: {
          foods: {
            connect: [recipeId],
          },
        },
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavorite = async (id: string, recipe:any) => {
  const recipeId = String(recipe.id);
  try {
    const response = await fetch(`${url_ngrok}api/favorites/${id}?populate=*`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        data: {
          foods: {
            disconnect: [recipeId],
          },
        },
      }),
    });
  } catch (error) {
    console.log(error)
  }
};

export const favoritesApi = { getFavorites, setFavorite, deleteFavorite };
