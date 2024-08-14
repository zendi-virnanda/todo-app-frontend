import * as React from "react";

export const NoPlan = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    className={props.className}
    viewBox="0 0 458.018 458.018"
  >
    <path d="M307.631 425.737h.002a2.817 2.817 0 0 1-2.814 2.813H36.111a2.817 2.817 0 0 1-2.814-2.813V32.282a2.817 2.817 0 0 1 2.814-2.814h268.708a2.817 2.817 0 0 1 2.814 2.814v27.411l29.442-28.412C336.543 13.943 322.283 0 304.819 0H36.111C18.311 0 3.829 14.481 3.829 32.282v393.455c0 17.799 14.481 32.281 32.281 32.281h268.708c17.8 0 32.281-14.481 32.281-32.281V287.234l-29.468 29.467v109.036z" />
    <path d="M55.319 345.509c0 8.137 6.597 14.734 14.734 14.734h51.527a43.932 43.932 0 0 1-6.32-29.467H70.053v-.001c-8.137 0-14.734 6.597-14.734 14.734zM131.134 256.828H70.053c-8.137 0-14.734 6.597-14.734 14.734s6.597 14.734 14.734 14.734h54.697l6.384-29.468zM184.444 182.882H70.053c-8.137 0-14.734 6.597-14.734 14.734s6.597 14.734 14.734 14.734h84.923l29.468-29.468zM258.39 108.936H70.053c-8.137 0-14.734 6.597-14.734 14.734s6.597 14.734 14.734 14.734h158.869l29.468-29.468zM436.809 60.304c-24.123-24.836-63.396-24.718-87.457-.657L166.87 242.13a14.836 14.836 0 0 0-3.982 7.299l-18.249 84.244a14.736 14.736 0 0 0 17.52 17.52l84.244-18.249a15.009 15.009 0 0 0 7.299-3.982l182.482-182.483c23.921-23.919 23.881-62.243.625-86.175zM178.283 317.548l7.686-35.482 27.796 27.796-35.482 7.686zm237.064-191.906L243.283 297.706l-45.158-45.159L370.188 80.483c12.872-12.873 33.93-12.445 46.257 1.154 11.313 12.465 11.061 31.846-1.098 44.005z" />
  </svg>
);

export const Edit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18.378 8.45-9.414 9.415a2 2 0 0 1-1.022.547L5 19l.588-2.942a2 2 0 0 1 .547-1.022l9.415-9.415m2.828 2.829 1.415-1.414a1 1 0 0 0 0-1.415l-1.415-1.414a1 1 0 0 0-1.414 0L15.55 5.621m2.828 2.829L15.55 5.62"
    />
  </svg>
);
export const Delete = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 12v5M14 12v5M4 7h16M6 10v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-8M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z"
    />
  </svg>
);
export const Close = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
  </svg>
);
export const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm300 230q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
  </svg>
);
