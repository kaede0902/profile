import React from 'react'
import MetaTags from 'react-meta-tags';

export default function Meta() {
  return (
    <>
          <MetaTags>
            <title>かえでのホームページ</title>
            <meta name="og:description" 
              content="kaede0902 Homepage" />
            <meta property="og:title" 
              content="かえでのホームページ" />
            <meta property="og:image" 
              content="https://via.placeholder.com/300/000/fff.png" />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@publisher_handle"/>
            <meta name="twitter:title" content="Page Title"/>
            <meta name="twitter:description" content="Page description less than 200 characters"/>
            <meta name="twitter:creator" content="@author_handle"/>
            <meta name="twitter:image" 
              content="https://via.placeholder.com/300/000/fff.png" />


          </MetaTags>
      </>
    )
}
