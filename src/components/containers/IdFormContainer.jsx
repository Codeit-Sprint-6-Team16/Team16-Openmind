import React, { useState } from 'react';

import styles from '../../pages/css/MainPage.module.css';
import { postId } from '@services/api/api';
import Button from '@ui/Button';
import Input from '@ui/Input';

const IdFormContainer = () => {
  const [name, setName] = useState('');

  const getPost = async () => {
    let result;
    try {
      result = await postId(name);
      window.localStorage.setItem('ID', result.id);
      alert('ID 등록완료');
    } catch (error) {
      if (error.name === 'TypeError') alert('네트워크 에러');
      else if (error.name === 'HttpError')
        alert(`${error.name}: ${error.status}`);
      else if (error.name === 'IdError') alert(error.message);
    }
  };

  const onChangeInputHandler = (e) => {
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getPost();
    setName('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input onChangeHandler={onChangeInputHandler} name={name} />
      <Button type="submit" isDisabled={!name}>
        질문받기
      </Button>
    </form>
  );
};

export default IdFormContainer;
