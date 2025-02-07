import Link from 'next/link';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import { CardsGrid } from 'components/cards-grid';
import { Hero } from 'components/hero';
import { ProductBullets } from 'components/productBullets';
import bullets from '../data/productBullets.json';
import ContactUs from 'components/contactUs';

const cards = [{ text: 'Hello', linkText: 'someLink', href: '/' }];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <>
            <Hero image="/images/istockphoto-916226534-1024x1024.jpg">
                <h1 className="font-bold text-secondary heroText">
                    Control your booth,
                    <br />
                    hassle-free
                </h1>
            </Hero>

            <main className="flex flex-col gap-8 sm:gap-16">
                <section className="flex flex-col items-start gap-3 sm:gap-4">
                    <ProductBullets
                        image="/images/monkeyworkspanel.jpg"
                        bulletOne={bullets[0].bullet}
                        bulletTwo={bullets[1].bullet}
                        bulletThree={bullets[2].bullet}
                        bulletFour={bullets[3].bullet}
                    ></ProductBullets>
                </section>
                <section className="flex justify-center items-center">
                    <ContactUs />
                </section>
                {/* {!!ctx && (
                    <section className="flex flex-col gap-4">
                        <Markdown content={contextExplainer} />
                        <RuntimeContextCard />
                    </section>
                )} */}
                {/* <section className="flex flex-col gap-4">
                    <Markdown content={preDynamicContentExplainer} />
                    <Markdown content={postDynamicContentExplainer} />
                </section>
                {!!cards?.length && <CardsGrid cards={cards} />} */}
            </main>
        </>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
