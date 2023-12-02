import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    console.log("hola, llegue");
    return (
      <Html>
        <Head>
          {/* Google Analytics Script */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-0KCFYYXM4F"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-0KCFYYXM4F');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument