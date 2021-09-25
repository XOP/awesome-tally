import { useDispatch, useSelector } from "react-redux";

import { Heading, Modal, Space } from "../../../components/shared";
import { SettingSwitch } from "../../../components/features/setting-switch/SettingSwitch";
import { SettingNumeric } from "../../../components/features/setting-numeric/SettingNumeric";
import { SettingButton } from "../../../components/features/setting-button/SettingButton";

import {
  closeMenu,
  setIncrement,
  setTallyValue,
  toggleGrow,
  menuOpenedSelector,
  tallyIncrementSelector,
  tallyValueSelector,
  growEnabledSelector,
} from "../../../redux/modules/tally-global";

import {
  resetTrainItems,
  trainsSelector,
} from "../../../redux/modules/tally-trains";

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

  const tallyValue = useSelector(tallyValueSelector);
  const handleTallyValue = (val) => {
    dispatch(setTallyValue(val));
  };

  const handleTrainsReset = () => {
    dispatch(resetTrainItems());
  };

  const hasItems = !!useSelector(trainsSelector).length;

  return (
    <Modal title="Settings" isOpen={isMenuOpened} onClose={handleMenuClose}>
      <Space size="1" />
      <Heading level="4" colorInherit align="left">
        Tally
      </Heading>
      <SettingSwitch onChange={handleGrowEnabled} checked={isGrowEnabled}>
        Grow enabled
      </SettingSwitch>
      <SettingNumeric onChange={handleGrowValue} value={growValue}>
        Grow amount
      </SettingNumeric>
      <SettingNumeric onChange={handleTallyValue} value={tallyValue}>
        Item default
      </SettingNumeric>

      {hasItems && (
        <>
          <Space size="1" />
          <Heading level="4" colorInherit align="left">
            Danger zone
          </Heading>
          <SettingButton onClick={handleTrainsReset} buttonLabel="I am sure">
            Reset history
          </SettingButton>
        </>
      )}
    </Modal>
  );
};

export default SettingsModalModule;
