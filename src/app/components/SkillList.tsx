"use client";

import { useState } from 'react';

const SkillList: React.FC = () => {
    const [skillInput, setSkillInput] = useState(''); // Input field for new skill
    const [skills, setSkills] = useState<string[]>([]); // State for list of skills

    // Function to handle adding a new skill
    const addSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput]);
            setSkillInput(''); // Clear input field
        }
    };

    // Function to handle deletion of a skill
    const handleDelete = (indexToRemove: number) => {
        setSkills(skills.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="p-4">
            {/* Input & Add Button */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8 text-center">
                <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Enter your skill"
                    className="border border-transparent focus:border-blue-500 rounded-lg px-4 py-2 w-full mb-3 text-blue-800 placeholder-blue-400 outline-none shadow-sm transition duration-300 ease-in-out transform hover:scale-105"
                />
                <button
                    onClick={addSkill}
                    className="bg-blue-800 text-white rounded-lg px-5 py-2 w-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300"
                >
                    Add Skill
                </button>
            </div>

            {/* Skills List with Delete Button */}
            <ul className="mt-5 space-y-3 w-full max-w-md mx-auto">
                {skills.map((skill, index) => (
                    <li 
                        key={index} 
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-md flex justify-between items-center transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        <span className="font-medium">{skill}</span>
                        
                        {/* Delete button */}
                        <button 
                            onClick={() => handleDelete(index)} 
                            className="text-white bg-red-500 rounded-full px-3 py-1 font-bold hover:bg-red-600 transition duration-300"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
