import Link from "next/link";
import SectionAnimationWrapper from "./SectionAnimationWrapper";

export default function NotFound() {
  return (
    <SectionAnimationWrapper>
      <div className="h-fit pb-12 pt-8 min-h-fit w-full flex flex-col items-center justify-center rounded-[30px] bg-[var(--dark-6)]">
        <h1 className="text-[var(--dark-10)] text-[120px] font-bold">404</h1>
        <p className="text-[var(--light-60)] text-[18px] mb-4">
          صفحه موردنظر یافت نشد!
        </p>
        <Link href={"/"} passHref>
          <button className="cursor-pointer hover:bg-[var(--purple-50)] transition-colors bg-[var(--purple-80)] rounded-[10px] py-2 px-5 text-[var(--dark-6)]">
            بازگشت به خانه
          </button>
        </Link>
      </div>
    </SectionAnimationWrapper>
  );
}
