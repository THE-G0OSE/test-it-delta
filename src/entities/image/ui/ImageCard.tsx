import type { ImageShort } from "@/entities/image";
import { Card, Stack } from "@/shared/ui/containers";
import { Text } from "@/shared/ui/text";

interface IProps {
  image: ImageShort;
}

export const ImageCard = ({ image }: IProps) => {
  return (
    <Card size="lg" noPadding>
      <Stack>
        <Card fullWidth noPadding className="h-54">
          <img src={image.image} className="w-full h-full object-cover" />
        </Card>
        <Text>
          id: {image.id}
        </Text>
      </Stack>
    </Card>
  );
};
