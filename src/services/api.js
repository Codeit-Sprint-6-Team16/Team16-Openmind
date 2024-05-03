const ROOT = `https://openmind-api.vercel.app/6-16/`;
const postId = async (nameData = '') => {
  if (!nameData) {
    return;
  }
  const response = await fetch(`${ROOT}subjects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
    },
    body: JSON.stringify({ name: nameData }),
  });
  if (!response.ok) {
    if (response.status === '') {
      return console.error(response.text());
    }
    return console.error(response.status);
  }
  const result = await response.json();
  window.localStorage.setItem('id', result.id);
};

const postAnswer = async (questionId, contentData = '') => {
  if (!contentData) {
    return;
  }
  const response = await fetch(`${ROOT}questions/${questionId}/answers/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
    },
    body: JSON.stringify({ content: contentData, isRejected: false }),
  });

  if (!response.ok) {
    if (response.status === '') {
      return console.error(response.text());
    }
    return console.error(response.status);
  }
};
