import { getImages } from "../../api"
import { useQuery } from "@tanstack/react-query"

export const useGetImages = () => {
    const {data, isLoading, isError, error} = useQuery({queryKey: ['images'], queryFn:  getImages})
    return {data, isLoading, isError, error}
}