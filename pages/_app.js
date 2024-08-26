import Footer1 from "@/components/footer/footer1";
import Footer from "@/components/footer/footerNav";
import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <Component {...pageProps} />
      <Footer1 urlImg = "./Subtrack7.png"/>
    </div>
  )

}
