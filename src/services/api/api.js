const BASE_URL = 'https://openmind-api.vercel.app/6-16/';

const getAnswerer = async (answererId = 0) => {
  const url = BASE_URL + `subjects/${answererId}/`;
  const response = await fetch(url);
  if (response.ok) {
    const body = await response.json();
    return body;
  } else {
    if (response.status === 0) {
      return console.error(response.text());
    }
    return console.error(response.status);
  }
};

// getAnswerer(5761);

const getAnswerers = async (offset = 0, limit = 8, sort = 'name') => {
  const url =
    BASE_URL + `subjects/?offset=${offset}&limit=${limit}&sort=${sort}`;
  const response = await fetch(url);
  if (response.ok) {
    const body = await response.json();
    return body;
  } else {
    if (response.status === 0) {
      return console.error(response.text());
    }
    return console.error(response.status);
  }
};

// getAnswerers(0, 7, 'time');

const getQuestionList = async (answererId = 0, offset = 0, limit = 3) => {
  const url =
    BASE_URL +
    `subjects/${answererId}/questions/?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);
  if (response.ok) {
    const body = await response.json();
    return body;
  } else {
    if (response.status === 0) {
      return console.error(response.text());
    }
    return console.error(response.status);
  }
};
// getQuestionList(5761, 0, 3);
//미완성
// const postNewQuestion = async (answererId = 0, content = '') => {
//   const url = BASE_URL + `subjects/${answererId}/questions/`;
//   const newQuestion = {
//     subjectId: answererId,
//     content: content,
//     team: '6-16',
//     answer: {
//       content: '',
//       isRejected: false,
//     },
//   };
//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(newQuestion),
//   });
//   console.log(response.status);
//   if (response.ok) {
//     const body = await response.json();
//     return body;
//   } else {
//     if (response.status === 0) {
//       return console.error(response.text());
//     }
//     return console.error(response.status);
//   }
// };
// postNewQuestion(5759, '테스트는 왜 해야하나요?');
