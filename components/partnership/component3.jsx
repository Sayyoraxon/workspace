import styles from "@/styles/Partnership.module.css";

const Component3 = () => {
    return (
        <div className={styles.p_component3}>
            <div>
                <img src="./Subtrack26.png" alt="office" />
                <img src="./Subtrack27.png" alt="office" />
            </div>
            <video autoPlay loop muted>
                <source src="./video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Component3