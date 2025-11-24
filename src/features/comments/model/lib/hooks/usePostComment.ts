import { postComment } from "@/features/comments/model/api"
import type { IPostCommentRequest } from "@/features/comments/model/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const usePostComment = (id: number) => {
    const client = useQueryClient()
    const mutateFunc = (body: IPostCommentRequest) => postComment(id , body)
    const {isPending: isLoading, isError, error, mutate} = useMutation({ mutationFn: mutateFunc, onSuccess: () => {
        client.invalidateQueries({queryKey: [`image${id}`]})
    }} ) 
    return {isLoading, isError, error, mutate}

}