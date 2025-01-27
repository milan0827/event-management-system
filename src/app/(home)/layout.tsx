import Footer from "@/components/footer/Footer";
import NavButton from "@/components/nav-button/NavButton";
import Navbar from "@/components/navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar>
        <NavButton />
      </Navbar>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
