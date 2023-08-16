import React from 'react'
import CommonPage from './CommonPage'
import Store from '../../Utility/ContextStore/contextAPI'
import { Footer } from '../../Components'
import Latest from './Latest'

function StaticPage() {
  return (
    <div>
      <Store>
        <CommonPage/>
        <Latest/>
      </Store>
      <Footer/>
    </div>
  )
}

export default StaticPage
