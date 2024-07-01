// Achievements.js
import React from 'react';
import achievementsData from '../data/achivements.json';

// Import badge images
import silverBadge from '../images/silver.png';
import goldBadge from '../images/gold.png';
import bronzeBadge from '../images/bronze.png';

const Achievements = () => {
    const getBadgeImage = (badge) => {
        switch (badge) {
            case 'silver':
                return silverBadge;
            case 'gold':
                return goldBadge;
            case 'bronze':
                return bronzeBadge;
            default:
                return null; // Default case or handle additional badges
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Achievements</h2>
                <div className="flex space-x-4">
                    <div className="bg-white rounded-full px-4 py-2 shadow">
                        <span className="text-green-600 font-semibold">3300 Points</span>
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 shadow">
                        <span className="text-green-600 font-semibold">8 Badges</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {achievementsData.map((achievement) => (
                    <div
                        key={achievement.id}
                        className="flex flex-col items-center bg-white rounded-lg p-4 shadow"
                    >
                        <div className={` mb-2 relative`}>
                            <img
                                src={getBadgeImage(achievement.badge)}
                                alt={achievement.title}
                                className="w-40 h-40"
                            />
                            <p className="text-lg font-medium text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{achievement.title}</p>
                        </div>
                        <h3 className="text-lg font-medium mt-2">{achievement.title}</h3>
                        <p className="text-sm text-gray-500">{achievement.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
