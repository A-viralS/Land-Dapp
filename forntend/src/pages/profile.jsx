import {UserNavbar, Footer2, UserTopbar, PropertyDetail, } from '../components';

const profile = () => (
  <div className=" bg-slate-300 w-full overflow-hidden h-full">
    {/* <UserNavbar/> */}
    <div>
    <UserTopbar/>
    </div>
    <div className={` w-full mt-[20px]`}>
    <div className="w-full mt-10">
      <div className="w-full flex flex-col gap-6 items-center">
      <div className="flex flex-col my-3 xs:w-[80%] w-[100vw] gap-y-2 xs:pl-20 max-xs:px-5">

      <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
                Name
              </div>
              <div className="text-[16px] max-md:text-right">Adeyoju Joel</div>
            </div>

            <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
              Wallet Address
              </div>
              <div className="text-[16px] max-md:text-right">
                003xrgfdckoln49pn932idnvo2
              </div>
            </div>

            <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
              Residential Address:
              </div>
              <div className="text-[16px] max-md:text-right">Dansoman, westley grammar, Methodist University Accra Ghana</div>
            </div>

            <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
              Email
              </div>
              <div className="text-[16px] max-md:text-right">adeyojuibukunoluwa1@gmail.com</div>
            </div>

            <div className={` flex flex-row items-center xs:gap-10 border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
              Contact Number
              </div>
              <div className="text-[16px] max-md:text-right">0508855102</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative bottom-0 w-full items-center">
      <Footer2/>
    </div>
  </div>
)

export default profile