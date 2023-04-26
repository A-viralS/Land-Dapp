import {Footer2, Ownernav,} from '../components';
import { useState, useEffect } from "react";

const commissioner = ({state }) => {
  const [List, setLandList] = useState([])
  const {contract} = state;

  useEffect(() =>{
    const getInspectorsDetails = async (event) => {
      const data = await contract.getInspectors()
      setLandList(data)
      console.log(data)
    };
    contract && getInspectorsDetails()
  }, [contract])

  return (
  
    <div className="bg-white w-full overflow-hidden h-full ">
        <Ownernav/>
        
        <div>
          <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-8">Land Inspectors</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Inspector ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Wallet Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      District
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      City
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {List.map((inspector) => (
                    <tr key={inspector.inspectorId.toString()}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {inspector.inspectorId.toString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {inspector.walletAddress}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {inspector.district}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {inspector.city}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className=" bottom-0 w-full">
         <Footer2/>
        </div>
    </div>
  );
}


export default commissioner;