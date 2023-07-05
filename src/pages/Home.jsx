import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default Home;
