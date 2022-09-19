import axios from "axios";

const BASE_URL = "https://vintage-soul-store.herokuapp.com";

function getToken() {
	const auth = JSON.parse(localStorage.getItem("VintageSoul"));
	if (auth) {
		const token = {
			headers: {
				Authorization: `Bearer ${auth.token}`,
			},
		};
		return { token, name: auth.name };
	}
	return false;
}

function SignInApi(body) {
	const promise = axios.post(`${BASE_URL}/sign-in`, body);
	return promise;
}

function SignUpApi(body) {
	const promise = axios.post(`${BASE_URL}/sign-up`, body);
	return promise;
}

function getProductsApi(limit) {
	const promise = axios.get(`${BASE_URL}/products?limit=${limit}`);
	return promise;
}

function getCartApi() {
	const auth = getToken();
	const promise = axios.get(`${BASE_URL}/cart`, auth.token);
	return promise;
}

function getProductApi({ idProduct }) {
	const promise = axios.get(`${BASE_URL}/product/${idProduct}`);
	return promise;
}

function postCartApi(product) {
	const auth = getToken();
	const promise = axios.post(`${BASE_URL}/cart`, product, auth.token);
	return promise;
}

function deleteItemCart(id) {
	const auth = getToken();
	const promise = axios.delete(`${BASE_URL}/cart/${id}`, auth.token);
	return promise;
}

function editUserAddress(address) {
	const auth = getToken();
	const promise = axios.put(`${BASE_URL}/user`, address, auth.token);
	return promise;
}

function getUserAddress() {
	const auth = getToken();
	const promise = axios.get(`${BASE_URL}/user`, auth.token);
	return promise;
}

function postSale(){
	const auth = getToken();
	const promise = axios.post(`${BASE_URL}/sales`, {}, auth.token);
	return promise;
}

export {
	SignInApi,
	SignUpApi,
	getToken,
	getCartApi,
	getProductsApi,
	getProductApi,
	postCartApi,
	deleteItemCart,
	editUserAddress,
	getUserAddress,
	postSale
};
