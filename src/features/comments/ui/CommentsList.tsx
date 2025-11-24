import type { Comment } from "@/entities/comment";
import { Flex, Stack } from "@/shared/ui/containers";
import { Text } from "@/shared/ui/text";

interface IProps {
  comments: Comment[];
}

export const CommentsList = ({ comments }: IProps) => {
  return (
    <Stack gap="sm">
      <Text color="gray-700" weight="semibold">Comments</Text>
      {comments.map((com) => (
        <Flex gap="sm">
          <Text weight="semibold">{com.author}:</Text>
          <Text>{com.text}</Text>
        </Flex>
      ))}
    </Stack>
  );
};
