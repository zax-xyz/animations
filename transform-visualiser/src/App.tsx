import { useState } from "react";
import Slider from "./Slider";
import Checkbox from "./Checkbox";

const defaultValues = {
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  perspective: 500,
  scale: 1,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
};

function App() {
  const [enabled3d, setEnabled3d] = useState(false);
  const [translateX, setTranslateX] = useState(defaultValues.translateX);
  const [translateY, setTranslateY] = useState(defaultValues.translateY);
  const [translateZ, setTranslateZ] = useState(defaultValues.translateZ);
  const [perspective, setPerspective] = useState(defaultValues.perspective);
  const [perspectiveEnabled, setPerspectiveEnabled] = useState(false);
  const [scale, setScale] = useState(defaultValues.scale);
  const [rotateX, setRotateX] = useState(defaultValues.rotateX);
  const [rotateY, setRotateY] = useState(defaultValues.rotateY);
  const [rotateZ, setRotateZ] = useState(defaultValues.rotateZ);

  const transform = `
  translateX(${translateX}px) translateY(${translateY}px) ${enabled3d ? `translateZ(${translateZ}px)` : ""}
  scale(${scale})
  ${enabled3d ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` : `rotate(${rotateZ}deg)`}`;

  return (
    <div className="flex h-full">
      <div className="flex flex-col justify-between w-80 p-6 shadow">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">Transform</h1>
          <label className="flex gap-2 text-sm">
            Enable 3d
            <Checkbox
              checked={enabled3d}
              onChange={(e) => setEnabled3d(e.target.checked)}
            />
          </label>

          <Slider
            label="translateX"
            value={translateX}
            onValueChange={([value]) => setTranslateX(value)}
            min={-100}
            max={100}
            step={1}
            suffix="px"
          />
          <Slider
            label="translateY"
            value={translateY}
            onValueChange={([value]) => setTranslateY(value)}
            min={-100}
            max={100}
            step={1}
            suffix="px"
          />
          {enabled3d && (
            <>
              <Slider
                label="translateZ"
                value={translateZ}
                onValueChange={([value]) => setTranslateZ(value)}
                min={-1000}
                max={1000}
                step={1}
                suffix="px"
              />
              <div className="flex flex-col gap-2">
                <label className="flex gap-2 text-sm">
                  Enable perspective
                  <Checkbox
                    checked={perspectiveEnabled}
                    onChange={(e) => setPerspectiveEnabled(e.target.checked)}
                  />
                </label>
                {perspectiveEnabled && (
                  <Slider
                    label="perspective"
                    value={perspective}
                    onValueChange={([value]) => setPerspective(value)}
                    min={0}
                    max={1000}
                    step={1}
                    suffix="px"
                  />
                )}
              </div>
            </>
          )}
          <Slider
            label="scale"
            value={scale}
            onValueChange={([value]) => setScale(value)}
            min={0}
            max={5}
            step={0.01}
          />
          {enabled3d ? (
            <>
              <Slider
                label="rotateX"
                value={rotateX}
                onValueChange={([value]) => setRotateX(value)}
                min={-180}
                max={180}
                step={1}
                suffix="deg"
              />
              <Slider
                label="rotateY"
                value={rotateY}
                onValueChange={([value]) => setRotateY(value)}
                min={-180}
                max={180}
                step={1}
                suffix="deg"
              />
              <Slider
                label="rotateZ"
                value={rotateZ}
                onValueChange={([value]) => setRotateZ(value)}
                min={-180}
                max={180}
                step={1}
                suffix="deg"
              />
            </>
          ) : (
            <Slider
              label="rotate"
              value={rotateZ}
              onValueChange={([value]) => setRotateZ(value)}
              min={-180}
              max={180}
              step={1}
              suffix="deg"
            />
          )}
        </div>
        <button
          className="p-1.5 transition-colors hover:bg-gray-100"
          onClick={() => {
            setTranslateX(defaultValues.translateX);
            setTranslateY(defaultValues.translateY);
            setTranslateZ(defaultValues.translateZ);
            setPerspective(defaultValues.perspective);
            setScale(defaultValues.scale);
            setRotateX(defaultValues.rotateX);
            setRotateY(defaultValues.rotateY);
            setRotateZ(defaultValues.rotateZ);
          }}
        >
          reset
        </button>
      </div>
      <div
        className="relative flex-1 p-4 bg-gray-100 flex items-center justify-center text-gray-700 overflow-hidden"
        style={{ perspective: perspectiveEnabled ? perspective : "none" }}
      >
        <div
          className="z-10 flex items-center justify-center w-48 h-48 bg-white text-lg rounded-md shadow"
          style={{ transform }}
        >
          lorem ipsum
        </div>
        <span className="absolute left-1/2 inset-y-0 -translate-x-1/2 border-l border-l-gray-200"></span>
        <span className="absolute top-1/2 inset-x-0 -translate-y-1/2 border-b border-b-gray-200"></span>
        <pre className="absolute bottom-4 right-4 text-sm">
          transform: {transform};
        </pre>
      </div>
    </div>
  );
}

export default App;
