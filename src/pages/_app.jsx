import { useEffect, useRef } from 'react'

import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-primaryText-100 dark:bg-primaryText-900 dark:ring-primaryText-300/20" />
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
      </div>
    </>
  )
}
