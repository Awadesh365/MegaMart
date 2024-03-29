
import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        alert(`Thanks for Subscribing with email: ${email}`);
        setEmail('');
    };

    return (
        <div className='max-w-7xl mx-auto '>
            <div className=" mx-auto p-6 bg-white rounded-md shadow-md flex flex-col max-w-full">
                <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-4">Stay updated on the latest deals and promotions!</p>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    onClick={handleSubscribe}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
