import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@ui/Button';

const ReplyButtonContainer = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    console.log(localStorage.getItem('ID'));
    if (localStorage.getItem('ID')) {
      return navigate(`/post/${localStorage.getItem('ID')}/answer`);
    }
    navigate('/');
  };
  return (
    <Button variant={'outline'} size={'large'} onClick={onClickHandler}>
      답변하러 가기
    </Button>
  );
};

export default ReplyButtonContainer;
