import React from 'react'

const TVsvg = () => (
    <div>
      <h3>Simple svg using rect black/white </h3>
      <svg  height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1">
        <rect height="160" width="200" />
        <rect height="100" width="160" fill="white" x="20" y="20" />
        <rect height="20" width="80" x="60" y="180" />
      </svg>
    </div>
)

export default TVsvg
