import { Controller, useFormContext } from "react-hook-form";

function MetadataTable() {
  const { register } = useFormContext();

  const metaFields = ["name", "contact", "extra"];

  return (
    <div className="my-4 rounded-md overflow-hidden border border-gray-300">
      <table className="w-full relative">
        <thead>
          <tr className="text-base h-[40px] text-[#434343] bg-primary-lighter sticky top-0 left-0 z-10 pr-5">
            {["Title", "Value", "Action"].map((header) => (
              <th
                key={header}
                className="w-1/3 font-medium first:pl-5 px-2 text-start "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metaFields.map((item) => (
            <tr
              key={item}
              className={`h-[30px] text-[#424242] font-normal text-sm text-start `}
            >
              <td className="capitalize pl-5 py-4">{item}</td>
              <td className="px-2 py-4">
                <input
                  type="text"
                  placeholder={`Enter ${item}`}
                  className="border-0 outline-none focus:ring-0 border-b border-gray-300 py-1.5 px-0.5 focus:border-gray-600 w-52"
                  {...register(`meta.${item}`)}
                />
              </td>
              <td>1</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MetadataTable;
