import { useParams } from 'react-router-dom';

import { getProfile } from '@services/api/get.js';
import AnswerPresenter from '@ui/AnswerPresenter';

function AnswerPresenterContainer({ question }) {
  const [profile, setProfile] = useState();
  const { id } = useParams();

  const loadProfile = async () => {
    try {
      const response = await getProfile(id);
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

  return <AnswerPresenter question={question} profile={profile} />;
}

export default AnswerPresenterContainer;
