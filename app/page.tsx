import Image from "next/image";

export default function Page() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-start gap-4">
      <div className="flex w-full gap-3 items-center justify-start bg-zinc-900 p-4 rounded-[38px]">
        <div className="h-[74px] w-[74px] rounded-[28px] relative overflow-hidden">
          <Image
            src={"/images/logOriental.jpg"}
            fill
            className="object-cover"
            alt="Logoriental"
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <h1 className="text-2xl font-semibold tracking-tighter text-blue-400 font-bold">
            Logoriental
          </h1>
          <p className="text-base tracking-tighter">تیم طراحی وب و گرافیک</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 items-start justify-center bg-zinc-900 p-6 py-8 rounded-[38px]">
        <p className="text-2xl text-zinc-50 font-bold">
          سلام! ما تیم Logoriental هستیم!
        </p>
        <p className="text-zinc-300 text-base">
          با عشق به طراحی و خلاقیت، وب‌سایت‌ها و طرح‌های گرافیکی‌ای خلق می‌کنیم
          که هم زیبا هستند و هم کار کردن با آن‌ها راحت و لذت‌بخش است. توجه به
          جزئیات و طراحی کاربرپسند همیشه اولویت ماست تا تجربه‌ای عالی برای
          کاربران رقم بزنیم.
        </p>
      </div>
    </section>
  );
}
