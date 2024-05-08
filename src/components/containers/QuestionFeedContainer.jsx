import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getQuestionList } from '@services/api/get.js';
import QuestionFeed from '@ui/QuestionFeed';

function QuestionFeedContainer(props) {
  const [questionList, setQuestionList] = useState([]);
  const [offset, setOffset] = useState(0);
  const { id } = useParams();

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
      id: id,
      offset: offset,
      limit: 3,
    });
  }, [offset]);

  return <QuestionFeed questionList={questionList} />;
}

export default QuestionFeedContainer;
