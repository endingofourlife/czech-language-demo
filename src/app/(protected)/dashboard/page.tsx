import Link from "next/link";

function Page() {
    const navItems = [
        { name: 'verbs', href: '/dashboard/verbs' },
        { name: 'nouns', href: '/dashboard/nouns' },
    ]
    return (
        <main>
            <h1>Dashboard page</h1>
            <ul>
                {navItems.map(item => (
                    <li key={item.href}>
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Page;