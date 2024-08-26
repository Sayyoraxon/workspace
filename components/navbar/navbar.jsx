import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import styles from "@/styles/Navbar.module.css";




const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <img src="./logo.svg" alt="logo" />
                <div className={styles.hr}>
                </div>
                <div>
                    <img src="./logo1.svg" />
                </div>
            </div>

            <div>
                <IoSearchOutline />
                <LiaBarsSolid />
                <button>
                    Login
                </button>
            </div>

        </div>
    )
}

export default Navbar