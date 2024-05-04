const ROOT = `https://openmind-api.vercel.app/6-16/`;
const postId = async (nameData = '') => {
  if (!nameData) {
    return;
  }
  let response;
  try {
    response = await fetch(`${ROOT}subjects/`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      // },
      body: JSON.stringify({ name: nameData }),
    });

    // window.localStorage.setItem('id', result.id);
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
  console.log(result);
  const result = await response.json();
};

const getpost = async () => {
  try {
    const result = await postId('정지');
  } catch (error) {
    if (error.name === 'TypeError') {
      return console.log(error.name);
    } else if (error.name) console.log(error.status);
  }
};
getpost();
const postAnswer = async (questionId, contentData = '') => {
  if (!contentData) {
    return;
  }
  let response;
  try {
    response = await fetch(`${ROOT}questions/${questionId}/answers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ content: contentData, isRejected: false }),
    });
  } catch (error) {}

  if (!response.ok) {
    if (response.status === 0) {
      return console.error(response.text());
    }
    return response.status;
  }
};
