import { useEffect, useState } from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { Button } from "./Button";
import * as Icons from "./Icon";

import theme from "../../theme/theme";

const Numeric = ({
  className,
  value: _value = 0,
  disabled = false,
  onChange = () => null,
  min = 0,
  max = 99
}) => {
  const [value, setValue] = useState(_value);

  const minMax = (val) => Math.min(Math.max(val, min), max);

  const onIncrement = () => {
    const newVal = minMax(value + 1);

    setValue(newVal);
  }

  const onDecrement = () => {
    const newVal = minMax(value - 1);

    setValue(newVal);
  }

  useEffect(() => {
    onChange(value);
  }, [value, onChange])

  return (
    <div
      css={css`
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;

        &[disabled] {
          cursor: default;
          opacity: 0.5;
        }
      `}
    >
      <span
        css={css`
          flex: 0 1 auto;
        `}
      >
        <Button isIcon size="small" onClick={onDecrement}>
          <Icons.Minus />
        </Button>
      </span>
      <input
        className={className}
        css={css`
          appearance: none;
          flex: 0 1 calc(3ch + ${theme.spaceHalf} * 2);
          width: calc(3ch + ${theme.spaceHalf} * 2);
          height: calc(
            ${theme.fontSizeN} * ${theme.lineHeightN} + ${theme.spaceHalf} * 2
          );

          padding: 0 ${theme.spaceHalf};
          margin-left: calc(-1 * ${theme.borderSizeRegular});
          margin-right: calc(-1 * ${theme.borderSizeRegular});
          border: ${theme.borderSizeRegular} solid;
          
          font-family: inherit;
          font-size: ${theme.fontSizeL};
          text-align: right;
          color: ${theme.colorDarkTemp};
          background: ${theme.colorLightTemp};
        `}
        disabled={disabled}
        readOnly
        value={value}
        type="input"
      />
      <span
        css={css`
          flex: 0 1 auto;
        `}
      >
        <Button isIcon size="small" onClick={onIncrement}>
          <Icons.Plus />
        </Button>
      </span>
    </div>
  );
};

export { Numeric };
