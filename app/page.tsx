"use client"
// import { Head } from 'next/document'
import { useEffect } from 'react'

const RedirectPage = () => {

  useEffect(() => {
    // // Track the page view with Google Analytics
    // window.gtag('config', 'G-0KCFYYXM4F', {
    //   page_path: '/redirect',
    // })

    // Redirect to the Instagram profile
    window.location.href = 'https://www.instagram.com/pragmaticplayarg'
  }, [])

  return <>
{/* 
    <Head>
      <title>My Page Title</title>
      <meta name="description" content="Description of my page" />
      <link rel="icon" href="/favicon.ico" />

      
    </Head> */}
    <div>Redirecting...</div></>
}

export default RedirectPage