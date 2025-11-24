import type { Comment } from "@/entities/comment"

export type Image = {
    id: number,
    image: string,
    largeImage: string,
    comments: Comment[]
}

export type ImageShort = Omit<Image, "largeImage" | "comments">