export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section">
      <div className="container">
        <div className="grid-2">
          {/* Contact Information */}
          <div>
            <h3 className="spaced-text mb-6">GET IN TOUCH</h3>
            <div className="space-y-3">
              <p>📧 karl@karlmcclelland.com</p>
              <p>📱 Available for bookings worldwide</p>
              <p>📍 Professional photographer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="spaced-text mb-6">NAVIGATION</h3>
            <div className="space-y-3">
              <div><a href="#work" className="text-gray hover:text-black transition-colors">My Work</a></div>
              <div><a href="#case-studies" className="text-gray hover:text-black transition-colors">Case Studies</a></div>
              <div><a href="#story" className="text-gray hover:text-black transition-colors">My Story</a></div>
              <div><a href="#contact" className="text-gray hover:text-black transition-colors">Contact</a></div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-light mt-16 pt-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="spaced-text text-small">KARL MCCLELLAND PHOTOGRAPHY</p>
              <p className="text-gray text-small mt-2">Professional photography services</p>
            </div>
            <div className="text-right">
              <p className="text-gray text-small">
                © {currentYear} Karl McClelland. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
