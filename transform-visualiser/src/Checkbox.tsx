import { type ComponentProps } from "react";

const Checkbox = (props: ComponentProps<"input">) => (
  <input
    type="checkbox"
    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
    {...props}
  />
);

export default Checkbox;
