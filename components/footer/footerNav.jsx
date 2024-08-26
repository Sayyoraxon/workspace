import React from 'react'
import styles from "@/styles/Footer.module.css";
import Link from 'next/link';

const FooterNav = () => {
  return (
    <div className={styles.footernav}>
      <div>
        <p>
          Company
        </p>
        <Link href={"./about"}>
          About Us
        </Link>
        <Link href={"#"}>
          Careers
        </Link>
        <Link href={"#"}>
          Contact
        </Link>
      </div>
      <div>
        <p>
          Community
        </p>
        <Link href={"#"}>
          Event
        </Link>
        <Link href={"#"}>
          Stories
        </Link>
        <Link href={"#"}>
          Partnership
        </Link>
      </div>
      <div>
        <p>
          Resources
        </p>
        <Link href={"#"}>
          Blog
        </Link>
        <Link href={"#"}>
          FAQ
        </Link>
        <Link href={"#"}>
          Support
        </Link>
      </div>
    </div>
  )
}

export default FooterNav