import React from 'react'
import HeaderWhite from '../components/Header/HeaderWhite'
import Footer from '../components/Footer/Footer'

const WhiteHeaderLayout = ({ children }) => {
  return (
      <>
        <HeaderWhite />
        <main>
          { children }
        </main>
        <Footer />
      
    </>
  )
}

export default WhiteHeaderLayout
