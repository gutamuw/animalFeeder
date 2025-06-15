import Button from "../components/Button";
import Router from "../routes/Routes";
import "./scss/Home.scss";

const Home = () => {
  return (
    <section className="hero-section wrapper">
      <div className="hero-bg">
        <div className="hero-content">
          <h1>
            Mata djur & <br></br> mata dem igen...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            facere, et impedit animi voluptas adipisci quisquam libero placeat
            beatae vero aut, amet saepe doloremque numquam quam dolores quia
            assumenda unde.
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              Router.navigate("/animals");
            }}
          >
            Se alla djur
          </Button>
        </div>

        <div className="hero-columns">
          <div className="hero-column">
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
          </div>
          <div className="hero-column">
            <h2>2m+</h2>
            <p>Användare</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
