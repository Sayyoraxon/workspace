import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import styles from "@/styles/Footer.module.css";

const FooterContacts = () => {
  return (
    <div className={styles.footercontacts}>
        <div>
            <FaPhoneAlt/>
            <p>
                ( +123 ) 456 7890
            </p>
        </div> 
        <div>
            <IoIosMail style={{fontSize: "19px"}}/>
            <p>
                workspace@mailservice.com
            </p>
        </div>  
        <div>
            <IoLocationSharp style={{fontSize: "22px"}}/>
            <p>
                123 Wanderer Street, Any State, City
            </p>
        </div> 
    </div>
  )
}

export default FooterContacts