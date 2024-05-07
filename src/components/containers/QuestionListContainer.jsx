import { useEffect, useState } from 'react';

import { getQuestionList } from '@services/api/get.js';

function QuestionListContainer(props) {
  const [questionList, setQuestionList] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadQuestions = async ({ id, offset, limit }) => {
    try {
      const response = await getQuestionList(id, offset, limit);
      setQuestionList(response.results);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  useEffect(() => {
    loadQuestions({
      id: window.localStorage.getItem('id'),
      offset: offset,
      limit: 3,
    });
  }, [offset]);

  return <QuestionList questionList={questionList} />;
}

export default QuestionListContainer;
