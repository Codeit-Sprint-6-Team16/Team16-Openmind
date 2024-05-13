import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '@ui/Profile';
import { getProfile } from '@api/get.js';

function ProfileContainer() {
  const [profile, setProfile] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams();

  const loadProfile = async () => {
    try {
      const response = await getProfile(id);
      setProfile(response);
    } catch (error) {
      if (error.name === 'TypeError') {
        setErrorMessage('네트워크를 확인하세요');
      } else if (error.name === 'HttpError') {
        setErrorMessage(error.status);
      }
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <Profile profile={profile} />
    </>
  );
}

export default ProfileContainer;
