import { HumanName } from '@/component/atoms';

export default function Home() {
  const { BRIDE_NAME, GROOM_NAME } = process.env;
  return (
    <main className="p-4 h-full w-full">
      <span>신랑</span>
      <HumanName.Title name={GROOM_NAME!} />
      <span>신부</span>
      <HumanName.Title name={BRIDE_NAME!} />
    </main>
  );
}
