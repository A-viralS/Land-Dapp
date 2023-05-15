import { useEffect, useState, React } from "react";



const RequestDetail = ({state}) =>{
  const [landList, setLandList] = useState([])
  const {contract} = state;

  useEffect(() =>{
    const getUnverifiedOwnersLand = async (event) => {
      const data = await contract.unverifiedOwnerLands();
      setLandList(data)
      // console.log(data)
    };
    contract && getUnverifiedOwnersLand()
  }, [contract])

  return(
    <div className="w-full mt-10 z-[50]">
      {landList.length === 0 ? (
          <p className="text-[24px] text-secondary text-center my-[100px]  w-full">You Don't Have Any Pending Land Verification.</p>
        ) : (
          landList.map((land) => (
            <>
              <div className="w-full flex flex-col gap-6 items-center">
                <div className="flex flex-col my-3 xs:w-[80%] w-[100vw] gap-y-2 xs:border-radius xs:border border-b  xs:pl-20 max-xs:px-5">
                  <div key={Math.random()}>
                    <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                      <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80  ">
                        Location
                      </div>
                      <div className="text-[18px] font-semibold max-xs:w-fit text-white">{land.state}, {land.city}, {land.district}</div>
                    </div>
    
                    <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                      <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80 ">
                      Property Number
                      </div>
                      <div className="text-[18px] font-semibold max-xs:w-fit text-white">{land.propertyNumber}</div>
                    </div>
    
                    <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                      <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80 ">
                      Market value
                      </div>
                      <div className="text-[18px] font-semibold max-xs:w-fit text-white">{land.marketValue.toString()}</div>
                    </div>
    
                    <div className={` flex flex-row items-center gap-10 border-cyan-900 w-[75%] p-3 `}>
                      <span className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80 ">
                        Verified Status
                      </span>
                      <span className={` text-red-800 text-[20px] font-semibold `}>
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className={` w-[100%] h-[1px] bg-black mt-[50px]`}>
              </div>
            </>
          ))
        )}
    </div>
  )

}


export default RequestDetail


// {land.verified.toString()} 