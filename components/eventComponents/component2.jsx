import styles from "@/styles/Event.module.css";
import { GoBell } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

;


const Component2 = () => {

  const datas = [
    {
      img: "./Subtrack19.png",
      title: "Connect & Collaborate Mixer",
      subtitle: "Join us for an evening of networking and collaboration. Connect with fellow professionals and explore opportunities in our vibrant co-working community.",
      date: "10 JANUARY",
      time: "06:00 PM - 08:00 PM"
    },
    {
      img: "./Subtrack20.png",
      title: "Innovate & Elevate Idea Workshop",
      subtitle: "Dive into the latest trends and techniques. This workshop series is designed to inspire creativity and provide actionable insights for professional growth.",
      date: "14 JANUARY",
      time: "03:00 PM - 05:00 PM"
    },
    {
      img: "./Subtrack21.png",
      title: "2023 Tech & Business Trends Discussion",
      subtitle: "Stay ahead in the tech game with our Tech Talk agenda. Discover the latest innovations and engage in discussions with industry experts.",
      date: "17 JANUARY",
      time: "04:00 PM - 07:00 PM"
    },
    {
      img: "./Subtrack22.png",
      title: "Wellness & Mental Health Talks",
      subtitle: "Take a break from your desk and join us for a rejuvenating meditation session. Enhance your well-being and find balance in the midst of your busy workday.",
      date: "21 JANUARY",
      time: "10:00 PM - 12:00 PM"
    },
    {
      img: "./Subtrack23.png",
      title: "TGIF Special Work Happy Hour",
      subtitle: "Celebrate the end of the week with us. Unwind, socialize, and enjoy special refreshments in a relaxed and friendly atmosphere.",
      date: "23 JANUARY",
      time: "05:00 PM - 10:00 PM"
    }
  ]

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className={styles.e_component2}>
      <Swiper
        pagination={pagination}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {datas.map((data, i) => (
            <div key={i} className={styles.card}>
              <div>
                <img src={data.img} alt="img" />
              </div>
              <div className={styles.card_desc}>
                <h2>{data.title}</h2>
                <p>{data.subtitle}</p>
              </div>
              <div>
                <div>
                  <div>
                    <h5>{data.date}</h5>
                    <p>{data.time}</p>
                  </div>
                  <button>
                    <GoBell />
                  </button>
                </div>
                <button>
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </SwiperSlide>

        <SwiperSlide>
          {datas.map((data, i) => (
            <div key={i} className={styles.card}>
              <div>
                <img src={data.img} alt="img" />
              </div>
              <div className={styles.card_desc}>
                <h2>{data.title}</h2>
                <p>{data.subtitle}</p>
              </div>
              <div>
                <div>
                  <div>
                    <h5>{data.date}</h5>
                    <p>{data.time}</p>
                  </div>
                  <button>
                    <GoBell />
                  </button>
                </div>
                <button>
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </SwiperSlide>

        <SwiperSlide>
          {datas.map((data, i) => (
            <div key={i} className={styles.card}>
              <div>
                <img src={data.img} alt="img" />
              </div>
              <div className={styles.card_desc}>
                <h2>{data.title}</h2>
                <p>{data.subtitle}</p>
              </div>
              <div>
                <div>
                  <div>
                    <h5>{data.date}</h5>
                    <p>{data.time}</p>
                  </div>
                  <button>
                    <GoBell />
                  </button>
                </div>
                <button>
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Component2