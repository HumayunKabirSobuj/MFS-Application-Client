import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const handleUserRegister = () => {
        navigate('/register/user');
    };

    const handleAgentRegister = () => {
        navigate('/register/agent');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">রেজিস্টার</h2>
                <div className="flex justify-center mb-4 gap-5">
                    <button
                        onClick={handleUserRegister}
                        className={`btn bg-[#29E384] btn-active`}
                    >
                        ইউজার রেজিস্টার
                    </button>
                    <button
                        onClick={handleAgentRegister}
                        className={`btn bg-[#29E384] btn-active`}
                    >
                        এজেন্ট রেজিস্টার
                    </button>
                </div>
                <p className="mt-4 text-center font-bold">
                    ইতিমধ্যেই একটি অ্যাকাউন্ট আছে? <a href="/login" className="text-primary hover:underline">লগইন করুন</a>
                </p>
            </div>
        </div>
    );
};

export default Register;





