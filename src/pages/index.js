import React from 'react'
import withRoot from '../modules/withRoot'
// --- Post bootstrap -----
import ProductCategories from '../modules/views/ProductCategories'
import ProductSmokingHero from '../modules/views/ProductSmokingHero'
import AppFooter from '../modules/views/AppFooter'
import ProductHero from '../modules/views/ProductHero'
import ProductValues from '../modules/views/ProductValues'
import ProductHowItWorks from '../modules/views/ProductHowItWorks'
import ProductCTA from '../modules/views/ProductCTA'
import AppAppBar from '../modules/views/AppAppBar'

function Index() {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  )
}

export default withRoot(Index)
