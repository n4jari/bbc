const Footer = () => {
  const menuItems = [
    {
      item1: "Home",
      item2: "Local",
    },
    {
      item1: "Sport",
      item2: "Food",
    },
    {
      item1: "Weather",
      item2: "Bitesize",
    },
    {
      item1: "iPlayer",
      item2: "Arts",
    },
    {
      item1: "Sounds",
      item2: "Taster",
    },
  ];
  return (
    <footer>
      <h2 className="title">Explore the BBC</h2>
      <div className="container">
        <div className="menu">
          {menuItems.map((item, index) => (
            <div className="column" key={index}>
              <span>{item.item1}</span>
              <span>{item.item2}</span>
            </div>
          ))}
        </div>

        <div className="links">
          <a href="#">Terms of Use</a>
          <a href="#">About the BBC</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">Accessibility Help</a>
          <a href="#">Parental Guidance</a>
          <a href="#">Contact the BBC</a>
          <a href="#">Get Personalised Newsletters</a>
        </div>

        <div className="copyright">
          <p>
            copyright {new Date().getUTCFullYear()} | &copy;
            <a href="http://n4jari.ir">najari.ir</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
