const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p>
          Powered by <a href="https://reactjs.org">React</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
