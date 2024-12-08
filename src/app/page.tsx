import React from 'react'
import Herosection from './Components/Herosection'
import Editors from './Components/Editors'
import Product from './Components/Product'
import FeaturedPosts from './Components/Featuredpost'
import Greencard from './Components/Greencard'
import Couples from './Components/Couples'
import Shop from './Components/Shop'

const page = () => {
  return (
 <div>
  <Herosection />
  <Editors />
  <Product />
  <Greencard/>
  <Couples/>
  <FeaturedPosts/>
<Shop/>
  </div>
  )
}

export default page

