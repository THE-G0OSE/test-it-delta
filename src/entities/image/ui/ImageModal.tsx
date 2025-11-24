import { CommentsList } from "@/features/comments/ui/CommentsList";
import { PostCommentField } from "@/features/comments/ui/PostCommentField";
import { useGetImage } from "@/features/images/model/lib/hooks/useGetImage";
import { Flex, Stack } from "@/shared/ui/containers";
import { LoaderScreen } from "@/shared/ui/Loaders/LoaderScreen";
import { Text } from "@/shared/ui/text";

interface IProps {
  id: number;
}

export const ImageModal = ({ id }: IProps) => {
  const { data, isLoading, isError, error } = useGetImage(id);
  return (
    <Stack className="p-4">
      {data ? (
        <>
          <Flex fullWidth justify="center" align="center">
            <img src={data.largeImage} className="h-101" />
          </Flex>
          <PostCommentField id={id} />
          <CommentsList comments={data.comments}/>
        </>
      ) : isLoading ? (
        <Flex align='center' fullWidth className='h-100'>
        <LoaderScreen />
        </Flex>
      ) : isError ? (
        <Text>{error!.message}</Text>
      ) : (
        <></>
      )}
    </Stack>
  );
};
