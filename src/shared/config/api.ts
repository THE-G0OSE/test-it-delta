export const baseUrl = import.meta.env.VITE_BASE_URL;

export const endpoints = {
  GET: {
    IMAGES: "images",
    IMAGE: (id: number) => `image/${id}`,
  },
  POST: {
    COMMENT: (imageId: number) =>  `image/${imageId}/comments`
  }
};
