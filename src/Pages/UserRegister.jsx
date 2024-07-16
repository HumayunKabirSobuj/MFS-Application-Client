import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const table={name, email, mobileNumber, pin};
        console.table(table)

        if (name && email && mobileNumber && pin) {
            // রেজিস্ট্রেশন সফল হলে লগইন পেজে নেভিগেট করুন
            // navigate('/login');
        } else {
            setError('অনুগ্রহ করে সমস্ত ফিল্ড পূরণ করুন');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">ইউজার রেজিস্ট্রেশন</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">নাম</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">ইমেল</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="mobileNumber">মোবাইল নম্বর</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="pin">পিন</label>
                        <input
                            type="password"
                            id="pin"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-focus transition duration-300"
                    >
                        রেজিস্টার
                    </button>
                </form>
                <p className="mt-4 text-center">
                    ইতিমধ্যেই একটি অ্যাকাউন্ট আছে? <a href="/login" className="text-primary hover:underline">লগইন করুন</a>
                </p>
            </div>
        </div>
    );
};

export default UserRegister;
