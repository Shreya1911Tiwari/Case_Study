import React, { useState } from 'react';
import profilesData from '../data/profiles';


const AdminPanel = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: { lat: '', lng: '' }
  });

  const addProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: '', photo: '', description: '', address: { lat: '', lng: '' } });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProfile.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProfile.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="lat"
          placeholder="Latitude"
          value={newProfile.address.lat}
          onChange={(e) =>
            setNewProfile({ ...newProfile, address: { ...newProfile.address, lat: e.target.value } })
          }
        />
        <input
          type="number"
          name="lng"
          placeholder="Longitude"
          value={newProfile.address.lng}
          onChange={(e) =>
            setNewProfile({ ...newProfile, address: { ...newProfile.address, lng: e.target.value } })
          }
        />
        <button onClick={addProfile}>Add Profile</button>
      </div>
    </div>
  );
};

export default AdminPanel;
