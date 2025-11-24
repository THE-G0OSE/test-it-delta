import { ImageCard, ImageModal } from "@/entities/image"
import { useGetImages } from "../model/lib/hooks/useGetImages"
import { LoaderScreen } from "@/shared/ui/Loaders/LoaderScreen"
import { Modal } from "@/shared/ui/modal"

export const ImagesGrid = () => {
    const {data, isLoading, isError, error} = useGetImages()
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 w-full" >
        {isLoading ? <div className='col-span-3'><LoaderScreen /></div> : isError ? <>{error}</> : data!.map((image) => (
            <Modal component={<ImageCard image={image} />}>{() => <ImageModal id={image.id} />}</Modal>
        ))}
        
    </div>
  )
}
