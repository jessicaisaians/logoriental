import { FC } from "react";

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
  return (
    <div
      className="rounded-5xl not-last-child:mb-3 p-6 flex flex-col relative w-full max-w-full bg-dark-6"
      style={{
        boxShadow:
          "0 .6021873017743928px .6021873017743928px -1.25px #0000002e,0 2.288533303243457px 2.288533303243457px -2.5px #00000029,0 10px 10px -3.75px #00000010",
      }}
    >
      <h1 className="heading-1 !text-[28px]">تیم طراحی لوگورینتال </h1>
      <p className="body text-pretty">
        {`با عشق به طراحی و خلاقیت، وب‌سایت‌ها و طرح‌های گرافیکی‌ای خلق می‌کنیم که هم زیبا هستند و هم کار کردن با آن‌ها راحت و لذت‌بخش است. توجه به جزئیات و طراحی کاربرپسند همیشه اولویت ماست تا تجربه‌ای عالی برای کاربران رقم بزنیم.`}
      </p>
    </div>
  );
};
export default Intro;
