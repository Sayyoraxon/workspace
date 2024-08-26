import React from 'react'
import styles from "@/styles/Home.module.css";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from 'react-icons/hi2';

const Component5 = () => {
  return (
    <div className={styles.h_component5}>
        <img src="./Subtrack5.png" alt="client"/>
        <h1>
            WorkSpace has been a game-changer for me.
            The comm-unity here is so welcoming, the 
            amenities are good! 
        </h1>
        <h2>Sarah Johnson</h2>
        <p>Private Office Client (2021 2024)</p>
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

export default Component5