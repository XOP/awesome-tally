import { useDispatch } from "react-redux";

import { TallyAdd } from '../../../components/features/tally-add/TallyAdd';
import { growGoal, openMenu } from "../../../redux/modules/tally-global";

const TallyCreateModule = () => {
  const dispatch = useDispatch();

  const handleNew = () => {
    dispatch(growGoal());
  }

  const handleMenu = () => {
    dispatch(openMenu());
  }

  return (
    <TallyAdd onNew={handleNew} onMenu={handleMenu} />
  );
};

export default TallyCreateModule;
