import { Heading, Modal } from "../../components/shared";

import TallyCreate from "./components/tally-create";
import TallyTrains from "./components/tally-trains";

import {
  closeMenu,
  menuOpenedSelector,
} from "../../redux/modules/tally-global";

import { useSelector, useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();

  const isMenuOpened = useSelector(menuOpenedSelector);
  const handleMenuClose = () => dispatch(closeMenu());

  return (
    <main>
      <div>
        <Heading level="2" mb="3">
          Tally Records
        </Heading>
        <TallyTrains />
      </div>
      <TallyCreate />

      <Modal title="Well..." isOpen={isMenuOpened} onClose={handleMenuClose}>
        Some content here
      </Modal>
    </main>
  );
};

export default MainPage;
