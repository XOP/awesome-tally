import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme from "../../theme/theme";

import { Button } from "./Button";
import * as Icons from "./Icon";
import { Heading } from "./Heading";
import { useState } from "react";

const modalRoot = document.getElementById("modal");

const Modal = ({
  className,
  children,
  title,
  onClose = () => null,
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  useEffect(() => {
    setOpen(isOpen);

    return () => {
      setOpen(false);
    }
  }, [isOpen]);

  const content = open ? (
    <section
      className={className}
      css={css`
        position: fixed;
        z-index: 2000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        padding: ${theme.spaceOneAndHalf};

        background: ${theme.colorLightTemp};
        color: ${theme.colorDarkTemp};

        @media screen and (min-width: 980px) {
        }
      `}
    >
      <div
        css={css`
          @media screen and (min-width: 980px) {
          }
        `}
      >
        <div
          css={css`
            position: absolute;
            top: ${theme.spaceOneAndHalf};
            right: ${theme.spaceOne};
          `}
        >
          <Button size="small" isIcon onClick={handleClose}>
            <Icons.X />
          </Button>
        </div>

        <Heading level="3" colorInherit mb="2">
          {title}
        </Heading>

        {children}
      </div>
    </section>
  ) : null;

  return createPortal(content, elRef.current);
};

export { Modal };
