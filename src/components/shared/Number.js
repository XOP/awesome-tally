import React, { useEffect, useState } from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";
import theme from "../../theme/theme";

const Number = ({
  className,
  children,
  onClick = () => null,
  as = "chip",
  size = "normal",
}) => {
  const [debounce, setDebounce] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState(false);

  const btn = "#5d9ec9";

  const hasBorder = as !== "text";
  const isClickable = as === "button";

  let background = "transparent";

  if (as === "chip") background = theme.colorLightTemp;
  if (as === "button") background = btn;

  let fontSize = theme.fontSizeL;

  if (size === "big") {
    fontSize = theme.fontSize2xl;
  }

  const handleClick = () => {
    if (debounce) return;

    onClick();
    setDebounce(true);

    const to = setTimeout(() => setDebounce(false), 250);
    setDebounceTimer(to);
  };

  useEffect(() => {
    if (!debounceTimer) return;

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [debounceTimer]);

  return (
    <ClassNames>
      {({ css, cx }) => {
        return React.createElement(
          as === "button" ? "button" : "span",
          {
            className: cx(
              className,
              css`
                display: inline-flex;
                justify-content: center;

                height: calc(
                  ${theme.spaceHalf} * 2 + ${fontSize} * ${theme.lineHeightN}
                );
                padding: ${theme.spaceHalf} ${theme.spaceOne};

                border: 1px solid
                  ${hasBorder ? theme.colorDarkTemp : "transparent"};
                border-radius: ${theme.radiusRegular};

                background: ${background};
                color: ${theme.colorDarkTemp};

                font-size: ${fontSize};
                line-height: ${theme.lineHeightN};

                cursor: ${isClickable ? "pointer" : "default"};
                transition: all 0.15s;

                @media (hover: hover) {
                  &:hover {
                    filter: brightness(1.2);
                  }
                }

                &:active {
                  filter: contrast(0.8);
                  transform: translateY(1px);
                }
              `
            ),
            onClick: handleClick,
          },
          <span>{children}</span>
        );
      }}
    </ClassNames>
  );
};

export { Number };
