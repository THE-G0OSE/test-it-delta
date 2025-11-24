import type { IPostCommentRequest } from "@/features/comments/model/types";
import { baseUrl, endpoints } from "@/shared/config";
import axios from "axios";

export const postComment = async (id: number, body: IPostCommentRequest) => {
    const res = await axios.post(baseUrl + endpoints.POST.COMMENT(id), body)
    if (res.status !== 200 && res.status !== 201 && res.status !== 204) throw new Error("Failed to create comment")
}