import { Button } from "@/shared/ui/Buttons";
import { Flex, Stack } from "@/shared/ui/containers";
import { IconMessage, IconPhone } from "@/shared/ui/icons";
import { Text } from "@/shared/ui/text";

export const Banner = () => {
  return (
    <Stack align="center" className="gap-0">
      <div className="w-full h-48">
        <img src="/banner.webp" className="w-full h-full object-cover" />
      </div>
      <Stack align="start" justify="between" className="sm:flex-row sm:items-end -mt-16 px-8 w-full max-w-5xl">
        <Flex align="end">
          <div className="rounded-full ring-4 ring-white size-32 overflow-hidden">
            <img src="/avatar.webp" className="size-full object-cover" />
          </div>
          <Text className="pb-4" size="xl" weight="bold">
            Ricardo Cooper
          </Text>
        </Flex>
        <Flex className='pb-1 h-full' align="end">
          <Button><Flex className='text-gray-400' align="center" gap="sm"><IconMessage size={16} /><Text color="gray-700">Message</Text></Flex></Button>
          <Button><Flex className='text-gray-400' align='center' gap="sm"><IconPhone size={16}/><Text color="gray-700">Call</Text></Flex></Button>
        </Flex>
      </Stack>
    </Stack>
  );
};
