import { ImagesGrid } from "@/features/images";
import { Stack } from "@/shared/ui/containers";
import { Banner } from "@/widgets/banner";

export const MainPage = () => {
  return (
    <Stack fullWidth className="items-stretch gap-11.5">
      <Banner />
      <ImagesGrid  /> 
    </Stack>
  );
};
