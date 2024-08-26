import React from 'react'
import styles from "@/styles/Home.module.css";
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const Component4 = () => {
    return (
        <div className={styles.h_component4}>
            <h1>Explore Spaces</h1>
            <div className={styles.c4_cards}>
                <div>
                    <img src="./Subtrack1.png" alt="photo" />
                    <h3>Private Office</h3>
                    <p>
                        Secluded, secure, and fully furnished.
                    </p>
                    <div className={styles.modul}>
                        <button className={styles.btn}>
                            View Awailable Dates
                        </button>
                    </div>
                </div>
                <div>
                    <img src="./Subtrack2.png" alt="photo" />
                    <h3>Open Desks</h3>
                    <p>
                        Great for freelancers and small teams.
                    </p>
                    <button>
                        <HiOutlineArrowLongRight/>
                    </button>
                </div>
                <div>
                    <img src="./Subtrack3.png" alt="photo" />
                    <h3>Meeting Rooms</h3>
                    <p>
                        Equipped with modern A/V tech.
                    </p>
                    <button>
                        <HiOutlineArrowLongRight/>
                    </button>
                </div>
                <div>
                    <img src="./Subtrack4.png" alt="photo" />
                    <h3>Virtual Office</h3>
                    <p>
                        Mail service and meeting room access.
                    </p>
                    <button>
                        <HiOutlineArrowLongRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Component4