import React, { useState } from 'react';

import styles from '../../pages/css/MainPage.module.css';
import { postId } from '@services/api/api';
import Button from '@ui/Button';
import Input from '@ui/Input';

const IdFormContainer = () => {
  const [name, setName] = useState('');

  const getPost = async () => {
    try {
      const result = await postId(name);
      alert('ID 등록완료');
      return result.id;
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
    const id = getPost();
    window.localStorage.setItem('Id', id);
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
