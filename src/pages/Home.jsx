import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default Home;
