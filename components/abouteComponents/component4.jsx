import styles from "@/styles/Aboute.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const Component4 = () => {
    return (
        <div className={styles.a_component4}>
            <h1>
                Our Work Facilities
            </h1>
            <div>
                <div>
                    <img src="./Subtrack9.png" />
                    <div>
                        <p>Modern Meeting Room</p>
                        <button>
                            <HiOutlineArrowLongRight/>
                        </button>
                    </div>

                </div>

                <div className={styles.middle}>
                    <img src="./Subtrack11.png"/>
                    <h2>Comfortable</h2>
                    <h2 className={styles.last}>Lounge Areas</h2>
                    <p>
                        Spaces designed for relaxation 
                        and collaboration, completed with 
                        fun recreational zones.  
                    </p>
                </div>

                <div>
                    <img src="./Subtrack10.png" />
                    <div>
                        <p>Gourmet Coffee Bar</p>
                        <button>
                            <HiOutlineArrowLongRight/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Component4