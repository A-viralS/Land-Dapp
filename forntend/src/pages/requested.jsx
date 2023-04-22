import {UserNavbar, Footer2, UserTopbar, RequestDetail, } from '../components';

const requested = ({state}) => (
  <div className=" w-full overflow-hidden h-full">
    {/* <UserNavbar/> */}
    <div >
    <UserTopbar/>
    </div>
      <div className={` w-full bg-slate-300`}>
        <RequestDetail state={state}/>
      </div>
    <div className="relative bottom-0 w-full items-center">
    <Footer2/>
    </div>

  </div>
)

export default requested