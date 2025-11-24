import { type Image } from "@/entities/image"
import { getImage } from "@/features/images/model/api"
import { useQuery } from "@tanstack/react-query"

export const useGetImage = (id: number) => {
    const {data, isLoading, isError, error} = useQuery<Image, Error>({queryKey: [`image${id}`], queryFn: () => getImage(id)})
    return {data, isLoading, isError, error}
}