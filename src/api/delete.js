import { BASE_URL } from './api';

const deleteProfile = async (answererId) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}subjects/${answererId}/`, {
      method: 'DELETE',
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

const deleteQuestion = async (questionId) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}questions/${questionId}/`, {
      method: 'DELETE',
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

const deleteAnswer = async (answerId) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}answers/${answerId}/`, {
      method: 'DELETE',
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

export { deleteProfile, deleteQuestion, deleteAnswer };
