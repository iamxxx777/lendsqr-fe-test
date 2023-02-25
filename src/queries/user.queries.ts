import { queryClient, nextError } from "./queryClient";

export const getAllUsers = async () => {
    const { data } = await queryClient()
		.get("/users")
		.catch((err) => nextError(err));
    return data;
}

export const getUser = async (id: string) => {
	const { data } = await queryClient()
		.get(`/users/${id}`)
		.catch((err) => nextError(err));
	return data;
};

