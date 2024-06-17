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

const Campaigns = () => (
  <Container>
    <aside tw="flex flex-col gap-3 text-xs mt-[-50px]">
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

export default Campaigns;
