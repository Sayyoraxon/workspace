import React from 'react'
import styles from "@/styles/Aboute.module.css";
import Component1 from '@/components/abouteComponents/component1';
import Component2 from '@/components/abouteComponents/component2';
import Component3 from '@/components/abouteComponents/component3';
import Component4 from '@/components/abouteComponents/component4';
import Component from '@/components/homePageComponents/component';
import Component5 from '@/components/abouteComponents/component5';
import Footer2 from '@/components/footer/footer2';


const About = () => {
  return (
    <div className={styles.about}>
        <Component1/>
        <Component2/>
        <Component3/>
        <Component4/>
        <p>Trusted By Companies</p>
        <Component/>
        <Component5/>
        <Footer2 img="./Subtrack17.png"/>
    </div>
  )
}

export default About