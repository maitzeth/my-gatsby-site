import React from 'react'
import Helmet from 'react-helmet'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../config/typography.js'

const SEO = () => {
  return (
    <>
    <Helmet>
      <title>Titulo</title>
      <link rel="stylesheet" href="css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/nprogress.css" />
    </Helmet>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    </>
  )
}

export default SEO
