import { BASE_URL } from './api.js';

const getProfile = async (answererId = 0) => {
  let response;
  try {
    const url = BASE_URL + `subjects/${answererId}/`;
    response = await fetch(url);
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

  const body = await response.json();
  return body;
};

const getAnswerers = async ({ offset = 0, limit = 8, sort = 'name' }) => {
  let response;
  try {
    const url =
      BASE_URL + `subjects/?offset=${offset}&limit=${limit}&sort=${sort}`;
    response = await fetch(url);
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

  const body = await response.json();
  return body;
};

const getQuestionList = async (answererId = 0, offset = 0, limit = 3) => {
  let response;
  try {
    const url =
      BASE_URL +
      `subjects/${answererId}/questions/?limit=${limit}&offset=${offset}`;
    response = await fetch(url);
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

  const body = await response.json();
  return body.results;
};

export { getProfile, getAnswerers, getQuestionList };
