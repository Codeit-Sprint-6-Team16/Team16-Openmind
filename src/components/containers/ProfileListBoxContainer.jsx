import { useEffect, useState } from 'react';

import { getAnswerers } from '@services/api/get.js';
import Loading from '@ui/Loading';
import ProfileListBox from '@ui/ProfileListBox';
import { isTabletMini } from '@utils/windowSize';

function ProfileListBoxContainer() {
  const [profileList, setProfileList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(() => (isTabletMini() ? 6 : 8));
  const [order, setOrder] = useState('time');
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadProfiles = async (options) => {
    try {
      setIsLoading(true);
      const response = await getAnswerers(options);
      setProfileList(response.results);
      loadPagination(response.count);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadPagination = (count) => {
    const numOfPage = Math.ceil(count / limit);
    let pageArray = [];
    for (let i = 1; i <= numOfPage; i++) pageArray.push(i);
    setPages(pageArray);
  };

  const orderClickHandler = (type) => {
    setOrder(type);
  };

  const paginationClickHandler = (num) => {
    if (num) {
      setOffset(limit * (num - 1));
      setCurrentPage(num);
    }
  };

  useEffect(() => {
    const resizeHandler = () => {
      isTabletMini() ? setLimit(6) : setLimit(8);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    loadProfiles({
      offset: offset,
      limit: limit,
      sort: order,
    });
  }, [order, limit, offset]);

  return !isLoading ? (
    <ProfileListBox
      profileList={profileList}
      order={order}
      onOrderClick={orderClickHandler}
      onPaginationClick={paginationClickHandler}
      pages={pages}
      currentPage={currentPage}
    />
  ) : (
    <Loading />
  );
}

export default ProfileListBoxContainer;
