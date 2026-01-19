import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/HomePage";
import MainPage from "./components/mainPage";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import Backet from "./components/backet/Backet";

import MenuPage from "./Tabs/MenuPage";
import Profil from "./Tabs/Profil";
function App() {
  return (
    <div className="flex bg-[#252836]">
      <div className="max-lg:hidden basis-32">
        <Header />
      </div>
      <div className="w-full px-30 max-xl:px-14 max-lg:px-0">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </div>
      <div className="max-lg:flex fixed hidden justify-between items-center left-0 bottom-0 w-full h-25 bg-[#1F1D2B] px-8 py-7">
        <Sheet>
          <SheetTrigger className="group flex items-center justify-center cursor-pointer  hover:bg-[#df8c7e] transition-all  duration-300  rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu text-[#EA7C69] group-hover:text-white duration-300 transition-all hover:bg-[#EA7C6952]"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </SheetTrigger>
          <SheetContent className={"overflow-hidden!"}>
            <MenuPage />
          </SheetContent>
        </Sheet>

        <button className="group flex items-center justify-center cursor-pointer w-16 h-16 hover:bg-[#df8c7e] transition-all  duration-300  rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chart-pie-icon lucide-chart-pie text-[#EA7C69] group-hover:text-white duration-300 transition-all"
          >
            <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          </svg>
        </button>
        <button className="group flex items-center justify-center cursor-pointer w-16 h-16 hover:bg-[#df8c7e] transition-all  duration-300  rounded-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap ="round"
            strokeLinejoin="round"
            className="lucide lucide-house-icon lucide-house text-[#EA7C69] group-hover:text-white duration-300 transition-all"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </button>

        <Sheet>
          <SheetTrigger className="group flex items-center justify-center cursor-pointer w-16 h-16 hover:bg-[#df8c7e] transition-all  duration-300  rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart-icon lucide-shopping-cart text-[#EA7C69] group-hover:text-white duration-300 transition-all"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
          </SheetTrigger>
          <SheetContent>
            <Backet />
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger className="group flex items-center justify-center cursor-pointer w-16 h-16 hover:bg-[#df8c7e] transition-all  duration-300  rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin ="round"
                className="lucide lucide-user-icon lucide-user text-[#EA7C69] group-hover:text-white duration-300 transition-all"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
          </SheetTrigger>
          <SheetContent>
            <Profil />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default App;
