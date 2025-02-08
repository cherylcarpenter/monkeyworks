import { ContactForm } from './contactForm';
export default async function ContactUs() {
    return (
        <div className="bg-white p-6 w-full text-center contactBlock">
            <div className="flex flex-wrap justify-center content-center mb-6">
                <h2 className="text-2xl text-primary">Contact Us:</h2>
                <span className="flex flex-wrap justify-center content-center ml-4 text-secondary">
                    We&apos;d love to hear from you! Use the form or call{' '}
                    <a href="tel:1-800-555-5555" className="ml-2">
                        1-800-555-5555
                    </a>
                </span>
            </div>
            <ContactForm />
        </div>
    );
}
