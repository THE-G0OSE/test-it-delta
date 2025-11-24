import { type Image, type ImageShort } from "@/entities/image";
import { baseUrl, endpoints } from "@/shared/config";
import axios from "axios";

export const getImages = async () => {
  const res = await axios.get<ImageShort[]>(baseUrl + endpoints.GET.IMAGES);
  if (res.status !== 200 && res.status !== 201)
    throw new Error("Failed to fetch images");
  return res.data;
};

export const getImage = async (id: number)  => {
    const res = await axios.get<Image>(baseUrl + endpoints.GET.IMAGE(id));
    if (res.status !== 200 && res.status !== 201)
        throw new Error("Failed to fetch image")
    return res.data
}
