import styles from "@/styles/Footer.module.css";
import FooterNav from "./footerNav";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import FooterContacts from "./footerContacts";


const Footer2 = ({ img }) => {
    return (
        <div className={styles.footer2}>
            <div>
                <img src={img} alt="img" />
                <img src="./Vector.svg" alt="logo"
                className={styles.logo}/>
                <h2>Let's Keep in</h2>
                <h3>Touch with us</h3>
                <p>
                    Contact us today to explore the
                    possibilities of our dynamic co-working
                    space. Your ideal workspace is just a
                    message or call away with us.
                </p>
            </div>
            <div>
                <FooterNav/>
                <div className={styles.inputdiv}>
                    <h2>Newsletter</h2>
                    <div>
                        <input type="text" placeholder="Enter your email address..."/>
                        <button>
                            <HiOutlineArrowLongRight/>
                        </button>
                    </div>
                </div>
                <FooterContacts/>
            </div>
        </div>
    )
}

export default Footer2