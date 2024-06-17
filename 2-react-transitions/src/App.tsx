import { useState } from "react";
import "./App.css";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Popover className="relative">
      <PopoverButton>toggle popover</PopoverButton>
      <Transition>
        <PopoverPanel
          anchor="bottom"
          className="p-6 bg-[#1a1a1a] w-[512px] [--anchor-gap:theme('spacing.2')]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

export default App;
