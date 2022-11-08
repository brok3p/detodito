const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer-container">
            <span>&copy; {year} - detodito</span>
        </footer>
    );
}
export default Footer;