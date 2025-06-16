import { motion } from "framer-motion";
import Button from "../components/Button";
import Router from "../routes/Routes";
import "./scss/Home.scss";

const Home = () => {
  return (
    <section className="hero-section wrapper">
      <div className="hero-bg">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Mata djur & <br></br> mata dem igen...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            facere, et impedit animi voluptas adipisci quisquam libero placeat
            beatae vero aut, amet saepe doloremque numquam quam dolores quia
            assumenda unde.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="secondary"
              onClick={() => {
                Router.navigate("/animals");
              }}
            >
              Se alla djur
            </Button>
          </motion.div>
        </div>

        <div className="hero-columns">
          <motion.div
            className="hero-column"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <img
              src="https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div>
              <h2>Våra djur mår fett bra</h2>
              <p>
                Mata våra djur direkt i appen, utan att logga in. Simpelt, som
                det ska vara!
              </p>
            </div>
          </motion.div>
          <motion.div
            className="hero-column"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <h2>2m+</h2>
            <p>Användare</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
