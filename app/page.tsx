"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Head } from 'next/document'

const RedirectPage = () => {

  useEffect(() => {
    // // Track the page view with Google Analytics
    // window.gtag('config', 'G-0KCFYYXM4F', {
    //   page_path: '/redirect',
    // })

    // Redirect to the Instagram profile
    window.location.href = 'https://www.instagram.com/leomessi'
  }, [])

  return <>

    <Head>
      <title>My Page Title</title>
      <meta name="description" content="Description of my page" />
      <link rel="icon" href="/favicon.ico" />

      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-0KCFYYXM4F"></script>
      <script
        dangeroeuslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0KCFYYXM4F');
            `,
        }}
      />
    </Head>
    <div>Redirecting...</div></>
}

export default RedirectPage