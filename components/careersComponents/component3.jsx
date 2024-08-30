import React from 'react'
import styles from "@/styles/Home.module.css";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from 'react-icons/hi2';

const Component3 = () => {
  return (
    <div className={styles.h_component5}>
        <img src="./Subtrack5.png" alt="client"/>
        <h1>
        Best for my freelance journey. The vibrant atmosphere and the top-notch amenities have transformed the way I work.
        </h1>
        <h2>Nina Robinson</h2>
        <p>Shared Desks Client (2022 - 2024)</p>
        <div>
            <button>
                <HiOutlineArrowLongUp/>
            </button>
            <button>
                <HiOutlineArrowLongDown/>
            </button>
        </div>
    </div>
  )
}

export default Component3