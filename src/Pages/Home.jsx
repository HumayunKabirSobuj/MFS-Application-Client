import { useEffect, useState } from "react";
import Loading from "../Component/Loading";


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-base-200 flex flex-col justify-between ">
            <header className="bg-primary text-primary-content p-4 fixed w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="lg:text-3xl text-xl font-bold">সহজ লেনদেন</h1>
                    <nav className="flex items-center">
                        <a href="/login" className="btn btn-secondary mx-2">লগইন</a>
                        <a href="/register" className="btn btn-accent mx-2">রেজিস্টার</a>
                    </nav>
                </div>
            </header>
            <main className="flex-grow container mx-auto py-16 text-center mt-[80px]">
                <h2 className="text-4xl font-bold mb-8">স্বাগতম</h2>
                <p className="text-lg mb-8">আমাদের মোবাইল ফিন্যান্সিয়াল সার্ভিস (MFS) অ্যাপ্লিকেশনে স্বাগতম। এখানে আপনি সহজেই অর্থ লেনদেন করতে পারবেন।</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title">নিরাপদ লেনদেন</h3>
                            <p className="text-left">আমাদের অ্যাপ্লিকেশনটি সর্বোচ্চ নিরাপত্তা নিশ্চিত করে।</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title">সহজ ব্যবহারের ইন্টারফেস</h3>
                            <p className="text-left">সহজ এবং ব্যবহার বান্ধব ইন্টারফেস।</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title">দ্রুত লেনদেন</h3>
                            <p className="text-left">দ্রুত এবং নির্ভুল লেনদেন।</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-primary text-primary-content p-4 text-center">
                <p>&copy; ২০২৪ সহজ লেনদেন</p>
            </footer>
        </div>
    );
};

export default Home;
