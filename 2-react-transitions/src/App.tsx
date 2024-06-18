import { useState } from "react";
import "./App.css";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

function App() {
  return (
    <Popover className="relative">
      <PopoverButton>toggle popover</PopoverButton>
      <Transition
        enter="transition-[opacity,transform] duration-150 ease-out"
        enterFrom="opacity-0 -translate-y-1"
        leave="transition-[opacity,transform] duration-150 ease-in"
        leaveTo="opacity-0 translate-y-1"
      >
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
