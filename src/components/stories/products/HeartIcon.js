import HeartIconStyle from "./Heart.module.scss";
const HeartIcon = ({ xPos, yPos }) => (
  <span class={HeartIconStyle.HeartIcon} style={{ top: xPos, bottom: yPos }}>
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      focusable="false"
    >
      <g class="outerElement" fill="#FFF" fill-rule="evenodd">
        <path
          class="innerElement"
          d="M16 3.5c1.508 0 2.89.598 3.893 1.567.988.956 1.607 2.274 1.607 3.735 0 1.394-.535 2.7-1.494 3.676L12 20.301l-7.996-7.813A5.314 5.314 0 0 1 2.5 8.802c0-1.461.62-2.78 1.607-3.735A5.597 5.597 0 0 1 8 3.5c1.386 0 2.664.457 3.663 1.37C13.336 3.956 14.614 3.5 16 3.5Z"
          stroke="#000"
        ></path>
      </g>
    </svg>
  </span>
);

export default HeartIcon;
