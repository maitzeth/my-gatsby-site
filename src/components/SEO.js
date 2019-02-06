import React from 'react'
import Helmet from 'react-helmet'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../config/typography.js'

const SEO = ({ postNode, pathname, single, data }) => {

  let title
  let description
  let image

  console.log(postNode, pathname, single, data)

  return (
    <>
      <Helmet>
        <title>Titulo</title>
        {!single && (<link rel="stylesheet" href="css/font-awesome.min.css" />) }
        <link rel="stylesheet" href="css/nprogress.css" />
      </Helmet>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </>
  )
}

export default SEO
