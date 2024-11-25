import { Noto_Serif_KR } from "next/font/google";

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export default function Home() {
  const date = new Date("2017-01-09");
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const today = new Date(Date.now() + KR_TIME_DIFF);

  const diff = today.getTime() - date.getTime();
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="fixed -z-10 object-cover h-full w-full"
      >
        <source src="/videos/pond.mp4" type="video/mp4" />
      </video>
      <main
        className={`${notoSerif.className} h-full flex items-center justify-center flex-col pb-20 bg-black/20 text-white`}
      >
        <h2 className="text-9xl font-medium">日</h2>
        <h1 className="mt-10 text-7xl font-medium">오늘까지</h1>
        <h2 className="mt-10 text-5xl pb-40">+{diffDay}일</h2>
      </main>
    </>
  );
}
