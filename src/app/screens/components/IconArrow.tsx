import React from "react";
interface IIconArrowProps {
  fill?: string;
}
const IconArrow = (props: IIconArrowProps) => {
  return (
    <svg height="25" viewBox=" 0 0 16 16" width="25" {...props}>
      <defs>
        <circle cx="6" cy="6" id="b" r="6" />
        <filter filterUnits="objectBoundingBox" height="150%" id="a" width="150%" x="-25%" y="-25%">
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 2)">
          <use fill="#000" filter="url(#a)" href="#b" />
          <use fill={props.fill} href="#b" />
        </g>
        <path
          d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
          fill="#1B2330"
        />
      </g>
    </svg>
  );
};

export default IconArrow;
