import { QueryClientProvider } from 'react-query'
import { queryClient } from '../../services/queryClient'

export const renderWithProviders = (children: React.ReactNode) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
