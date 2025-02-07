import Link from 'next/link';

export function Footer() {
    const dateTime = () => {
        let date = new Date().toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles'
        });
        return new Date().getFullYear();
    };
    return (
        <footer className="pt-16 sm:pt-24 pb-12 sm:pb-16 footer">
            {/* <p className="text-sm">
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="hover:opacity-80 text-primary underline underline-offset-8 transition decoration-dashed"
                >
                    Next.js on Netlify
                </Link>
            </p> */}
            <div className="col">
                <p className="text-sm">&copy; {dateTime()} MonkeyWorksControls. All rights reserved.</p>
            </div>
        </footer>
    );
}
