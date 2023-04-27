import React, { CSSProperties } from 'react'

type Props = {
    children: React.ReactNode;
    duration: number;
    reverse?: boolean;
}

const InfiniteSlider = (props: Props) => {
    const sliderStyle: CSSProperties = {
        "--duration": `${props.duration}ms`,
        "--direction": props.reverse ? "reverse" : "normal",
      } as React.CSSProperties;
    
      return (
        <div className="loop-slider" style={sliderStyle}>
          <div className="inner">
            {props.children}
            {props.children}
          </div>
        </div>
      );
}

export default InfiniteSlider