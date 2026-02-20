import Link from "next/link";
import { Icon } from "@/components/utils";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-body">
          <div className="footer-container text-base lg:grid-cols-4 lgx:grid-cols-2">
            <div className="menu-item">
              <ul>
                <li className="font-bold">Headquarters</li>
                <li>8 The Green #23065</li>
                <li>Dover, DE, 19901</li>
                <li>
                  Contact Us:
                  <ul className="pl-2">
                    <li>
                      <span role="img" aria-label="Phone">📞</span> 302-404-4526
                    </li>
                    <li>
                      <span role="img" aria-label="Email">✉️</span> info@homemaxrg.com
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <ul>
                <li className="font-bold">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <ul>
                <li className="font-bold">
                  <Link href="/culture">Culture</Link>
                </li>
                <li>
                  <Link href="/culture/leadership" className="txt-warning">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="txt-warning">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/diversity-inclusion" className="txt-warning">
                    Diversity & Inclusion
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <ul>
                <li className="font-bold">
                  <Link href="/capabilities">Capabilities</Link>
                </li>
                <li>
                  <Link href="/capabilities/electric-power" className="txt-warning">
                    Electric Power
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/energy-efficiency" className="txt-warning">
                    Energy Efficiency
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/safety" className="txt-warning">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/interior-remodeling" className="txt-warning">
                    Interior Remodeling
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/exterior-remodeling" className="txt-warning">
                    Exterior Remodeling
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/restoration" className="txt-warning">
                    Restoration
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/generators" className="txt-warning">
                    Generators
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/maintenance-subscriptions" className="txt-warning">
                    Maintenance Subscriptions
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="menu-item">
              <ul>
                <li className='font-bold'>Careers</li>
                <li>
                  <Link href='/pay-benefits' className='txt-warning'>
                    Pay & Benefits
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="copyright-container">
            <div className="copyright-links">
              <div className="copyright-link flex">
                <Link href="https://www.facebook.com/HomeMaxRemodelingGroup" className="mr-5">
                  <Icon icon="facebook"/>
                </Link>
                <Link href="https://www.instagram.com/homemaxrg/">
                  <Icon icon="instagram" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden fixed bottom-0 left-0 w-full text-center">
            <a
              href="tel:+13024044526"
              className="inline-flex items-center justify-center w-full text-white py-2 px-4 rounded-full bg-orange-700 transition-colors font-bold"
            >
              <Icon icon="phone" /> Click To Call HomeMax
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
