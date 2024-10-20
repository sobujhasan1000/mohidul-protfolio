import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-2">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default CommonLayOut;
