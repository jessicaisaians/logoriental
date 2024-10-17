import { FC } from "react";

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
  return (
    <div
      className="rounded-[30px] gap-[12px] p-[24px] flex flex-col relative w-full max-w-full bg-[var(--dark-6)]"
      style={{
        boxShadow:
          "0 .6021873017743928px .6021873017743928px -1.25px #0000002e,0 2.288533303243457px 2.288533303243457px -2.5px #00000029,0 10px 10px -3.75px #00000010",
      }}
    >
      <h1 className="heading-1">تیم طراحی لوگورینتال </h1>
      <h1 className="body text-justify text-wrap md:text-pretty">
        با عشق به طراحی و خلاقیت، وب‌سایت‌ها و طرح‌های گرافیکی‌ای خلق می‌کنیم که
        هم زیبا هستند و هم کار کردن با آن‌ها راحت و لذت‌بخش است. توجه به جزئیات
        و طراحی کاربرپسند همیشه اولویت ماست تا تجربه‌ای عالی برای کاربران رقم
        بزنیم.
      </h1>
    </div>
  );
};
export default Intro;
