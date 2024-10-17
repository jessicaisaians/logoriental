import { FC } from "react";

interface TitleProps {}

const Title: FC<TitleProps> = ({}) => {
  return (
    <div className="flex flex-col gap-[1px]">
      <h1 className="name">Logoriental</h1>
      <p className="role">تیم طراحی وب و گرافیک</p>
    </div>
  );
};
export default Title;
