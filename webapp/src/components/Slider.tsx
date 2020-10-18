import React from "react";

type Props = {
  allowedValues: any[];
  value: any;
  labels: string[];
  title?: string;
  onChange?: (value: any) => void;
};

export function Slider(props: Props) {
  return (
    <>
      <input
        type="range"
        min="0"
        max={props.allowedValues.length - 1}
        value={props.allowedValues.findIndex(x => x === props.value)}
        onChange={e => {
          props.onChange &&
            props.onChange(props.allowedValues[parseInt(e.target.value)]);
        }}
      />
      {props.labels[props.allowedValues.findIndex(x => x === props.value)]}
    </>
  );
}
