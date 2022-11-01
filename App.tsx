import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

const App = () => {
  const [queryClient] = useState(() => new QueryClient())
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation colorScheme={colorScheme} />
      </QueryClientProvider>
      <StatusBar />
    </SafeAreaProvider>
  )
}

export default App
