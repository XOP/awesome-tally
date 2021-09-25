/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import theme, { MAP_SPACE } from "../../theme/theme";

const Card = ({ className, children, align = "left", padding = '2' }) => {
  const space = MAP_SPACE[String(padding)];

  return (
    <div
      className={className}
      css={css`
        text-align: ${align};
        padding: ${space};
        background: ${theme.colorLightTemp};
        color: ${theme.colorDarkTemp};
        font-size: ${theme.fontSizeN};
        border-radius: ${theme.radiusHeavy};
        box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.6);
        border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};

        & + & {
          margin-top: ${theme.spaceOne};
        }
      `}
    >
      {children}
    </div>
  );
};

export { Card };
