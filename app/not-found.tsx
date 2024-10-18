import Link from "next/link";
import SectionAnimationWrapper from "./SectionAnimationWrapper";

export default function NotFound() {
  return (
    <SectionAnimationWrapper>
      <div className="h-fit pb-12 pt-8 min-h-fit w-full flex flex-col items-center justify-center rounded-5xl bg-dark-6">
        <h1 className="text-dark-10 text-[120px] font-bold">404</h1>
        <p className="text-light-60 text-lg mb-4">صفحه موردنظر یافت نشد!</p>
        <Link href={"/"} passHref>
          <button className="cursor-pointer hover:bg-purple-50 transition-colors bg-purple-80 rounded-[10px] py-2 px-5 text-dark-6">
            بازگشت به خانه
          </button>
        </Link>
      </div>
    </SectionAnimationWrapper>
  );
}
