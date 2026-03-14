import Link from "next/link";

async function Page() {
    const navItems = [
        {name: 'verbs', href: '/practice/verbs'},
        {name: 'nouns', href: '/practice/nouns'},
    ]
    return (
        <main>
            <h1>Practice words page</h1>
            <ul>
                {navItems.map(item => (
                    <li key={item.href}>
                        <Link href={item.href}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Page;