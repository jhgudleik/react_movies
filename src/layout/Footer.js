import  './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>© My App. All rights reserved. {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;
