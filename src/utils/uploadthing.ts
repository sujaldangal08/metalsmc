import { generateReactHelpers } from '@uploadthing/react/hooks';

export { generateUploadButton, generateUploadDropzone, generateUploader } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers();
