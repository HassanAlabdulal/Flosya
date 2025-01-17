import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MagnifierIcon, ChartIcon } from "./icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  dataAos: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "نوفر وقتك",
    description:
      "وقتك غالي عندنا، نوفر لك الوقت بخدماتنا اللي تخلص شغلك في غمضة عين!",
    icon: <MedalIcon />,
    dataAos: "fade-up",
  },
  {
    title: "استخدامنا سهل",
    description: "ما فيه تعقيد، ولا لف ودوران، استخدامنا مثل شربة الماي!",
    icon: <ChartIcon />,
    dataAos: "fade-up",
  },
  {
    title: "دقتنا متناهية",
    description: " فارق الهللة يعني لك؟ عندنا الدقة موضوع ما نمزح فيه٠",
    icon: <MagnifierIcon />,
    dataAos: "fade-up",
  },
];

export default function Features() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <main className="flex justify-center items-center bg-[#f9f9f9]">
      <section className="container py-12 sm:py-32 " id="features">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
          <div>
            <h2
              className="text-3xl md:text-5xl flex items-center max-sm:justify-center font-extrabold
              md:leading-tight tracking-tight "
            >
              <span
                className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
                data-aos="fade-up"
              >
                مميزاتنا
              </span>
            </h2>
            <p
              className="text-muted-foreground text-xl mt-4 mb-8 max-sm:text-center"
              data-aos="fade-up"
            >
              حصادي هو الحل الأمثل لإدارة استثماراتك بذكاء وتحقيق أهدافك
              المالية.
            </p>

            <div className="flex flex-col gap-8">
              {serviceList.map(
                ({ icon, title, description, dataAos }: ServiceProps) => (
                  <Card
                    key={title}
                    data-aos={dataAos}
                    className="bg-[#f7f7f7] shadow-md rounded-[1.5rem]"
                    // className="bg-[#f7f7f7] hover:bg-[#f5f5f5] dark:bg-[#121212] border-0 dark:hover:bg-[#27272a] transition-all duration-400 shadow-md rounded-[1.5rem]"
                  >
                    <CardHeader className="flex md:flex-row md:justify-start justify-center md:items-start items-center gap-4">
                      <div className=" p-1 rounded-2xl ">{icon}</div>
                      <div>
                        <CardTitle className="max-sm:text-center">
                          {title}
                        </CardTitle>
                        <CardDescription className="text-md mt-2 max-sm:text-center">
                          {description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                )
              )}
            </div>
          </div>

          <img
            data-aos="fade-up"
            src="/assets/featuers.svg"
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt="services"
          />
        </div>
      </section>
    </main>
  );
}
