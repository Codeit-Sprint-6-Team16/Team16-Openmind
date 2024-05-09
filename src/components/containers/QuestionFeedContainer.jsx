import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProfile, getQuestionList } from '@services/api/get.js';
import QuestionFeed from '@ui/QuestionFeed';

function QuestionFeedContainer() {
  const [questionList, setQuestionList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [profile, setProfile] = useState();
  const { id } = useParams();

  const loadQuestions = async ({ id, offset, limit }) => {
    try {
      const response = await getQuestionList(id, offset, limit);
      setQuestionList(response);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  const loadProfile = async () => {
    try {
      const response = await getProfile(id);
      setProfile(response);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    loadQuestions({
      id: id,
      offset: offset,
      limit: 3,
    });
  }, [offset]);

  return (
    questionList &&
    profile && <QuestionFeed questionList={questionList} profile={profile} />
  );
}

export default QuestionFeedContainer;
