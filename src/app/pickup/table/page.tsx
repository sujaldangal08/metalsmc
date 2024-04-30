
import React from 'react'

function table() {

    const data = [
        {
         
          customer: "Customer 1",
          material: "Iron,Alloy,steel",
          weight: "4 Tons",
          location: "Auuburn",
          status: "Completed",

        },
        {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
          {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
          {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
          {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
          {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
          {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },        {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
          {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
          {
         
            customer: "Customer 1",
            material: "Iron,Alloy,steel",
            weight: "4 Tons",
            location: "Auuburn",
            status: "Completed",
  
          },
    ]

  return (
<div className="flex flex-col rounded-md shadow-md bg-white">
<table className="w-[70%] h-[300px] relative border-separate border-spacing-0">
    <tr className="text-base h-[40px] text-[#434343] bg-[#C6E7D9] sticky top-0 left-0 z-10 text-semiblod">
      <th className="font-regular px-2 text-start border-y-primary border-y-[1px]">
        Customer Name
      </th>
      <th className="font-regular px-2 text-start border-y-primary border-y-[1px]">
        Material
      </th>
      <th className="font-regular px-2 text-start border-y-primary border-y-[1px]">
        Total Weight
      </th>
      <th className="font-regular px-2 text-start border-y-primary border-y-[1px]">
        Delivery Location
      </th>
      <th className="font-regular px-2 text-start border-y-primary border-y-[1px]">
        Status
      </th>
      <th className="font-regular px-2 text-start w-[80px] border-y-primary border-y-[1px]">
        Action
      </th>
    </tr>
    <tbody>
      {data?.map((curr: any, indx: number) => (
        <tr
          className={`h-[30px] text-[#424242] font-regular text-sm text-start ${
            indx % 2 !== 0 ? "bg-[#E9EBED]" : ""
          }`}
          key={indx}
        >
          <td className="px-2 py-4">{curr?.customer}</td>
          <td className="px-2 py4">{curr?.material}</td>
          <td className="px-2 py-4">{curr?.weight}</td>
          <td className="px-2 py-4">{curr?.location}</td>
          <td className="px-2 py-4">{curr?.status}</td>
          <td className="px-2 py-4"></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default table