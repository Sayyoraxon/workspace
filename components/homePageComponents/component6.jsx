import React from 'react'
import styles from "@/styles/Home.module.css";

const Component6 = () => {
    return (
        <div className={styles.h_component6}>
            <h1>Pricing Plan</h1>
            <div>
                <div className={styles.card1}>
                    <div>
                        <button>
                            Basic
                        </button>
                    </div>
                    <p>
                        Access to open public desk
                    </p>
                    <p>
                        Free Coffee Break & Snacks
                    </p>
                    <p>
                        High-Speed Wi-Fi Internet 
                    </p>
                    <hr/>
                    <div>
                        <p>
                            Charged per month Free trial available
                        </p>
                        <h2>
                            $199
                        </h2>
                    </div>
                </div>
                <div className={styles.card2}>
                    <div>
                        <button>
                            Premium
                        </button>
                    </div>
                    <p>
                        Access to public desk & private office
                    </p>
                    <p>
                        Meeting Room Access
                    </p>
                    <p>
                        24/7 Building Access
                    </p>
                    <p>
                         
                    </p>
                    <hr/>
                    <div>
                        <p>
                            Charged per month Free trial available
                        </p>
                        <h2>
                            $299
                        </h2>
                    </div>
                </div>
                <div className={styles.card3}>
                    <div>
                        <button>
                            Virtual
                        </button>
                    </div>
                    <p>
                        Enabled Business Address 
                    </p>
                    <p>
                        Monthly Mail PO-BOX Handling
                    </p>
                    <p>
                        2 Hours of Meeting Room Access Monthly 
                    </p>
                    <hr/>
                    <div>
                        <p>
                            Charged per month Free trial available
                        </p>
                        <h2>
                            $399
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component6