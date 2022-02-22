import './footer.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <div className="footer">
      <div className="footer-year">
        Stan - {year}
      </div>
    </div>
  );
};

export default Footer;