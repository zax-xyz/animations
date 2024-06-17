import tw, { styled } from 'twin.macro';

const Bar = tw.div`h-2.5 rounded-sm bg-black/5 first:bg-black/[0.15]`;

const Button = styled.div({
  ...tw`ml-auto px-2 py-1.5 rounded-[0.2rem]`,

  variants: {
    status: {
      pending: tw`bg-[hsl(220, 60%, 90%)] text-[hsl(220, 60%, 25%)]`,
      open: tw`text-white bg-[hsl(220, 93%, 60%)]`,
    },
  },
});

const Bars = tw.div`flex flex-col gap-1`;

type Props = {
  logo: string;
  active?: boolean;
};
const Campaign = ({ logo, active = false }: Props) => {
  const status = active ? 'pending' : 'open';
  return (
    <div tw="w-72 rounded bg-white shadow-md transition hover:(-translate-y-1 shadow-lg)">
      <header tw="flex items-center gap-1.5 p-3">
        <img tw="w-7 rounded-sm" src={logo} alt="logo" />
        <Bars>
          <Bar tw="w-28" />
          <Bar tw="w-24" />
        </Bars>
        <Button status={status}>{status.toUpperCase()}</Button>
      </header>
      <div tw="h-28 bg-[#edeeef]" />
      {active && (
        <Bars tw="p-3">
          <Bar tw="w-40" />
          <Bar tw="w-32" />
          <Bar tw="w-28" />
        </Bars>
      )}
    </div>
  );
};

export default Campaign;
