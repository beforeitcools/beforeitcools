import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                <Link to="/"><img src="/images/footer-logo.png" alt="푸터 로고" /></Link>
                <div className="ft-right">
                    <p>
                        LOCA Trip<br/>
                        <small>Copyright © 2025 LOCAT. All Rights Reserved.</small>
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;