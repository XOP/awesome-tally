import { useState, useRef } from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { nanoid } from "nanoid";

import theme from "../../theme/theme";

const Switch = ({ className, disabled = false, checked = false, onChange = () => null }) => {
  const btn = "#5d9ec9";

  const _id = useRef(nanoid());

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const _checked = !isChecked;

    setIsChecked(_checked);
    onChange(_checked);
  };

  return (
    <label
      css={css`
        box-sizing: content-box;
        display: inline-block;
        position: relative;
        height: ${theme.spaceTwo};
        width: ${theme.spaceFour};

        border: 2px solid ${theme.colorDarkTemp};
        border-radius: ${theme.spaceOne};

        background: ${isChecked ? btn : theme.colorLightTemp};
        color: ${theme.colorDarkTemp};

        cursor: pointer;
        transition: all 0.15s;

        @media (hover: hover) {
          &:hover {
            filter: brightness(1.2);
          }
        }

        &:active:not([disabled]) {
          transform: scale(0.95);
        }

        &[disabled] {
          cursor: default;
          opacity: 0.5;
        }
      `}
      htmlFor={_id.current}
    >
      <input
        id={_id.current}
        className={className}
        css={css`
          width: 0;
          height: 0;
          opacity: 0;
          position: absolute;
          pointer-events: none;
        `}
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
        type="checkbox"
      />
      <span
        css={css`
          box-sizing: content-box;
          position: absolute;
          top: -2px;
          left: -2px;

          width: ${theme.spaceTwo};
          height: ${theme.spaceTwo};

          border: 2px solid ${theme.colorDarkTemp};
          border-radius: ${theme.spaceOne};

          background: ${theme.colorLightTemp};

          transform: ${isChecked
            ? "translateX(calc(100% - 4px))"
            : "translateX(0)"};
          transition: transform 0.15s;
        `}
      />
    </label>
  );
};

export { Switch };
