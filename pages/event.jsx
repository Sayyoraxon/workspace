import Component1 from '@/components/eventComponents/component1'
import Component2 from '@/components/eventComponents/component2'
import Footer1 from '@/components/footer/footer1'
import React from 'react'

const Event = () => {
  return (
    <div>
        <Component1/>
        <Component2/>
        <Footer1 urlImg = "./Subtrack7.png"/>
    </div>
  )
}

export default Event