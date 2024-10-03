import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilesData from '../data/profiles'; // Mock data or fetched from an API

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Here you would fetch data from a database like Firebase
    setProfiles(profilesData);  // Using mock data for now
  }, []);

  return (
    <div className="profile-list">
      <h1>Profile List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card p-4 border rounded shadow">
            <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mx-auto" />
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p>{profile.description}</p>
            <Link to={`/profile/${profile.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                Summary
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
