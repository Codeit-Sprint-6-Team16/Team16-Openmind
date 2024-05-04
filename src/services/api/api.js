const BASE_URL = 'https://openmind-api.vercel.app/6-16/';

export const postId = async (nameData = '') => {
  if (!nameData) {
    return;
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

  if (!response?.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = 'HttpError';
    error.status = response.status;
    console.error(error);
    throw error;
  }
  const result = await response.json();
  window.localStorage.setItem('id', result.id);
  return result;
};

const postAnswer = async (questionId, contentData = '') => {
  if (!contentData) {
    return;
  }
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
  if (!response?.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = 'HttpError';
    error.status = response.status;
    console.error(error);
    throw error;
  }
};

const getAnswerer = async (answererId = 0) => {
  const url = BASE_URL + `subjects/${answererId}/`;
  const response = await fetch(url);
  if (response.ok) {
    const body = await response.json();
    return body;
  } else {
    if (response.status === 0) {
      return new Error(response.text());
    }
    return new Error(response.status);
  }
  return;
};

const getProfile = async (answererId = 0) => {
  const url = BASE_URL + `subjects/${answererId}/`;
  const response = await fetch(url);

  const error = checkResponse(response);
  if (error) return console.error(error);

  const body = await response.json();
  return body;
};

const getAnswerers = async ({ offset = 0, limit = 8, sort = 'name' }) => {
  const url =
    BASE_URL + `subjects/?offset=${offset}&limit=${limit}&sort=${sort}`;
  const response = await fetch(url);

  const error = checkResponse(response);
  if (error) return console.error(error);

  const body = await response.json();
  return body;
};

const getQuestionList = async (answererId = 0, offset = 0, limit = 3) => {
  const url =
    BASE_URL +
    `subjects/${answererId}/questions/?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);

  const error = checkResponse(response);
  if (error) return console.error(error);

  const body = await response.json();
  return body;
};

const postQuestion = async (answererId = 0, content = '') => {
  if (!content) {
    return;
  }
  const url = BASE_URL + `subjects/${answererId}/questions/`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
    },
    body: JSON.stringify({ content: content }),
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

const postAnswer = async (questionId, contentData = '') => {
  if (!contentData) {
    return;
  }
  const response = await fetch(`${BASE_URL}questions/${questionId}/answers/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
    },
    body: JSON.stringify({ content: contentData, isRejected: false }),
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

const postReaction = async (questionId, type = 'like') => {
  const response = await fetch(`${BASE_URL}questions/${questionId}/reaction/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
    },
    body: JSON.stringify({ type: type }),
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

const putAnswer = async (answerId, content = '', isRejected = false) => {
  if (!content) return;
  console.log(`${BASE_URL}answers/${answerId}`);
  const response = await fetch(`${BASE_URL}answers/${answerId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
    },
    body: JSON.stringify({ content: content, isRejected: isRejected }),
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

const patchAnswer = async ({ answerId, content = '', isRejected = null }) => {
  if (!content && isRejected) return;
  const answer = {
    ...(content && { content: content }),
    ...(isRejected !== null && { isRejected: isRejected }),
  };
  const response = await fetch(`${BASE_URL}answers/${answerId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
    },
    body: JSON.stringify(answer),
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

const deleteProfile = async (answererId) => {
  const response = await fetch(`${BASE_URL}subjects/${answererId}/`, {
    method: 'DELETE',
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

const deleteQuestion = async (questionId) => {
  const response = await fetch(`${BASE_URL}questions/${questionId}/`, {
    method: 'DELETE',
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

const deleteAnswer = async (answerId) => {
  const response = await fetch(`${BASE_URL}answers/${answerId}/`, {
    method: 'DELETE',
  });

  const error = checkResponse(response);
  if (error) return console.error(error);
};

export {
  getProfile,
  getAnswerers,
  getQuestionList,
  postId,
  postQuestion,
  postAnswer,
  postReaction,
  putAnswer,
  patchAnswer,
  deleteProfile,
  deleteQuestion,
  deleteAnswer,
};
