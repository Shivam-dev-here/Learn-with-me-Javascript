import React from 'react'
import Script from 'next/script'

const About = () => {
  return (
    <>
      <Script>
        {` alert("Careful, Script tag on About Page")`}
      </Script>
    <div>
      About
    </div>
    </>
  )
}

export default About

export const metadata = {
  title: "Companies info",
  description: "This page includes the information regrading company",
};