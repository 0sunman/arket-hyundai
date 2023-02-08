const HeartIcon = ({ isActive }) => (
  <svg
    viewBox="0 0 24 22"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    focusable="false"
  >
    <g class="outerElement" fill="#FFF" fill-rule="evenodd">
      <path
        class="innerElement"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6643 2.74522C9.60241 1.62778 8.16211 1 6.66029 1C5.15847 1 3.71817 1.62778 2.65627 2.74522C0.447909 5.07299 0.447909 8.84267 2.65627 11.1704L11.9982 21L17.3353 15.3818L21.3377 11.1721C22.4015 10.0556 22.9995 8.53973 23 6.95877C23.0004 5.3778 22.4032 3.86157 21.3401 2.74438C19.1269 0.419997 15.5428 0.420744 13.3305 2.74605L11.9982 4.14789L10.6643 2.74522Z"
        stroke="black"
        stroke-width="2"
        stroke-linejoin="bevel"
        fill={isActive === undefined ? "" : "black"}
      ></path>
    </g>
  </svg>
);

export default HeartIcon;
