import { BASE_URL } from './api';

const postId = async (nameData = '') => {
  if (!nameData) return;
  if (localStorage.getItem('ID')) {
    const error = new Error();
    error.name = 'Id Error!';
    error.message = '이미 아이디가 존재합니다.';
    throw error;
  }
  let response;
  try {
    response = await fetch(`${BASE_URL}subjects/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ name: nameData }),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = 'HttpError';
    error.status = response.status;
    console.error(error);
    throw error;
  }
  const result = await response.json();
  return result;
};

const postQuestion = async (answererId = 0, content = '') => {
  if (!content) return;

  let response;
  try {
    const url = BASE_URL + `subjects/${answererId}/questions/`;
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ content: content }),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = 'HttpError';
    error.status = response.status;
    console.error(error);
    throw error;
  }
};

const postAnswer = async (questionId, contentData = '') => {
  if (!contentData) return;

  let response;
  try {
    response = await fetch(`${BASE_URL}questions/${questionId}/answers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ content: contentData, isRejected: false }),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = 'HttpError';
    error.status = response.status;
    console.error(error);
    throw error;
  }
};

const postReaction = async (questionId, type = 'like') => {
  let response;
  try {
    response = await fetch(`${BASE_URL}questions/${questionId}/reaction/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ type: type }),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = 'HttpError';
    error.status = response.status;
    console.error(error);
    throw error;
  }
};

export { postId, postQuestion, postAnswer, postReaction };
