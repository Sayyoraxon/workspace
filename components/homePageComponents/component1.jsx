import React from 'react'
import styles from "@/styles/Home.module.css";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";


const Component1 = () => {
    return (
        <div className={styles.h_component1}>
            <video autoPlay loop muted>
                <source src="./video.mp4" type="video/mp4" />
            </video>
            <div className={styles.abs1}>
                <h1>
                    Work Better,
                </h1>
                <div>
                    <div>
                        <img src="./Ellipse1.png" alt="ellipce" />
                        <img src="./Ellipse2.png" alt="ellipce" />
                        <img src="./Ellipse3.png" alt="ellipce" />
                        <button> + </button>
                    </div>
                    <h1>Together</h1>
                </div>
                <button>Book Now</button>
                <button>Read More</button>
            </div>
            <div className={styles.abs2}>
                <div>
                    <p>
                        Our new location is finally
                        open for public! Get ready for
                        our grand opening promotion.
                    </p>
                    <h1 className={styles.text1}>
                        New
                    </h1>
                    <h1 className={styles.text2}>
                        Location
                    </h1>
                    <img src="./office.png" alt="office" className={styles.img}/>
                    <button>
                       <HiOutlineArrowLongRight /> 
                    </button>
                </div>
            </div>
            <div className={styles.abs3}>
                <p>
                An inspiring co-working environment designed for freelancers and teams to achieve greatness. 
                </p>
            </div>

            <div className={styles.abs4}>
                <HiOutlineArrowLongLeft/>
                <HiOutlineArrowLongRight /> 
            </div>
        </div>
    )
}

export default Component1