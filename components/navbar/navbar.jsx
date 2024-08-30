import React, { useState } from 'react'
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import styles from "@/styles/Navbar.module.css";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { useRouter } from 'next/router';





const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.navbar}>
            <div>
                <img src="./logo.svg" alt="logo" style={{cursor: "pointer"}}
                    onClick={() => router.push('/')} />
                <div className={styles.hr}>
                </div>
                <div>
                    <img src="./logo1.svg" />
                </div>
            </div>

            {open &&
                <div className={styles.menu}>
                    <IoCloseSharp onClick={() => setOpen(false)} />
                    <Link href="./about"
                        onClick={() => setOpen(false)}>
                        About Workspaces
                    </Link>
                    <Link href="./careers"
                        onClick={() => setOpen(false)}>
                        Work in Workspace
                    </Link>
                    <Link href="./partnership"
                        onClick={() => setOpen(false)}>
                        Private Offices
                    </Link>
                    <Link href="./event"
                        onClick={() => setOpen(false)}>
                        Events in Workspace
                    </Link>
                </div>}

            <div>
                <IoSearchOutline style={{ color: pathname === "/" ? "#fff" : "#000" }} />
                <LiaBarsSolid style={{ color: pathname === "/" ? "#fff" : "#000", cursor: "pointer" }}
                    onClick={() => setOpen(true)} />
                <button>
                    Login
                </button>
            </div>

        </div>
    )
}

export default Navbar