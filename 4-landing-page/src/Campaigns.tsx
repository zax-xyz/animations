import { useEffect, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

import csesoc from './CSESoc_logo.jpeg';
import Campaign from './Campaign';
import compclub from './compclub.png';

const Container = styled.div({
  ...tw`
    ml-auto w-[650px] h-[600px]
    flex items-center justify-center
  `,
  perspective: 700,
});

const Heading = tw.h1`my-3 rounded bg-black/[0.15] font-bold text-xl h-[1em]`;
const Row = tw.div`flex gap-4`;

const DEFAULT_X = 7.5;
const DEFAULT_Y = -9;

const Campaigns = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(7.5);
  const [rotateY, setRotateY] = useState(-9);
  const [multiplier, setMultiplier] = useState(1);
  const withinRange = Math.abs(rotateX) <= 10 && Math.abs(rotateY) <= 10;

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const middleX = rect.x + rect.width / 2;
      const middleY = rect.y + rect.height / 2;
      setRotateX(-(e.y - middleY) / 40);
      setRotateY((e.x - middleX) / 40);
    };
    document.body.addEventListener('pointermove', handle);

    return () => {
      document.body.removeEventListener('pointermove', handle);
    };
  }, []);

  useEffect(() => {
    if (!withinRange) {
      setMultiplier(0);
      return;
    }

    let start: number | undefined;

    const step = (time: number) => {
      console.log('step');
      if (start === undefined) {
        start = time;
      }

      const delta = time - start;
      const multiplier = Math.min(delta / 150, 1);
      console.log(multiplier);
      setMultiplier(multiplier);
      if (multiplier >= 1) {
        return;
      }
      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [withinRange]);

  return (
    <Container ref={ref}>
      <aside
        tw="flex flex-col gap-3 text-xs mt-[-50px] "
        style={{
          transform: withinRange
            ? `rotateX(${DEFAULT_X + (rotateX - DEFAULT_X) * multiplier}deg) rotateY(${
                DEFAULT_Y + (rotateY - DEFAULT_Y) * multiplier
              }deg) rotateZ(1deg)`
            : 'rotateX(7.5deg) rotateY(-9deg) rotateZ(1deg)',
          transition: !withinRange ? 'transform .15s' : '',
        }}
      >
        <section>
          <Heading tw="w-52" />
          <Row>
            <Campaign logo={csesoc} active />
            <Campaign logo={compclub} active />
          </Row>
        </section>
        <section>
          <Heading tw="w-56" />
          <Row>
            <Campaign logo={compclub} />
            <Campaign logo={csesoc} />
          </Row>
        </section>
      </aside>
    </Container>
  );
};

export default Campaigns;
