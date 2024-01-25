import { ReactNode } from "react";
interface Props {
  children: ReactNode[];
  aboutSection:ReactNode
}
const Main = ({ children , aboutSection}: Props) => {
  return (
    <>
    <div className="h-screen"><div className="relative flex items-center  justify-between h-max  md:h-screen">
        {children}
      </div>
      <div className="h-min ">{aboutSection}</div></div>
      
    </>
  );
};

export default Main;
