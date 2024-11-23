"use client";
import SkillList from './components/SkillList';
import { useState } from 'react';

const Home: React.FC = () => {
    const [showSkills, setShowSkills] = useState(false);
    
    return (
        <div 
            className="min-h-screen flex items-center justify-center p-5" 
            style={{ background: 'linear-gradient(135deg, #9ab0c6, #e57373)' }} 
        >
            <div className="bg-gray-50 w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-2xl p-10 text-center">

                {/* Header */}
                <h1 className="text-4xl font-bold text-blue-900 mb-4"> Professional Resume </h1>

                {/* Personal Information */}
                <h2 className="text-2xl font-semibold text-blue-700 mb-6">Personal Information</h2>
                <div className="space-y-4">
                    {["Name", "Email", "Phone", "LinkedIn", "GitHub"].map((label, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <label className="w-28 font-semibold text-lg text-blue-900">{label}</label>
                            <input 
                                type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"}
                                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 text-blue-900 focus:border-blue-500 outline-none transition duration-200"
                            />
                        </div>
                    ))}
                </div>

                {/* Education */}
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Education</h2>
                <div className="flex justify-center space-x-6 text-lg font-medium text-blue-800">
                    {["Matric", "Intermediate", "Bachelor's", "Master's", "PhD"].map((degree, index) => (
                        <span key={index} className="hover:underline cursor-pointer transition">{degree}</span>
                    ))}
                </div>

                {/* Work Experience */}
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4"> Work Experience</h2>
                <div className="space-y-4 px-6">
                    {["Company", "Role"].map((label, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <label className="font-semibold text-lg text-blue-900 w-28">{label}</label>
                            <input 
                                type="text" 
                                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 text-blue-900 focus:border-blue-500 outline-none transition duration-200"
                            />
                        </div>
                    ))}
                </div>

                {/* Show/Hide Skills Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowSkills(!showSkills)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        {showSkills ? "Hide Skills" : "Show Skills"}
                    </button>
                </div>

                {/* Skills Section */}
                {showSkills && (
                    <div className="mt-6 px-6 text-blue-800 text-lg">
                        <SkillList />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;



