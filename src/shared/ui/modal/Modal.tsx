import { Card, Flex } from "@/shared/ui/containers"
import { useState, type ReactNode } from "react"

interface IProps {
    component: ReactNode
    children: (setIsOpen: (isOpen: boolean) => void) => ReactNode
}

export const Modal = ({component, children}: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
    <div onClick={() => {setIsOpen(true)}}>{component}</div>
    {isOpen && <Flex justify="center" align="center" onClick={() => setIsOpen(false)} className='top-0 left-0 fixed bg-black/70 w-screen h-screen'>
        <Card onClick={((e) => e.stopPropagation())} className='bg-white w-[90%] max-w-[693px] min-h-100 max-h-[95vh] overflow-auto'>
            {children(setIsOpen)} 
        </Card>
    </Flex>}
    </>
  )
}
