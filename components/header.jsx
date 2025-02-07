import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import monkeyWorksLogo from 'public/images/logo.png';
const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Contact', href: '#contact' }
];

export function Header() {
    return (
        <nav className="relative flex flex-wrap justify-between items-center gap-4 sm:pt-2 mainNav">
            <div className="flex items-center gap-4">
                <Link href="/" className="headerLogo">
                    <Image src={monkeyWorksLogo} alt="Netlify logo" />
                </Link>
                <span className="font-semibold text-xl">Automotive Paint Booth Controls</span>
                <hr className="bg-zinc-900 w-1 h-2 navLine" />
            </div>

            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block content-between hover:opacity-80 px-1.5 sm:px-3 py-1 sm:py-2 text-2xl transition"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
