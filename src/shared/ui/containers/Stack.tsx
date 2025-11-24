import {Flex, type IFlexProps} from "./Flex"


export const Stack = ({children, ...props}: Omit<IFlexProps, "direction">) => {
  return (
    <Flex {...props} direction="col">
        {children}
    </Flex>
  )
}
