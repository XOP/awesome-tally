/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import theme from "../../theme/theme";

const Button = ({
  className,
  children,
  onClick,
  disabled = false,
  type = "button",
  iconStart = null,
  iconEnd = null,
  size = "regular",
  isIcon = false
}) => {
  const btn = "#5d9ec9";

  let paddingY = theme.spaceOne;
  let paddingX = theme.spaceOneAndHalf;
  let fontSize = theme.fontSizeN;

  if (size === 'small') {
    paddingY = theme.spaceHalf;
    paddingX = theme.spaceThreeQuarters;
  }

  if (size === 'big') {
    fontSize = theme.fontSizeL;
    paddingY = theme.spaceOneAndHalf;
    paddingX = theme.spaceTwo;
  }

  if (isIcon) {
    paddingX = paddingY;
  }

  return (
    <button
      className={className}
      css={css`
        appearance: none;

        height: calc(
          ${paddingY} * 2 + ${fontSize} * ${theme.lineHeightN}
        );
        padding: ${paddingY} ${paddingX};

        border: 1px solid ${theme.colorLightTemp};
        border-radius: ${theme.radiusRegular};

        background: ${btn};
        color: ${theme.colorDarkTemp};

        text-transform: uppercase;
        font-family: inherit;
        font-size: ${fontSize};
        line-height: ${theme.lineHeightN};

        cursor: pointer;
        transition: all 0.15s;

        @media (hover:hover) {
          &:hover {
            filter: brightness(1.2);
          }
        }
  
        &:active:not([disabled]) {
          filter: contrast(0.8);
          transform: translateY(1px);
        }

        &:nth-of-type(n + 2) {
          margin-left: ${theme.spaceOne};
        }

        &[disabled] {
          cursor: default;
          opacity: 0.5;
        }
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {iconStart && (
        <span
          css={css`
            margin-right: ${theme.spaceThreeQuarters};
            line-height: 0;
            display: inline-flex;
            vertical-align: middle;
          `}
        >
          {iconStart}
        </span>
      )}
      <span>{children}</span>
      {iconEnd && (
        <span
          css={css`
            margin-left: ${theme.spaceThreeQuarters};
            line-height: 0;
            display: inline-flex;
            vertical-align: middle;
          `}
        >
          {iconEnd}
        </span>
      )}
    </button>
  );
};

export { Button };
