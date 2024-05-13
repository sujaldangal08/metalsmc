import Pagination from "@/components/ui/pagination";
import DocsIcon from "@public/assets/Icons/docsIcon";
import PdfIcon from "@public/assets/Icons/pdfIcon";
import PngIcon from "@public/assets/Icons/pngIcon";
import { PiDownloadSimpleBold, PiEye } from "react-icons/pi";

const filesData = [
  {
    fileName: "myDocument.pdf",
    fileSize: "100 KB",
    uploadedOn: "12 May, 2024",
  },
  {
    fileName: "image.png",
    fileSize: "500 KB",
    uploadedOn: "10 May, 2024",
  },
  {
    fileName: "presentation.png",
    fileSize: "2 MB",
    uploadedOn: "08 May, 2024",
  },
];

const FileIcon = ({ fileName }: { fileName: string }) => {
  const getFileExtension = (name: string) => {
    const parts = name.split(".");
    return parts[parts.length - 1].toLowerCase();
  };

  const getIconComponent = (extension: string) => {
    switch (extension) {
      case "pdf":
        return <PdfIcon />;
      case "png":
        return <PngIcon />;
      case "doc":
      case "docx":
        return <DocsIcon />;
    }
  };

  const fileExtension = getFileExtension(fileName);
  return <>{getIconComponent(fileExtension)}</>;
};

export default function Attachment() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md h-full p-5">
        <h1 className="text-sm font-semibold leading-normal text-green">
          Attachments:
        </h1>
        <div>
          <div className="border border-[#37A05F] rounded mt-4 ">
            <table className="w-full">
              <thead>
                <tr className="bg-[#37A05F]">
                  <th className="px-4 py-4 pl-7 font-normal w-1/6 text-start text-white">
                    Documents
                  </th>
                  <th className="pl-48 py-4 font-normal w-1/6 text-start text-white">
                    Size
                  </th>
                  <th className="pl-24 py-4 font-normal w-1/6 text-start text-white">
                    Uploaded on
                  </th>
                </tr>
              </thead>
              <tbody>
                {filesData.map((file, idx) => (
                  <tr key={idx} className="">
                    <td className="px-4 py-4 pl-6">
                      <div className="bg-gray-100 p-3 pl-4 rounded-md shadow flex flex-row max-w-md items-center py-4">
                        <div className="flex flex-row gap-3 [&>svg]:w-7 items-center">
                          <FileIcon fileName={file.fileName} />
                          <p className="text-gray-800">{file.fileName}</p>
                        </div>
                        <div className="flex flex-row ml-auto gap-4 *:text-[22px] *:cursor-pointer">
                          <PiDownloadSimpleBold />

                          <PiEye />
                        </div>
                      </div>
                    </td>
                    <td className="pl-48 py-2">{file.fileSize}</td>
                    <td className="pl-24 py-2">{file.uploadedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Pagination
          className=""
          total={25}
          defaultCurrent={3}
          prevIconClassName="py-0 text-foreground !leading-[26px]"
          nextIconClassName="py-0 text-foreground !leading-[26px]"
        />
      </div>
    </>
  );
}
