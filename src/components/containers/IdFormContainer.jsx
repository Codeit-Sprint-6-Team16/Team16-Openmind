import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postId } from '@services/api/post';
import Button from '@ui/Button';
import IdForm from '@ui/IdForm';
import Input from '@ui/Input';

const IdFormContainer = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const registerId = async () => {
    let result;
    try {
      result = await postId(name);
      localStorage.setItem('ID', result.id);
      navigate(`/post/${localStorage.getItem('ID')}/answer`);
    } catch (error) {
      if (error.name === 'TypeError') alert('네트워크 에러');
      else if (error.name === 'HttpError')
        alert(`${error.name}: ${error.status}`);
      else if (error.name === 'Id Error!') alert(error.message);
    }
  };

  const onChangeInputHandler = (e) => {
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    registerId();
    setName('');
  };

  return (
    <IdForm>
      <form onSubmit={onSubmitHandler}>
        <Input onChangeHandler={onChangeInputHandler} name={name} />
        <Button variant={'fill'} type="submit" isDisabled={!name}>
          질문받기
        </Button>
      </form>
    </IdForm>
  );
};

export default IdFormContainer;
