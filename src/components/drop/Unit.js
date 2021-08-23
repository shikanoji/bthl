import React from 'react';

export default function Unit(props) {
    if (props.value === 1) {
        return (
          <div>
            <svg height="30" width="200" className="unit">
              <g fill="none">
                <path stroke="white" strokeWidth="20" d="M0 15 l200 0" />
              </g>
            </svg>
          </div>
        );
    } else if (props.value === 0) {
        return (
          <div>
              <svg height="30" width="200" className="unit">
                <g fill="none">
                  <path
                    stroke= "white"
                    strokeDasharray="90,20,90"
                    strokeWidth="20"
                    d="M0 15 l200 0"
                  />
                </g>
              </svg>
          </div>
        );
    } else if (props.value === -1) {
        return (
          <div>
            <svg height="30" width="200" className="unit">
              <g fill="none">
                <path
                  stroke="rgb(224, 192, 151)"
                  strokeDasharray="90,20,90"
                  strokeWidth="20"
                  d="M0 15 l200 0"
                />
              </g>
            </svg>
          </div>
        );
    } else if (props.value === 2) {
        return (
          <div>
            <svg height="30" width="200" className="unit">
              <g fill="none">
                <path
                  stroke="rgb(224, 192, 151)"
                  strokeWidth="20"
                  d="M0 15 l200 0"
                />
              </g>
            </svg>
          </div>
        );
    } else {
        return(
            <div>
            </div>
        );
    }
    
}