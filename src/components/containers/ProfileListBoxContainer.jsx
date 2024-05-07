import { useEffect, useState } from 'react';

import { getAnswerers } from '@services/api/get.js';
import ProfileList from '@ui/ProfileList';
import { isTabletMini } from '@utils/windowSize';

function ProfileListBoxContainer() {
  const [profileList, setProfileList] = useState([]);
  const [order, setOrder] = useState('name');
  const [limit, setLimit] = useState(isTabletMini ? 6 : 8);

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
    <div>
      {/* 정렬버튼에 prop으로 order state내려줍니다 */}
      <ProfileList profileList={profileList} />
      {/* 페이지네이션 */}
    </div>
  );
}

export default ProfileListBoxContainer;
