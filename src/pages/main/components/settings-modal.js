import { useDispatch, useSelector } from "react-redux";

import { Heading, Modal, Space } from "../../../components/shared";
import { SettingSwitch } from "../../../components/features/setting-switch/SettingSwitch";
import { SettingNumeric } from "../../../components/features/setting-numeric/SettingNumeric";

import {
  closeMenu,
  menuOpenedSelector,
} from "../../../redux/modules/tally-global";

const SettingsModalModule = () => {
  const dispatch = useDispatch();

  const isMenuOpened = useSelector(menuOpenedSelector);
  const handleMenuClose = () => dispatch(closeMenu());

  return (
    <Modal title="Settings" isOpen={isMenuOpened} onClose={handleMenuClose}>
      <Space size="1" />
      <Heading level="4" colorInherit align="left">
        Tally grow
      </Heading>
      <SettingSwitch>Fancy setting</SettingSwitch>
      <SettingNumeric>Numeric setting</SettingNumeric>
    </Modal>
  );
};

export default SettingsModalModule;
