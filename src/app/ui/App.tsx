import { MainPage } from '@/pages'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


export const App = () => {

  const client= new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <MainPage/> 
    </QueryClientProvider>
  )
}
