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
        <nav className="relative flex flex-wrap justify-between items-center gap-2 md:gap-4 mb-4 pt-2 w-full mainNav">
            <div className="flex items-center gap-2 md:gap-4 w-full">
                <Link href="/" className="headerLogo">
                    <Image src={monkeyWorksLogo} alt="Netlify logo" />
                </Link>
                <div className="flex lg:flex-row flex-col items-center gap-2 md:gap-4 lg:pb-4 w-full navInsideWrapper">
                    <span className="inline-flex lg:flex w-full font-semibold text-xl">
                        Automotive Paint Booth Controls
                    </span>
                    {!!navItems?.length && (
                        <ul className="flex flex-wrap lg:justify-end gap-x-4 gap-y-1 mb-2 lg:mb-0 w-full navWrapper">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="inline-block content-between hover:opacity-80 text-lg lg:text-2xl transition"
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* <hr className="bg-zinc-900 w-1 h-2 navLine" /> */}
            </div>

            {/* {!!navItems?.length && (
                <ul className="desktopNav lg:flex flex-wrap gap-x-4 gap-y-1 hidden mb-2 lg:mb-0">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block content-between hover:opacity-80 px-1.5 md:px-3 py-1 sm:py-2 text-lg lg:text-2xl transition"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )} */}
        </nav>
    );
}
