/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { MAP_SPACE} from "../../theme/theme";

const Space = ({
  className,
  size = '1',
  display = 'block',
  isBox = true
}) => {
  const _size = MAP_SPACE[String(size)];

  let margin = 0;
  let height = 0;

  if (isBox) {
    height = _size;
  } else{
    margin = `calc(${_size} / 2)`;
  }

  return (
    <div
      className={className}
      css={css`
        display: ${display};
        height: ${height};
        margin-top: ${margin};
        margin-bottom: ${margin};
      `}
     ></div>
  
  );
};

export { Space };
