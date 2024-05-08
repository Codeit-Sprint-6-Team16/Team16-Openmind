import { getProfile } from '@services/api/get.js';
import AnswerBox from '@ui/AnswerBox';

function AnswerPresenterContainer(question) {
  const [profile, setProfile] = useState();

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

  useEffect(() => {
    loadProfile();
  }, []);

  return <AnswerBox question={question} profile={profile} />;
}

export default AnswerPresenterContainer;
