import { useState } from "react";
import Slider from "./Slider";
import Checkbox from "./Checkbox";

function App() {
  const [enabled3d, setEnabled3d] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);
  const [perspective, setPerspective] = useState(500);
  const [perspectiveEnabled, setPerspectiveEnabled] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  return (
    <div className="flex h-full">
      <div className="flex flex-col gap-4 w-72 px-8 py-6 shadow">
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
        />
        <Slider
          label="translateY"
          value={translateY}
          onValueChange={([value]) => setTranslateY(value)}
          min={-100}
          max={100}
          step={1}
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
              min={-360}
              max={360}
              step={1}
            />
            <Slider
              label="rotateY"
              value={rotateY}
              onValueChange={([value]) => setRotateY(value)}
              min={-360}
              max={360}
              step={1}
            />
            <Slider
              label="rotateZ"
              value={rotateZ}
              onValueChange={([value]) => setRotateZ(value)}
              min={-360}
              max={360}
              step={1}
            />
          </>
        ) : (
          <Slider
            label="rotate"
            value={rotateZ}
            onValueChange={([value]) => setRotateZ(value)}
            min={-360}
            max={360}
            step={1}
          />
        )}
      </div>
      <div
        className="flex-1 p-4 bg-gray-100 flex items-center justify-center text-gray-700 overflow-hidden"
        style={{ perspective: perspectiveEnabled ? perspective : "none" }}
      >
        <div
          className="flex items-center justify-center w-48 h-48 bg-white text-lg rounded-md shadow"
          style={{
            transform: `
              translateX(${translateX}px) translateY(${translateY}px) ${enabled3d ? `translateZ(${translateZ}px)` : ""}
              scale(${scale})
              ${enabled3d ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` : `rotate(${rotateZ}deg)`}
            `,
          }}
        >
          lorem ipsum
        </div>
      </div>
    </div>
  );
}

export default App;
