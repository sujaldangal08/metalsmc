export const formatErrorMessage = (error: Error) => {
    return String(error).replace("Error: ", "");
}