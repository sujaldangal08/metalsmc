import { SignUpSchema } from "@/utils/validators/signup.schema";
import { api } from "../api";
import { LoginSchema } from "@/utils/validators/login.schema";
import useSWR, { SWRResponse } from "swr";

const baseEnd = "/school";

// async function useSign(body: LoginSchema) {
//   const response = await api.post<any, LoginSchema>(`${baseEnd}`, {
//     email: body.email,
//     password: body.password,
//   });
//   return response.data;
// }

// export function useSignIn(): SWRResponse<any, any, any> {
//   const { data, error, isLoading, mutate, isValidating } = useSWR(
//     "/posts",
//     async (...args) => {
//       const response = await api.get("/posts");
//       return response.data;
//     }
//   );
//   return { data, error, isLoading, mutate, isValidating };
// }

// useSWR(point,()=>{})

export function useSignIn(): SWRResponse<any, any, any> {
  const response = useSWR("/posts", async (...args) => {
    const response = await api.get(...args);
    return response.data;
  });
  return response;
}

// async function useSignUp(body: SignUpSchema) {
//   const response = await api.post<
//     any,
//     { password: string; email: string; confirmPassword: string }
//   >(`${baseEnd}`, {
//     email: body.email,
//     password: body.email,
//     //This needs to remove. Keeping this as backend have not removed it. So keep it for now
//     confirmPassword: body.confirmPassword,
//   });
//   return response.data;
//}
