import React from 'react'
import PropTypes from 'prop-types'

function Diagonals({width, color}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={color}
        d="M1 25L25 0.999999"
        strokeLinecap="round"
        strokeinejoin="round"
      />
      <path
        className={color}
        d="M1 19L19 1"
        strokeLinecap="round"
        strokeinejoin="round"
      />
      <path
        className={color}
        d="M7 25L25 7"
        strokeLinecap="round"
        strokeinejoin="round"
      />
      <path
        className={color}
        d="M1 13L13 1"
        strokeLinecap="round"
        strokeinejoin="round"
      />
      <path
        className={color}
        d="M13 25L25 13"
        strokeLinecap="round"
        strokeinejoin="round"
      />
      <path
        className={color}
        d="M1 7L7 1"
        strokeLinecap="round"
        strokeinejoin="round"
      />
      <path
        className={color}
        d="M19 25L25 19"
        strokeLinecap="round"
        strokeinejoin="round"
      />
    </svg>
  );
}


export default Diagonals
