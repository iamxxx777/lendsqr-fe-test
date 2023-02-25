import axios, { AxiosError } from "axios";

export const queryClient = (token?: string) =>
	axios.create({
		baseURL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1",
		headers: {
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` })
		}
	});

export const nextError = (e: AxiosError) => {
	//@ts-ignore
	throw e.response.data ? e.response.data.message : "Something went wrong";
};
