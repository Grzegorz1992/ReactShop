import { BACK_END_URL } from "../constants/api";

export function addProductToFavourites({ params: { productId } }) {
	return fetch(`${BACK_END_URL}/favourites`, {
		method: "POST",
		body: {
			productId: Number(productId),
		},
		headers: {
			"Content-Type": "application/json",
		},
	});
}
