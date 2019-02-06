import React from 'react'
import Helmet from 'react-helmet'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../config/typography.js'

const SEO = () => {
  return (
    <Helmet>
      <title>Titulo</title>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <link rel="stylesheet" href="css/font-awesome.min.css" />
    </Helmet>
  )
}

export default SEO
