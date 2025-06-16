import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
