import React from 'react'
import styles from "@/styles/Home.module.css";
import { RiLeafFill } from "react-icons/ri";
import { HiLightBulb, HiUserGroup } from 'react-icons/hi2';
import { CgExpand } from "react-icons/cg";




const Component3 = () => {

    const handleSelect = (div) => {
        const cards = Array.from(div.parentElement.children)
        cards.forEach((item)=>{
            item.classList.remove(styles.brown)
        })

        
        div.classList[0] === "div"  && div.classList.add(styles.brown)
        
    }

    return (
        <div className={styles.h_component3}>
            <div className={styles.title}>
                <h1>
                    Our Values
                </h1>
                <button>See More</button>
            </div>
            <div className={styles.cards}>
                <div className="div" 
                onClick={(e)=>handleSelect(e.target)}>
                    <HiUserGroup /> 
                    <h3 onClick={(e)=>handleSelect(e.target.parentElement)}>
                        Community Building
                    </h3>
                    <p onClick={(e)=>handleSelect(e.target.parentElement)}>
                        Building a space where
                        everyone feels welcome and
                        connected within the group.
                    </p>
                </div>
                <div className="div"
                onClick={(e)=>handleSelect(e.target)}>
                    <RiLeafFill />
                    <h3 onClick={(e)=>handleSelect(e.target.parentElement)}>
                        Sustainable Actions
                    </h3>
                    <p onClick={(e)=>handleSelect(e.target.parentElement)}>
                        Committed to eco-friendly
                        practices by reducing our
                        energy usage for the future.
                    </p>
                </div>
                <div className="div" 
                onClick={(e)=>handleSelect(e.target)}>
                    <HiLightBulb />
                    <h3 onClick={(e)=>handleSelect(e.target.parentElement)}>
                        Incubating
                        Innovations
                    </h3>
                    <p onClick={(e)=>handleSelect(e.target.parentElement)}>
                        Fostering an environment that
                        encourages new ideas and growth
                        for our users.
                    </p>
                </div>
                <div className="div" 
                onClick={(e)=>handleSelect(e.target)}>
                    <CgExpand />
                    <h3 onClick={(e)=>handleSelect(e.target.parentElement)}>
                        Room for
                        Flexibility
                    </h3>
                    <p onClick={(e)=>handleSelect(e.target.parentElement)}>
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