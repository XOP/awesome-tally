import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../../../components/shared";
import { SettingSwitch } from "../../../components/features/setting-switch/SettingSwitch";

import { closeMenu, menuOpenedSelector } from "../../../redux/modules/tally-global";

const SettingsModalModule = () => {
  const dispatch = useDispatch();

  const isMenuOpened = useSelector(menuOpenedSelector);
  const handleMenuClose = () => dispatch(closeMenu());

  return (
    <Modal title="Settings" isOpen={isMenuOpened} onClose={handleMenuClose}>
      <SettingSwitch>Fancy setting</SettingSwitch>
    </Modal>
  );
};

export default SettingsModalModule;
