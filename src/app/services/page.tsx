import Navbar from "../_components/navbar";
import Services from "./services";

export default function Home() {

  return (
    <div className="2xl:mx-96 xl:mx-72 lg:mx-60 md:mx-36 sm:mx-20 mx-10 min-h-screen">
      <nav className="sticky top-0">
        <Navbar />
      </nav>
      <main>
        <Services />
      </main>
    </div>
  );
}