import styles from "@/styles/Partnership.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Component2 = () => {
  return (
    <div className={styles.p_component2}>
        <div>
            <h2>
                Enjoy our personal office with the ultimate facilities that we have prepared for you:
            </h2>
            <div>
                <FaCheckCircle />
                <p>
                    Personalized Concierge Service  
                </p>
            </div>
            <div>
                <FaCheckCircle />
                <p>
                    Customizable Workspace Design  
                </p>
            </div>
            <div>
                <FaCheckCircle />
                <p>
                    Complimentary Refreshments 
                </p>
            </div>
            <div>
                <FaCheckCircle />
                <p>
                    Premium Business Address  
                </p>
            </div>
            <p>
                These meticulously designed, fully furnished offices offer an exclusive, secure environment, fostering a sophisticated atmosphere for focused work. Success begins at WorkScape.
            </p>
        </div>

        <div>
            <p>
                Size
            </p>
            <h2>
                150 - 300 m<sup>2</sup>
            </h2>
            <p>Capacity</p>
            <h2>1 - 4 Persons</h2>
            <p>Price</p>
            <h2>Start from $699/mo</h2>
            <div>
                <p>
                    24/7 secure access for maximum flexibility and professionalism.
                </p>
                <button>
                    Book Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Component2