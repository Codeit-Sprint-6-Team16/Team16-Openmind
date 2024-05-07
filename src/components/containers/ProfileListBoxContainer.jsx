import { useEffect, useState } from 'react';

import ToggleMenuContainer from './ToggleMenuContainer';
import { getAnswerers } from '@services/api/get.js';
import PaginationBar from '@ui/PaginationBar';
import ProfileList from '@ui/ProfileList';
import { isTabletMini } from '@utils/windowSize';

function ProfileListBoxContainer() {
  const [profileList, setProfileList] = useState([]);
  const [order, setOrder] = useState('name');
  const [limit, setLimit] = useState(() => (isTabletMini() ? 6 : 8));

  const loadProfiles = async (options) => {
    try {
      const response = await getAnswerers(options);
      setProfileList(response.results);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  const handleOrder = (type) => {
    setOrder(type);
  };

  useEffect(() => {
    loadProfiles({
      offset: 0,
      limit: limit,
      sort: order,
    });
  }, [order, limit]);

  useEffect(() => {
    const handleSize = () => {
      isTabletMini() ? setLimit(6) : setLimit(8);
    };

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <>
      <ToggleMenuContainer onClick={handleOrder} />
      <ProfileList profileList={profileList} />
      <PaginationBar />
    </>
  );
}

export default ProfileListBoxContainer;
