import { Navbar, Welcome, Footer, Services, Transactions } from "../components";

const Service = () => (
  <>
    <Navbar />
    <section className="flex align-middle items-center justify-center min-h-screen">
      <Transactions />
    </section>
    <Footer />
  </>
);

export default Service;
