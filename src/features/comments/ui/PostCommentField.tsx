import { usePostComment } from "@/features/comments/model/lib/hooks/usePostComment";
import { Button } from "@/shared/ui/Buttons";
import { Flex, Stack } from "@/shared/ui/containers";
import { Text } from "@/shared/ui/text";
import { useRef } from "react";

interface IProps {
    id: number
}

export const PostCommentField = ({id}: IProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = usePostComment(id);
  const clickHandler = () => {
    if (inputRef.current && inputRef.current.value) {
      mutate({ comment: inputRef.current.value });
      inputRef.current.value = ""
    }
  };
  return (
    <>
      <Stack gap="sm" fullWidth>
        <Text>Comment</Text>
        <textarea ref={inputRef} className="border border-gray-300 w-full" />
        <Text color="gray-500">Write a few sentences about photo</Text>
      </Stack>
      <Flex fullWidth justify="center" align="center">
        <Button onClick={clickHandler} size="lg" color="accent">
          Save
        </Button>
      </Flex>
    </>
  );
};
