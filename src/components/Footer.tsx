import "./scss/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} Djurappen. Alla rättigheter.</p>
        <p>
          Skapad av <a href="https://elverskog.netlify.app">Ludvig Elverskog</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
