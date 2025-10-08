
function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">

        {/*client logo*/}
        <div className="client-logos">
          <img src="/images/Amazon-logo.png" alt="Amazon Logo" />
          <img src="/images/McKesson_logo.svg.png" alt="McKesson Logo" />
          <img src="/images/Johnsons-Baby-Symbol.png" alt="Johnson & Johnson Logo" />
          <img src="/images/Dell_Logo.png" alt="Dell Logo" />
          <img src="/images/merck-1-e1637145445707.png" alt="Merck Logo" />
        </div>
<br /><br />
        {/* 
            # SECTION 2: CONTACT BANNER #
             */}
        <div className="contact-banner">
          <div className="banner-text">
            <h2>Contact Us for Legal Assistance</h2>
            <p>Experienced supporters ready to ready for your problems</p>
            <div className="banner-buttons">
              <button className="btn-dark">Our areas of resources</button>
              <button className="btn-light">
                New successes <span>→</span>
              </button>
            </div>
          </div>

       { /*  <div className="banner-image">
            <img src="/images/Amazon-logo.png" alt="Contact Banner" />
          </div>
        */}
        
          </div>
          <br />
        {/* 
        Links and Subscription
        */}
        <div className="footer-top">
          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Careers</h4>
            <ul>
              <li>Blog</li>
              <li>Press</li>
              <li>Partnerships</li>
              <li>Support</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>Events</li>
              <li>Community</li>
              <li>Social Media</li>
              <li>Newsletter</li>
              <li>Subscribe</li>
            </ul>
          </div>

          <div className="footer-section subscribe">
            <h4>Subscribe</h4>
            <p>Join our community to receive updates</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <small>By subscribing, you agree to our Privacy Policy</small>
          </div>
        </div>

        <hr />

        {/* 
           footer bottom
           
        */}
        <div className="footer-bottom">
          <h3 className="brand">by Minidu</h3>

          <div className="bottom-links">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>

          <div className="social-icons">
            <img src="/images/social_15466130.png" alt="Facebook" />
            <img src="/images/instagram_15713420.png" alt="Instagram" />
            <img src="/images/linkedin_2504923.png" alt="LinkedIn" />
            <img src="/images/twitter_5968830.png" alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
