import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html >
        <Head >
            <meta charset="utf-8" />
            <link rel="icon" href="/static/svg/logo_black.svg" />
            {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
            <meta property="og:title" content="Spectre 001: A Space Odyssey... or whatever" />
            <meta property="og:image" content="www.spectre001pod.com/static/png/web_still.png" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Spectre 001 is a Podcast Baby"/>
            <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400&family=Ubuntu:ital,wght@0,300;0,400;1,300;1,500&display=swap" rel="stylesheet" />
        </Head >
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

/*
            
            
            
            
            
            
            
*/