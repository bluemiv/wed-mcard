import { Text } from '@/component/atoms';

export default function Home() {
  const { BRIDE_NAME, GROOM_NAME } = process.env;
  return (
    <main className="p-4 h-full w-full">
      <section className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-4">
          <span>우리 서로 사랑하면,</span>
          <span>언제라도 봄</span>
        </div>
        <div className="flex items-center justify-center">
          {[GROOM_NAME!, BRIDE_NAME!].map((name) => (
            <Text.HumanName className="flex-1 text-center" key={name} name={name} />
          ))}
        </div>

        <span>8번의 봄, 여름, 가을, 겨울을 지나 9번째 봄에 결혼합니다.</span>
      </section>
    </main>
  );
}
