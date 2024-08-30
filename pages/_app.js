import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )

}
