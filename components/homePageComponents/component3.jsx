import React from 'react'
import styles from "@/styles/Home.module.css";
import { RiLeafFill } from "react-icons/ri";
import { HiLightBulb, HiUserGroup } from 'react-icons/hi2';
import { CgExpand } from "react-icons/cg";




const Component3 = () => {

    return (
        <div className={styles.h_component3}>
            <div className={styles.title}>
                <h1>
                    Our Values
                </h1>
                <button>See More</button>
            </div>
            <div className={styles.cards}>
                <div>
                    <HiUserGroup /> 
                    <h3>
                        Community Building
                    </h3>
                    <p>
                        Building a space where
                        everyone feels welcome and
                        connected within the group.
                    </p>
                </div>
                <div >
                    <RiLeafFill />
                    <h3>
                        Sustainable Actions
                    </h3>
                    <p>
                        Committed to eco-friendly
                        practices by reducing our
                        energy usage for the future.
                    </p>
                </div>
                <div>
                    <HiLightBulb />
                    <h3>
                        Incubating
                        Innovations
                    </h3>
                    <p>
                        Fostering an environment that
                        encourages new ideas and growth
                        for our users.
                    </p>
                </div>
                <div>
                    <CgExpand />
                    <h3>
                        Room for
                        Flexibility
                    </h3>
                    <p>
                        Offering various workspaces to
                        suit your unique needs. Be flexible
                        as you need.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Component3