"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const RedirectPage = () => {

  useEffect(() => {
    // // Track the page view with Google Analytics
    // window.gtag('config', 'G-0KCFYYXM4F', {
    //   page_path: '/redirect',
    // })

    // Redirect to the Instagram profile
    window.location.href = 'https://www.instagram.com/leomessi'
  }, [])

  return <div>Redirecting...</div>
}

export default RedirectPage