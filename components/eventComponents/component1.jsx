import styles from "@/styles/Event.module.css";
import { BsChevronDown } from "react-icons/bs";



const Component1 = () => {
    return (
        <div className={styles.e_component1}>
            <div className={styles.compAbs}>
                <div>
                    <p>Month</p>
                    <h5>
                        January 2024
                    </h5>
                </div>
                <button>
                    <BsChevronDown />
                </button>
            </div>
            <img src="./Subtrack18.png" />
            <h1>Events in</h1>
            <h1>Workspace</h1>
            
        </div>
    )
}

export default Component1