import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Kiro</Link>
      <div className={styles.navitems}>
        {links.map(link =>(
         <Link  key={link.id} href={link.url}>{link.title}</Link>   
        ))}
      </div>
    </div>
  )
}

export default Navbar
