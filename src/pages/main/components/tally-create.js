import { useDispatch } from "react-redux";

import { TallyAdd } from '../../../components/features/tally-add/TallyAdd';
import { grow } from "../../../redux/modules/tally-global";

const TallyCreateModule = () => {
  const dispatch = useDispatch();

  const handleNew = () => {
    dispatch(grow());
  }

  return (
    <TallyAdd onNew={handleNew} />
  );
};

export default TallyCreateModule;
