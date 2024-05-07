import { useCallback, useEffect, useMemo, useState } from 'react';

import { getProfile } from '@services/api/get.js';
import Profile from '@ui/Profile';

function ProfileContainer() {
  const [profile, setProfile] = useState();

  const loadProfile = async (id) => {
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
    const id = window.localStorage.getItem('id');
    loadProfile(id);
  }, []);

  return <Profile profile={profile} />;
}

export default ProfileContainer;
