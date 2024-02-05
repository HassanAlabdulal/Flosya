import { Button } from "@/components/ui/button";
// import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
  return (
    <main className="min-h-screen w-full background">
      <div className=" flex flex-col items-center justify-center pt-64">
        <div>
          <h1 className="text-black lg:text-8xl font-extrabold lg:leading-tight tracking-tight text-5xl text-center ">
            الأمان المالي بدءًا <br />
            <span className="text-primary ">من حصادي</span>
          </h1>
        </div>
        <div className="mt-12">
          <Button className="inline-flex items-center justify-center px-7 py-6 text-xl  shadow-2xl bg-black text-white hover:bg-neutral-800 rounded-3xl">
            متحمس تعرف أكثر؟ 🔥
          </Button>
        </div>
        <div>
          {/* <Player
            src="./animation.json"
            background="transparent"
            speed="1"
            style={{ width: "200px", height: "200px" }}
            loop
            autoplay
          /> */}
        </div>
      </div>
    </main>
  );
}
