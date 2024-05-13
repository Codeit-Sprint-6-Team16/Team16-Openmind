import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnswerPage from '@pages/AnswerPage';
import ListPage from '@pages/ListPage';
import MainPage from '@pages/MainPage';
import QuestionPage from '@pages/QuestionPage';

//라우터 설정하면 됩니다!
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="post/:id">
          <Route index element={<QuestionPage />} />
          <Route path="answer" element={<AnswerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
