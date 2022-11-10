import { Link } from 'gatsby';
import * as React from 'react';
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css';

const Layout = ({ title, pageHeading, children }) => {
    return(
        <main className={container}>
            <title>{title}</title>            
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to='/'>Home Page</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to='/about'>About Page</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to='/contact'>Contact Page</Link></li>
                </ul>
            </nav>
            <h2 className={heading}>{pageHeading}</h2>
            {children}
        </main>
    );
}

export default Layout;