import Image from "next/image";
import Link from "next/link";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright";
import IconItem from "./components/IconItem";
import Diamond from "./components/icons/Diamond";
import Insta from "./components/icons/insta";
import MapPin from "./components/icons/MapPin";
import Intro from "./components/intro";
import Services from "./components/Services/Services";

export default function Page() {
  return (
    <section className="w-full mx-auto flex flex-col gap-6">
      <header
        className="flex w-full gap-3 items-center justify-between bg-[var(--dark-6)] p-[6px] pl-[19px] rounded-[30px]"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <div className="h-[68px] w-[68px] rounded-full relative overflow-hidden">
            <Image
              src={"/images/logOriental.jpg"}
              fill
              className="object-cover"
              alt="Logoriental"
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <h1 className="name">Logoriental</h1>
            <p className="role">تیم طراحی وب و گرافیک</p>
          </div>
        </div>
        <Link
          passHref
          href={"https://www.instagram.com/logoriental"}
          target="_blank"
        >
          <div className="h-[42px] w-[42px] rounded-[18px] bg-[var(--dark-10)] flex items-center justify-center">
            <Insta color="var(--purple-80)" fill="var(--purple-80)" />
          </div>
        </Link>
      </header>
      <Intro />
      <div className="grid md:grid-cols-2 gap-[24px]">
        <div className="col-span-1 flex flex-col w-full gap-3 items-start justify-start bg-[var(--dark-6)] p-6 rounded-[30px]">
          <IconItem
            icon={<Diamond color="var(--green-40)" fill="var(--green-40)" />}
            title="مهارت‌ها"
          />
        </div>
        <div className="col-span-1 flex flex-col w-full gap-3 items-start justify-center bg-[var(--dark-6)] px-6 pt-6 rounded-[30px]">
          <IconItem
            icon={<MapPin color="var(--green-40)" fill="var(--green-40)" />}
            title="تهران، ایران"
          />
          <div className="h-[180px] max-w-full w-full md:w-[388px] relative overflow-hidden mt-3">
            <Image
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)",
              }}
              src={"/images/globe_teh_sm.png"}
              fill
              alt="tehran,IRAN"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
      <Services />
      <Contact />
      <Copyright />
    </section>
  );
}
