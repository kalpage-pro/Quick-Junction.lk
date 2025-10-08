function Footer(){

    return(
        <footer>
        <div className="fbdy">
            <div className="col"><img src="logo.png" className="lgo" />
                <p> <h2>Welcome to Quick Junction lk</h2>
                 Your one-stop solution for all your quick service needs in Sri Lanka.
                 Whether you're looking for fast food, quick deliveries, or instant services, we've got you covered.
                 Explore our wide range of offerings and experience convenience like never before!</p>
            </div>

            <div className="col">
                <h3>Office <div className="underline"><span></span></div></h3>
                <p>De Kretser Place,</p>
                <p>Bambalapitiya,</p>
                <p>Colombo, Sri Lanka</p>
                <p className="email-id"> minidu099@gmail.com</p>
                <h4>+94-760319727</h4>
            </div>

            <div className="col">
                <h3>Links<div className="underline"><span></span></div></h3>
                <ol className="fot">
                    <li> <a href="#.html"> Contact </a></li>
                    <li> <a href="#.html"> Facility</a></li>
                    <li> <a href="#.html"> Jobs</a></li>
                    <li> <a href="#.html">Rating</a></li>
                    <li> <a href="# Us.html">About Us</a></li>
                </ol>
            </div>
            <div className="col">
                <h3>Newsletter<div className="underline"><span></span></div></h3>
                <form>
                    <img src="email.webp" className="mail" />
                    <input className="email" type="email" placeholder="Enter your email id" required />
                    <button type="submit" className="bmail"><img src="go.jpg" className="mail" /></button>
                </form>

                <div className="social-icon">
                    <a href="https://www.instagram.com"><img src="instagram.jpg" width="40px" height="40px" /></a>
                    <a href="https://www.facebook.com"><img src="facebook.png" width="40px" height="40px" /></a>
                    <a href="https://www.twitter.com"><img src="twitter.png" width="40px" height="40px" /></a>
                    <a href="https://www.google.com"><img src="web.png" width="40px" height="40px" /></a>
                </div>
            </div>
        </div>
        <hr />
        <p className="copyright"> Quick-Junction 2025 - All Rights Reserved</p>
    </footer>
    );
}

export default Footer;