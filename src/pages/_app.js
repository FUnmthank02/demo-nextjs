import Navbar from '@/component/navbar/navbar'
import Footer from '@/layout/footer'
import { SessionProvider } from "next-auth/react";
import '@/styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps }}) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  )

}
