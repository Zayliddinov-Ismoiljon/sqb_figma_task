import React from "react";
import { Carousel } from "antd";
import "./style.css"

const Main : React.FC = () : JSX.Element => {
  return(
    <>
      {/* MIKRO KREDIT SECTION START */}

      <div className="bg-[#E5EBF0] pt-[103px] pb-[50px] w-full carousel_inner">
        <div className="container mx-auto">
          <Carousel className="h-[348px]">
            <div>
              <div className="w-[567px]">
                <h2 className="text-[#0A1E32] font-semibold text-[46px] m-0">
                  Кредит “MIKRO”
                </h2>
                <span className="text-[#6B7886] font-normal text-xl my-[26px] block">
                  Кредит на любые цели в <br /> эквиваленте до 500 000 $
                </span>
                <div className="flex items-center">
                  <a href="#" className="font-medium text-[16.75px] text-[#fff] py-[12px] 
                  px-[37px] text-center; rounded" style={{background: "linear-gradient(118.44deg, #1D3448 22.99%, #878B90 100%)"}}>
                    Оформить
                  </a>
                  <a href="#" className="font-medium text-[16.75px] text-[#1D3448] py-[12px] px-[37px] text-center rounded border border-[#1D3448] ml-[12px]">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[567px]">
                <h2 className="text-[#0A1E32] font-semibold text-[46px] m-0">
                  Кредит “MIKRO”
                </h2>
                <span className="text-[#6B7886] font-normal text-xl my-[26px] block">
                  Кредит на любые цели в <br /> эквиваленте до 500 000 $
                </span>
                <div className="flex items-center">
                  <a href="#" className="font-medium text-[16.75px] text-[#fff] py-[12px] 
                  px-[37px] text-center; rounded" style={{background: "linear-gradient(118.44deg, #1D3448 22.99%, #878B90 100%)"}}>
                    Оформить
                  </a>
                  <a href="#" className="font-medium text-[16.75px] text-[#1D3448] py-[12px] px-[37px] text-center rounded border border-[#1D3448] ml-[12px]">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[567px]">
                <h2 className="text-[#0A1E32] font-semibold text-[46px] m-0">
                  Кредит “MIKRO”
                </h2>
                <span className="text-[#6B7886] font-normal text-xl my-[26px] block">
                  Кредит на любые цели в <br /> эквиваленте до 500 000 $
                </span>
                <div className="flex items-center">
                  <a href="#" className="font-medium text-[16.75px] text-[#fff] py-[12px] 
                  px-[37px] text-center; rounded" style={{background: "linear-gradient(118.44deg, #1D3448 22.99%, #878B90 100%)"}}>
                    Оформить
                  </a>
                  <a href="#" className="font-medium text-[16.75px] text-[#1D3448] py-[12px] px-[37px] text-center rounded border border-[#1D3448] ml-[12px]">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[567px]">
                <h2 className="text-[#0A1E32] font-semibold text-[46px] m-0">
                  Кредит “MIKRO”
                </h2>
                <span className="text-[#6B7886] font-normal text-xl my-[26px] block">
                  Кредит на любые цели в <br /> эквиваленте до 500 000 $
                </span>
                <div className="flex items-center">
                  <a href="#" className="font-medium text-[16.75px] text-[#fff] py-[12px] 
                  px-[37px] text-center; rounded" style={{background: "linear-gradient(118.44deg, #1D3448 22.99%, #878B90 100%)"}}>
                    Оформить
                  </a>
                  <a href="#" className="font-medium text-[16.75px] text-[#1D3448] py-[12px] px-[37px] text-center rounded border border-[#1D3448] ml-[12px]">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>    
      </div>

      {/* MIKRO KREDIT SECTION END */}

      {/* BIZNES SECTION START */}

      <div className="pt-[93px] pb-[190px]">
        <div className="container mx-auto">
          <div className="malo_biznes mb-[159px]">
            <h2 className="text-4xl font-medium text-[#1F3144] mb-[38px]">
              Для малого бизнеса
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3 py-[32px] px-[22px] max-md:col-span-6 max-sm:col-span-12 rounded-[10.34px] bg-[#F2F5F8] pt-[443px] avtokredit_item">
                <h3 className="text-[#0A1E32] text-[21.92px] font-[650]">АВТОКРЕДИТ</h3>
                <p className="text-base font-medium text-[#677481]">
                  На покупку новых электрокаров и всех типов легковых автомобилей
                </p>
              </div>
              <div className="col-span-3 max-md:col-span-6 max-sm:col-span-12 ">
                <div className="col-span-12 py-[24px] px-[22px] h-[276px] bg-[#F2F5F8] rounded-[10.34px] mb-7 pt-[148px] depozit_item">
                  <h3 className="text-[#0A1E32] text-[21.92px] font-[650]">Депозиты</h3>
                  <p className="text-base font-medium text-[#677481]">
                  Увеличивайте свой капитал и получайте максимальные доходы
                  </p>
                </div>
                <div className="col-span-12 py-[32px] px-[22px] h-[276px] bg-[#F2F5F8] rounded-[10.34px] pt-[138px] paket_item">
                  <h3 className="text-[#0A1E32] text-[21.92px] font-[650]">Пакеты обслуживания</h3>
                  <p className="text-base font-medium text-[#677481]">
                    Операции в национальной и иностранной валюте
                  </p>
                </div>
              </div>
              <div className="col-span-3 py-[32px] px-[22px] max-md:col-span-6 max-sm:col-span-12 rounded-[10.34px] bg-[#F2F5F8] pt-[152px] banking_item">
                  <h3 className="text-[#0A1E32] text-[21.92px] font-[650]">
                    Green banking
                  </h3>
                  <p className="text-base font-medium text-[#677481]">
                    Поддержка социально и экологически ориентированных проектов
                  </p>
                  <img src={require('../../assets/images/pic_green.png')} alt="image" className="w-[270px] mx-auto" />
              </div>
              <div className="col-span-3  max-md:col-span-6 max-sm:col-span-12">
                <div className="col-span-12 py-[24px] px-[22px] h-[276px] bg-[#F2F5F8] rounded-[10.34px] mb-7 pt-[155px] finans_item">
                  <h3 className="text-[#0A1E32] text-[21.92px] font-[650]">
                    Финансирование
                  </h3>
                  <p className="text-base font-medium text-[#677481]">
                    Выгодные условия для расширения и увеличения мощностей вашего бизнеса
                  </p>
                </div>
                <div className="col-span-12 py-[32px] px-[22px] h-[276px] bg-[#F2F5F8] rounded-[10.34px] pt-[152px] card_item">
                  <h3 className="text-[#0A1E32] text-[21.92px] font-[650]">
                    Кредитные линии
                  </h3>
                  <p className="text-base font-medium text-[#677481]">
                    Возможность получить финансирование от крупнейших банков
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="services mb-[160px]">
            <h2 className="text-[#1D3448] font-medium text-4xl mb-[38px]">Услуги и сервисы для бизнеса</h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 max-md:col-span-12 bg-[#E5EBF0] rounded-lg pt-[46px] pb-[55px] px-[33px]">
                <div className="w-full flex items-center mb-[33px]">
                  <img src={require('../../assets/images/start_pic.png')} alt="image" className="mr-[32px]" />
                  <h3 className="font-semibold text-[26px] text-[#1D3448] m-0 p-0">
                    Начало<br/>бизнеса
                  </h3>
                </div>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[10px] w-full text-base font-medium text-[#0A1E32]">
                  Открыть расчетный счет
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[10px] w-full text-base font-medium text-[#0A1E32]">
                  Подобрать тариф
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[27px] w-full text-base font-medium text-[#0A1E32]">
                  Фабрика проектов
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <p className="text-[#1D3448] text-base">
                  Открывайте бизнес вместе с нами на выгодных условиях и достигайте поставленных целей
                </p>
              </div>
              <div className="col-span-4 max-md:col-span-12 bg-[#E5EBF0] rounded-lg pt-[46px] pb-[55px] px-[33px]">
                <div className="w-full flex items-center mb-[33px]">
                  <img src={require('../../assets/images/rise_pic.png')} alt="image" className="mr-[32px]" />
                  <h3 className="font-semibold text-[26px] text-[#1D3448] m-0 p-0">
                    Развитие<br />бизнеса
                  </h3>
                </div>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[10px] w-full text-base font-medium text-[#0A1E32]">
                  Кредитные продукты
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[10px] w-full text-base font-medium text-[#0A1E32]">
                  Кредитные линии
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[27px] w-full text-base font-medium text-[#0A1E32]">
                  Депозиты
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <p className="text-[#1D3448] text-base">
                  Получите финансирование банка для увеличения мощностей вашего бизнеса на выгодных условиях
                </p>
              </div>
              <div className="col-span-4 max-md:col-span-12 bg-[#E5EBF0] rounded-lg pt-[46px] pb-[55px] px-[33px]">
                <div className="w-full flex items-center mb-[33px]">
                  <img src={require('../../assets/images/service_pic.png')} alt="image" className="mr-[32px]" />
                  <h3 className="font-semibold text-[26px] text-[#1D3448] m-0 p-0">
                    Услуги и <br /> сервисы
                  </h3>
                </div>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[10px] w-full text-base font-medium text-[#0A1E32]">
                  Интернет-банкинг
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[10px] w-full text-base font-medium text-[#0A1E32]">
                  SMS-информирование
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <a href="#" className="bg-white rounded text-center py-[19px] px-[24px] flex items-center justify-between mb-[27px] w-full text-base font-medium text-[#0A1E32]">
                  Зарплатный проект
                  <img src={require("../../assets/images/Line.png")} alt="icon" />
                </a>
                <p className="text-[#1D3448] text-base">
                  Расскажите, что важно для вашего бизнеса, и мы автоматически подберём наиболее подходящие условия
                </p>
              </div>
            </div>
          </div>

          <div className="actualniy">
            <h2 className="text-4xl font-medium text-[#0A1E32] mb-[38px] p-0">
              Актуально сейчас
            </h2>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6 max-md:col-span-12 bg-[#F2F5F8] rounded-lg 
              p-[40px] coins_item">
                <h2 className="text-[32px] text-[#283C4F] font-medium mb-[29px] p-0 w-[80%]">
                  MIKRO кредит на любые цели вашего бизнеса
                </h2>
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="w-[48%] rounded-md bg-[#FFFFFF] py-6 px-[30px]">
                    <span className="text-[46px] text-[#D52023] font-medium">21%</span>
                    <p className="text-base font-normal text-[#283C4F]">
                      Минимальная кредитная ставка
                    </p>
                  </div>
                  <div className="w-[48%] rounded-md bg-[#FFFFFF] py-6 px-[30px]">
                    <span className="text-[46px] text-[#D52023] font-medium">5 лет</span>
                    <p className="text-base font-normal text-[#283C4F]">
                      Максимальный срок кредита
                    </p>
                  </div>
                </div>
                <div className="rounded-md bg-[#FFFFFF] bg-opacity-[60%] py-[21px] 
                px-[30px] mb-[32px]">
                  <span className="text-[46px] font-bold text-[#D52023]">500 000 $</span>
                  <p className="text-base text-[#283C4F] w-[65%]">
                    Максимальная сумма выплаты кредита в эквиваленте
                  </p>
                </div>
                <div className="w-[265px] flex flex-col">
                  <a href="#" className="py-[10px] px-[35px] bg-[#004D7E] rounded text-white text-base font-semibold text-center mb-[13px]">
                    Получить консультацию
                  </a> 
                  <a href="#" className="py-[10px] px-[35px] bg-[#FFFFFF] rounded text-[#004D7E] text-base font-semibold text-center border border-[#004D7E]">
                    Подробнее
                  </a>
                </div>
              </div>

              <div className="col-span-6 max-md:col-span-12 bg-[#F2F5F8] rounded-lg 
              p-[40px] sme_item">
                <h2 className="text-[32px] text-[#283C4F] font-medium mb-[29px] p-0 w-[90%]">
                  SME Green Loan - “зеленое” финансирование
                </h2>
                <div className="rounded-md bg-[#FFFFFF] bg-opacity-[60%] py-[21px] 
                px-[30px] mb-[32px] flex items-center justify-between">
                  <span className="text-[46px] font-bold text-[#D52023]">70%</span>
                  <p className="text-base text-[#283C4F] w-[70%]">
                    от стоимости проекта - максимальная сумма выплаты кредита
                  </p>
                </div>
                <p className="text-lg text-[#0A1E32] font-normal mt-[20px] mb-[44px]">
                  На пополнение оборотных средств бизнес-проектов с социальной и экологической ответственностью
                </p>
                <div className="w-[265px] flex flex-col">
                  <a href="#" className="py-[10px] px-[35px] bg-[#004D7E] rounded text-white text-base font-semibold text-center mb-[13px]">
                    Получить консультацию
                  </a> 
                  <a href="#" className="py-[10px] px-[35px] bg-[#FFFFFF] rounded text-[#004D7E] text-base font-semibold text-center border border-[#004D7E]">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="school mt-[164px] mb-[155px]">
            <h2 className="text-[#0A1E32] font-medium text-4xl">Школа предпринимателей от SQB</h2>
            <div className="grid grid-cols-12 gap-6 bg-[#E5EBF0] rounded-lg pt-[73px] 
            pb-[85px] px-[47px] mt-[38px]">
              <div className="col-span-6 max-sm:col-span-12">
                <img src={require("../../assets/images/tadbirkorlar-maktabi.png")} alt="image" className="mb-[38px]"/>
                <h2 className="text-[#0A1E32] text-[38px] font-medium m-0 p-0">
                  Открываете производство стройматериалов?
                </h2>
                <p className="text-base text-[#0A1E32] mt-[10px] mb-[51px]">
                  «Школа предпринимателей» – это полный практический курс, включающий в себя теорию и практику для успешного старта или ведения бизнеса в сфере производства строительных материалов. 
                </p>
                <a href="#" className="w-[264px] text-base text-white bg-[#004D7E] font-semibold py-[10px] text-center block rounded">
                  Подробнее
                </a>
              </div>
              <div className="col-span-6 max-sm:col-span-12">
                <ul className="w-full p-0 m-0 list-none flex flex-col">
                  <li className="bg-white w-full rounded-md flex items-center py-[20px] 
                  px-[22px] mb-[18px]">
                    <img src={require('../../assets/images/ico_check.png')} alt="icon" />
                    <span className="text-base text-[#0A1E32] ml-5">
                      Ознакомьтесь с практическими пособиями по специализации
                    </span>
                  </li>
                  <li className="bg-white w-full rounded-md flex items-center py-[20px] 
                  px-[22px] mb-[18px]">
                    <img src={require('../../assets/images/ico_check.png')} alt="icon" />
                    <span className="text-base text-[#0A1E32] ml-5 ">
                      Ознакомьтесь с практическими пособиями по специализации
                    </span>
                  </li>
                  <li className="bg-white w-full rounded-md flex items-center py-[20px] 
                  px-[22px] mb-[18px]">
                    <img src={require('../../assets/images/ico_check.png')} alt="icon" />
                    <span className="text-base text-[#0A1E32] ml-5">
                      Ознакомьтесь с практическими пособиями по специализации
                    </span>
                  </li>
                  <li className="bg-white w-full rounded-md flex items-center py-[20px] 
                  px-[22px] mb-[18px]">
                    <img src={require('../../assets/images/ico_check.png')} alt="icon" />
                    <span className="text-base text-[#0A1E32] ml-5">
                      Ознакомьтесь с практическими пособиями по специализации
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="currency">
            <h2>
              Курс валют для юридических лиц
            </h2>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6 max-sm:col-span-12 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BIZNES SECTION END */}
    </>
  )
}

export default Main