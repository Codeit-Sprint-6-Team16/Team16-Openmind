const postId = async (data = '') => {
  if (data === '') {
    return;
  }
  const response = await fetch(
    'https://openmind-api.vercel.app/6-16/subjects/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ name: data }),
    },
  );
  if (!response.ok) {
    if (response.status === '') {
      return console.error(response.text());
    }
    return console.error(response.status);
  }
  const result = await response.json();
  window.localStorage.setItem('id', result.id);
};
