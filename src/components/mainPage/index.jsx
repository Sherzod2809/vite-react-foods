import React from "react";
import MainLayoutPages from "../MainLayout/MainLayoutPages";
import Header from "../Header/header";

const MainPage = () => {
  return (
    <div className="">
        <Header/>
      <main>
        <MainLayoutPages/>
      </main>
    </div>
  );
};

export default MainPage;
