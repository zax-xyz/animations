import * as RUISlider from "@radix-ui/react-slider";

import { useId, type ComponentProps } from "react";

const Slider = ({
  label,
  value,
  suffix,
  ...props
}: Omit<ComponentProps<typeof RUISlider.Root>, "value"> & {
  label: string;
  value: number;
  suffix?: string;
}) => {
  const id = useId();
  return (
    <div>
      <span>
        <span className="text-gray-700 font-light">
          <label id={id}>{label}</label>:
        </span>{" "}
        <span className="font-medium">{value}</span>
        <span className="text-sm font-light text-gray-500">{suffix}</span>
      </span>
      <RUISlider.Root
        className="relative flex items-center w-full h-5"
        value={[value]}
        {...props}
      >
        <RUISlider.Track className="bg-gray-200 relative flex-1 rounded-full h-[3px]">
          <RUISlider.Range className="absolute bg-blue-600 rounded-full h-full" />
        </RUISlider.Track>
        <RUISlider.Thumb
          className="block w-5 h-5 bg-white border-2 border-blue-600 shadow-sm rounded-full hover:bg-gray-50 focus:outline-none focus:ring focus:ring-violet-600/20"
          aria-labelledby={id}
        />
      </RUISlider.Root>
    </div>
  );
};

export default Slider;
