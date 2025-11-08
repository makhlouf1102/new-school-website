import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="sunset">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Internship Pathways Agency</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById("year").textContent = new Date().getFullYear();
            `,
          }}
        />
      </body>
    </Html>
  )
}