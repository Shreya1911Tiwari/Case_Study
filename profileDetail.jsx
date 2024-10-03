import React from 'react';
import { useParams } from 'react-router-dom';
import profilesData from '../data/profiles'; // Mock data or fetched from an API
import MapComponent from './MapComponent';


const ProfileDetail = () => {
  const { id } = useParams();
  const profile = profilesData.find((p) => p.id === parseInt(id));

  return (
    <div className="profile-detail p-6">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full my-4" />
      <p>{profile.description}</p>
      <h3 className="mt-4 text-xl">Location:</h3>
      <MapComponent address={profile.address} />
    </div>
  );
};

export default ProfileDetail;
