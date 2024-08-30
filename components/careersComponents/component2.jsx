import styles from "@/styles/Careers.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { RiUserFill } from "react-icons/ri";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";



const Component2 = () => {

    const datas = [
        {
            img: "./Subtrack1.png",
            title: "Private Office",
            subtitle: "Experience privacy and productivity in our fully furnished, secure Private Offices. Tailored for professionals, these secluded offices provide the ideal setting for focused work whether for office workers or freelancers.",
            size: "1 - 4 Persons",
            price: "From $699/month"
        },
        {
            img: "./Subtrack4.png",
            title: "Virtual Office",
            subtitle: "Establish your professional presence with our Virtual Office package. Enjoy mail services and access to meeting rooms, allowing you to project a prestigious image while maintaining flexibility.",
            size: "4 - 20 Persons",
            price: "From $999/month"
        },
        {
            img: "./Subtrack3.png",
            title: "Meeting Room",
            subtitle: "Elevate your meetings in our Meeting Rooms, equipped with state-of-the-art audio/visual technology. Host presentations and brainstorming sessions seamlessly in this inspiring, professional setting.",
            size: "4 - 12 Persons",
            price: "From $49/month"
        },
        {
            img: "./Subtrack2.png",
            title: "Open Desks",
            subtitle: "Ideal for freelancers and small teams, our Open Desks offer an open, energizing environment. Work efficiently in our high quality shared space that fosters work collaboration and team innovation.",
            size: "2 Persons per Desk",
            price: "From $199/month"
        }
    ]

    return (
        <div className={styles.c_component2}>
            <div className={styles.cards3}>
                {datas.map((data) => (
                    <div className={styles.card}>
                        <div>
                            <img src={data.img} alt="office" />
                            <div>
                                <h2>{data.title}</h2>
                                <button className={styles.btn1}>
                                    <HiOutlineArrowLongRight />
                                </button>
                            </div>
                        </div>
                        <div className={styles.absl}>
                            View Available Dates
                        </div>
                        <div>
                            <p>{data.subtitle}</p>
                            <div>
                                <div>
                                    <div>
                                        <RiUserFill />
                                        <p>{data.size}</p>
                                    </div>
                                    <div>
                                        <PiCurrencyCircleDollarFill />
                                        <p>{data.price}</p>
                                    </div>
                                </div>
                                <button className={styles.btn}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Component2