import React from 'react';
import Link from "next/link";

function Header() {
    const navItems = [
        { name: 'home', href: '/' },
        { name: 'practice', href: '/practice' },
        { name: 'dashboard', href: '/dashboard' },
        { name: 'login', href: '/auth' },
    ]
    return (
        <header>
            <nav>
                <ul>
                    {navItems.map(item => (
                        <li key={item.href}>
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;