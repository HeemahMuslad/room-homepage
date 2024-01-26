import { useState } from "react";
import Main from "./components/Main";
import data from "./data.json";
const App = () => {
  const [currentUser, setCurrentUser] = useState(0);
  const handleNextButton = () => {
    currentUser === data.length - 1
      ? setCurrentUser(0)
      : setCurrentUser(currentUser + 1);
  };
  const handlePrevButton = () => {
    currentUser === 0
      ? setCurrentUser(data.length - 1)
      : setCurrentUser(currentUser - 1);
  };
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div>
      <Main
        children={data.map((room) => (
          <div
            key={room.id}
            className={`grid grid-cols-3 h-full  lg1:grid-cols-2 md:grid-cols-1 ${
              room.id - 1 === currentUser
                ? "w-full z-10 opacity-100 transition-opacity ease-in block  delay-75 "
                : "absolute left-0 right-0 m-auto  w-0 z-0 opacity-0 transition-opacity ease-out "
            }   `}
          >
            <div
              className=" relative col-span-2 lg1:col-span-1 h-full bg-cover bg-center  "
              style={{
                backgroundImage: `url(${room.image})`,
              }}
            >
              <nav className={`flex items-center w-max      mx-auto py-10 ${
                  room.id - 1 !== currentUser ? "hidden" : "block"
                }`}>
                <div
                  onClick={toggleMenu}
                  className={`hamburger cursor-pointer hidden ${
                    isActive ? "active" : ""
                  } w-auto p-1 border-2 border-black/3 border-solid rounded`}
                >
                  <span className="bar block bg-white w-xsm my-1 mx-auto h-xsm"></span>
                  <span className="bar block bg-white  w-xsm my-1 mx-auto h-xsm"></span>
                  <span className="bar block bg-white  w-xsm my-1 mx-auto h-xsm"></span>
                </div>
                <div className="logo w-sm ">
                  <img src="./images/logo.svg" alt="" />
                </div>
                <div className={`navLinks ${isActive ? "active" : ""} `}>
                  <ul className={"flex text-white gap-3 font-semibold  "}>
                    <li
                      onClick={closeMenu}
                      className="link transition ease-in-out delay-150 hover:-translate-y-1  hover:underline hover:scale-110"
                    >
                      <a href="#">home</a>
                    </li>
                    <li
                      onClick={closeMenu}
                      className="link transition ease-in-out delay-150 hover:-translate-y-1  hover:underline hover:scale-110"
                    >
                      <a href="#">shop</a>
                    </li>
                    <li
                      onClick={closeMenu}
                      className="link transition ease-in-out delay-150 hover:-translate-y-1  hover:underline hover:scale-110"
                    >
                      <a href="#">about</a>
                    </li>
                    <li
                      onClick={closeMenu}
                      className="link transition ease-in-out delay-150 hover:-translate-y-1  hover:underline hover:scale-110"
                    >
                      <a href="#">contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div
                className={`button flex absolute bottom-0 md:right-0 ml-20 ${
                  room.id - 1 !== currentUser ? "hidden" : "block"
                }`}
              >
                <div
                  onClick={handlePrevButton}
                  className="flex px-5 py-3 bg-black hover:bg-secondary cursor-pointer transition delay-150"
                >
                  <img src="./images/icon-angle-left.svg" alt="" />
                </div>
                <div
                  onClick={handleNextButton}
                  className="flex px-5 py-3 bg-black hover:bg-secondary cursor-pointer transition delay-150"
                >
                  <img src="./images/icon-angle-right.svg" alt="" />
                </div>
              </div>
            </div>
            <div
              className={` ${
                room.id - 1 !== currentUser ? "hidden" : "block"
              } bg-white`}
            >
              <div className=" w-md mx-auto justify-center h-full gap-3 flex flex-col ">
                <h1 className="font-bold text-2xl">{room.title}</h1>
                <p className="text-xs text-primary">{room.offer}</p>
                <div className="flex items-center gap-2">
                  <a
                    className="text-primary  tracking-widest hover:text-secondary transition delay-150"
                    href="#"
                  >
                    SHOP NOW
                  </a>
                  <img src="./images/icon-arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
        aboutSection={
          <div className="grid grid-cols-7 lg2:grid-cols-3 sm:grid-cols-1 h-full">
            <div className="col-span-2 lg1:col-span-1 sm:col-span-1 ">
              <img
                className="h-full w-full"
                src="./images/image-about-dark.jpg"
                alt=""
              />
            </div>
            <div className="  col-span-3 lg1:col-span-1 sm:col-span-1  flex h-full justify-center flex-col w-md m-auto md:h-60">
              <p> About our furniture</p>
              <p className="text-xs">
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
            <div className="col-span-2 lg1:col-span-1 sm:col-span-1">
              <img
                className="h-full w-full"
                src="./images/image-about-light.jpg"
                alt=""
              />
            </div>
          </div>
        }
      ></Main>
    </div>
  );
};

export default App;
