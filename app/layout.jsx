import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
export const metadata = {
    title: {
        template: '%s',
        default: 'Monkeyworks Controls | Paint Booth Control Panels'
    },
    description:
        'High tech, low-maintenance paint booth control panels, professionally installed and serviced by MonkeyWorksControl.',
    robots: {
        index: false,
        follow: false,
        noindex: true
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link rel="canonical" href="https://monkeyworkscontrols.com" />
            </head>
            <body className="flex flex-col bg-zinc-500 text-white antialiased">
                <div className="flex flex-col bg-grid-pattern px-6 sm:px-12 grow">
                    <div className="flex flex-col mx-auto w-full max-w-5xl grow insideWrapper">
                        <Header />
                        <div className="mb-6 grow">{children}</div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
