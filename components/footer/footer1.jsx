import React from 'react'
import styles from "@/styles/Footer.module.css";
import FooterText from './footerText';
import FooterContacts from './footerContacts';
import FooterNav from './footerNav';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { FaPlay } from 'react-icons/fa';



const Footer1 = ({ urlImg }) => {
    return (
        <div className={styles.footer1}>
            <div>
                <FooterText />
                <FooterContacts />
                <hr />
                <FooterNav />
            </div>
            <div>
                <img src={urlImg} alt="Office" />
                <img src="./Vector.svg" alt="logo"
                    width="164px" height="164px"
                    className={styles.logo} />
                <div>
                    <div className={styles.inputDiv}>
                        <div>
                            <h2>Newsletter</h2>
                            <div>
                                <input type="text" placeholder='Enter your email address...' />
                                <HiOutlineArrowLongRight />
                            </div>
                        </div>
                        <button>
                            Play Company Video
                            <FaPlay />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer1