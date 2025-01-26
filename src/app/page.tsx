import React from 'react'
import Herosection from './Components/Herosection'
import Editors from './Components/Editors'

import FeaturedPosts from './Components/Featuredpost'
import Greencard from './Components/Greencard'
import Couples from './Components/Couples'
import Shop from './Components/Shop'
import Header from './Components/Header'
import Product from './Product/page'

const page = () => {
  return (
 <div>
 <Header/>
  <Herosection />
  <Editors />
<Product/>
  <Greencard/>
  <Couples/>
  <FeaturedPosts/>
<Shop/>
  </div>
  )
}

export default page

