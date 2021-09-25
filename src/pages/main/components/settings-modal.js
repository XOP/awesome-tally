import { useDispatch, useSelector } from "react-redux";

import { Heading, Modal, Space } from "../../../components/shared";
import { SettingSwitch } from "../../../components/features/setting-switch/SettingSwitch";
import { SettingNumeric } from "../../../components/features/setting-numeric/SettingNumeric";

import {
  closeMenu,
  setIncrement,
  toggleGrow,
  menuOpenedSelector,
  tallyIncrementSelector,
  growEnabledSelector,
} from "../../../redux/modules/tally-global";

const SettingsModalModule = () => {
  const dispatch = useDispatch();

  const isMenuOpened = useSelector(menuOpenedSelector);
  const handleMenuClose = () => dispatch(closeMenu());

  const isGrowEnabled = useSelector(growEnabledSelector);
  const handleGrowEnabled = () => {
    dispatch(toggleGrow());
  };

  const growValue = useSelector(tallyIncrementSelector);
  const handleGrowValue = (val) => {
    dispatch(setIncrement(val));
  };

  return (
    <Modal title="Settings" isOpen={isMenuOpened} onClose={handleMenuClose}>
      <Space size="1" />
      <Heading level="4" colorInherit align="left">
        Tally grow
      </Heading>
      <SettingSwitch onChange={handleGrowEnabled} checked={isGrowEnabled}>
        Grow enabled
      </SettingSwitch>
      <SettingNumeric onChange={handleGrowValue} value={growValue}>
        Grow amount
      </SettingNumeric>
    </Modal>
  );
};

export default SettingsModalModule;
