'use client';

import { useState } from 'react';
import { Card } from './card';

export function ContactForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            console.log('Form submitted:', formData.toString(), myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <form
            name="info"
            className="flex flex-wrap gap-3 text-black align-center"
            onSubmit={handleFormSubmit}
            method="POST"
        >
            <p className="hidden">
                <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            <div className="flex flex-col flex-1 gap-4">
                <input type="hidden" name="form-name" value="info" />
                <input name="name" type="text" placeholder="Name" required className="input-bordered input" />
                <input name="email" type="text" placeholder="Email (optional)" className="input-bordered input" />
                <input name="phone" type="text" placeholder="Phone" required className="input-bordered input" />
            </div>
            <div className="flex flex-col flex-1 gap-1">
                <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    required
                    className="input-bordered textarea"
                    rows="8"
                />
                <div data-netlify-recaptcha="true"></div>

                <button className="btn btn-secondary" type="submit" disabled={status === 'pending'}>
                    Submit
                </button>
                {status === 'ok' && (
                    <div className="alert alert-success">
                        <SuccessIcon />
                        Submitted!
                    </div>
                )}
                {status === 'error' && (
                    <div className="alert alert-error">
                        <ErrorIcon />
                        {error}
                    </div>
                )}
            </div>
        </form>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon(success) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
