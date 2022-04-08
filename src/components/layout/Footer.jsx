import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <img className="logo" src={Logo} alt="logo" />
          <span>DESIGN BY BAO-ST - &#169; 2022. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
