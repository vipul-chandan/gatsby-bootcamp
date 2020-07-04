import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    quote1
                    quote2
                }
            }
        }
    `)
    
    return (
        <div className={headerStyles.container}>
            <header className={headerStyles.header}>
                <p className={headerStyles.p}>
                    <Link className={headerStyles.title} to="/">
                        {data.site.siteMetadata.quote1} 
                         <span>
                            {data.site.siteMetadata.quote2}
                        </span>
                    </Link>
                </p>
                <nav className={headerStyles.nav}>
                    <div>
                        <Link className={headerStyles.navLogo} to="/">Plenteous</Link>
                    </div>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className={headerStyles.navRight}>
                        <ul className={headerStyles.navList}>
                            <li>
                                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/signup">Signup</Link>
                            </li>
                        </ul>  
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
