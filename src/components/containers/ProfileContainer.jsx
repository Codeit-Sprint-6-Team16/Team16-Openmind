import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProfile } from '@services/api/get.js';
import Profile from '@ui/Profile';

function ProfileContainer() {
  const [profile, setProfile] = useState();
  const { id } = useParams();

  const loadProfile = async () => {
    try {
      const response = await getProfile(id);
      setProfile(response);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return <Profile profile={profile} />;
}

export default ProfileContainer;
