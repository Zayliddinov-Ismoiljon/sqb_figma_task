import React from "react";


const Header : React.FC = () : JSX.Element => {
  return(
    <header>
      <div className="container mx-auto pt-[13px]">
        <div className="header flex items-center justify-between">
          <div className="flex items-center justify-between w-[70%]">
            <div className="flex items-center justify-between">
            <img src={require("../../assets/images/circled_menu.png")} alt="image" className="mr-[16px]"/>
            <a href="/">
              <img src={require("../../assets/images/Logo.png")} alt="logo" />
            </a>
            </div>
            <ul className="flex items-center justify-between p-0 m-0 list-none w-[75%]">
              <li><a href="#" className="font-medium text-[#838D97]">О банке</a></li>
              <li><a href="#" className="font-medium text-[#838D97]">Акционерам и инвесторам</a></li>
              <li><a href="#" className="font-medium text-[#838D97]">Антикоррупция</a></li>
              <li><a href="#" className="font-medium text-[#838D97]">Продажа имуществ</a></li>
            </ul>
          </div>
          <div className="flex items-center justify-between w-[20%]">
            <button className="bg-[#EFF2F6] p-[5px] rounded">
              <img src={require("../../assets/images/ico_search.png")} alt="" />
            </button>
            <button className="bg-[#EFF2F6] p-[5px] rounded">
              <img src={require("../../assets/images/ico_eye.png")} alt="" />
            </button>
            <button className="bg-[#EFF2F6] p-[5px] rounded text-[14px]">RU</button>
            <button className="flex items-center justify-between bg-[#EFF2F6] p-[5px] rounded text-center">
              <span className="text-[14px] mr-[6px]">Онлайн-банк</span>
              <img src={require("../../assets/images/ico_app.png")} alt="" />
            </button>
          </div>
        </div>   
      </div>
      <hr className="my-[12px] bg-[#EBF0F3]"/>
      <div className="container mx-auto">
        <div className="header__inner mb-[14px]">
          <ul className="flex items-center justify-between m-0 p-0 list-none w-full">
            <li><a href="#" className="text-[#9DA5AD] text-base font-medium">Физическим лицам</a></li>
            <li><a href="#" className="text-[#0A1E32] font-medium text-base border border-t-0 border-r-0 border-l-0 border-b-2 border-[#0A1E32] pb-[14px]">Малому бизнесу</a></li>
            <li><a href="#" className="text-[#9DA5AD] text-base font-medium">Корпоративным клиентам</a></li>
            <li className="flex items-center w-[50%] justify-end">
              <span className="flex items-center justify-between mr-[26px] text-[14px] 
              text-[#1D3448;]">
                <img src={require("../../assets/images/ico_phone.png")} alt="icon" className="mr-[4px]" />1180
              </span>
              <span className="flex items-center justify-between mr-[26px] text-[14px] 
              text-[#1D3448;]">
                <img src={require("../../assets/images/ico_pin.png")} alt="icon" className="mr-[4px]" />
                Офисы и банкоматы
              </span>
              <div className="flex items-center justify-between">
                <img src={require("../../assets/images/SQB_Green.png")} alt="icon" className="mr-[26px]" />
                <button>
                  <img src={require("../../assets/images/Joyda_app.png")} alt="icon" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header