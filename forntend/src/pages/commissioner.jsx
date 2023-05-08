// 


import styles from '../style';
import { Footer2, Ownernav } from '../components';
import { useState, useEffect } from 'react';
import {logo1} from "../assets"


const Commissioner = ({ state }) => {
  const [list, setLandList] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const getInspectorsDetails = async (event) => {
      const data = await contract.getInspectors();
      setLandList(data);
      console.log(data);
    };
    contract && getInspectorsDetails();
  }, [contract]);

  return (
    <div className="dark:bg-gray-800">
      <Ownernav />

      <div className="flex flex-col bg-gray-900 md:my-0 my-10 relative">



        <div className="flex flex-col items-center pt-10 min-h-[51.2vh] z-[10]">
          <h2 className="text-2xl font-bold mb-8 ml-10 self-start text-gradient">
            Land Inspectors
          </h2>
          <div className="bg-white dark:bg-gray-800 w-[80%] rounded-lg shadow overflow-hidden">

            <table className="w-full ">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Inspector ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Wallet Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    District
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    City
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 overflow-scroll">
                {list.map((inspector) => (
                  <tr key={inspector.inspectorId.toString()}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-[16px]">
                      {inspector.inspectorId.toString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-[16px]">
                      {inspector.walletAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-[16px]">
                      {inspector.district}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-[16px]">
                      {inspector.city}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <div className='w-[200px] h-[200px]'>
          <div className='absolute z-[1] w-[20%] h-[25%] right-0 top-0 left-30 pink__gradient'></div>
          <div className='absolute z-[3] w-[40%] h-[40%] right-0 top-0 white__gradient'></div>
          <div className='absolute z-[2] w-[20%] h-[20%] right-0 top-0 blue__gradient'></div>
          <div className='absolute z-[1] w-[100%] h-[100%] opacity-80 right-0 top-0 bg-gray-900'></div>
          <img src={logo1} alt="WaterMark" className="absolute opacity-5 w-full h-full top-0 -z-[0]"/>
        </div>

      </div>

      <div className="bottom-0 w-full">
        <Footer2 />
      </div>
    </div>
  );
};

export default Commissioner;
