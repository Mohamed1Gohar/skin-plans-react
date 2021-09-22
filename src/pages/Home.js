
import Header from "../components/Header";
import About from "../components/About";
import Disclaimer from "../components/Disclaimer";
const Home = () => {
  return (
    <>
      <Header />
      <main className="m-lg-5 ">
        <About />
      </main>
      <Disclaimer />
    </>
  );
};

export default Home;
