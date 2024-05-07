import { BASE_URL } from './api';

const putAnswer = async (answerId, content = '', isRejected = false) => {
  if (!content) return;

  let response;
  try {
    response = await fetch(`${BASE_URL}answers/${answerId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ content: content, isRejected: isRejected }),
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

const patchAnswer = async ({ answerId, content = '', isRejected = null }) => {
  if (!content && isRejected) return;

  let response;
  try {
    const answer = {
      ...(content && { content: content }),
      ...(isRejected !== null && { isRejected: isRejected }),
    };
    response = await fetch(`${BASE_URL}answers/${answerId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify(answer),
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

export { putAnswer, patchAnswer };
