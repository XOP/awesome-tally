import React from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";
import theme, { MAP_SPACE } from "../../theme/theme";

const MAP_HEADING_FONTSIZE = {
  1: theme.fontSize4xl,
  2: theme.fontSize3xl,
  3: theme.fontSize2xl,
  4: theme.fontSizeXl,
  5: theme.fontSizeL,
};

const Heading = ({
  className,
  children,
  align = "center",
  as = null,
  level = "2",
  mb = "0",
  mt = "0",
  colorInherit = false
}) => {
  const tag = as || `h${level}`;

  const fontSize = MAP_HEADING_FONTSIZE[String(level)];
  const marginBottom = MAP_SPACE[String(mb)];
  const marginTop = MAP_SPACE[String(mt)];

  return (
    <ClassNames>
      {({ css, cx }) => {
        return React.createElement(
          tag,
          {
            className: cx(
              className,
              css`
                margin: 0;
                margin-bottom: ${marginBottom};
                margin-top: ${marginTop};

                color: ${colorInherit ? 'inherit' : theme.colorLightTemp};

                font-size: ${fontSize};
                line-height: ${theme.lineHeightS};
                text-transform: uppercase;
                text-align: ${align};
                text-shadow: 0 .05em 0.05em ${theme.colorThemeTemp};
              `
            ),
          },
          <span>{children}</span>
        );
      }}
    </ClassNames>
  );
};

export { Heading };
