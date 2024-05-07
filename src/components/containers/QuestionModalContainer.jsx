import { postQuestion } from '@services/api/post';

function QuestionModalContainer(props) {
  const [profile, setProfile] = useState();
  const [value, setValue] = useState('');

  const loadProfile = async () => {
    try {
      const response = await getProfile(window.localStorage.getItem('id'));
      setProfile(response);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  const sendQuestion = async (value) => {
    try {
      const response = await postQuestion(profile.id, value);
      alert('질문 추가됨');
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    sendQuestion(value);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <QuestionModal
      profile={profile}
      value={value}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

export default QuestionModalContainer;
