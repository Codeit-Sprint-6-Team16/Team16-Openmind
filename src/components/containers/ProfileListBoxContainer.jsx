import { useEffect, useState } from 'react';
import Loading from '@ui/Loading';
import ProfileListBox from '@ui/ProfileListBox';
import { getAnswerers } from '@api/get.js';
import { isTabletMini } from '@utils/windowSize';

function ProfileListBoxContainer() {
  const [profileList, setProfileList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(() => (isTabletMini() ? 6 : 8));
  const [order, setOrder] = useState('time');
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadProfiles = async (options) => {
    try {
      setIsLoading(true);
      const response = await getAnswerers(options);
      setProfileList(response.results);
      loadPagination(response.count);
    } catch (error) {
      if (error.name === 'TypeError') {
        setErrorMessage('네트워크를 확인하세요');
      } else if (error.name === 'HttpError') {
        setErrorMessage(error.status);
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
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <ProfileListBox
        profileList={profileList}
        order={order}
        onOrderClick={orderClickHandler}
        onPaginationClick={paginationClickHandler}
        pages={pages}
        currentPage={currentPage}
      />
    </>
  ) : (
    <Loading />
  );
}

export default ProfileListBoxContainer;
