import axios from "axios";

const BASE_URL = "http://localhost:5000";

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

export {
	SignInApi,
	SignUpApi,
	getToken,
	getCartApi,
	getProductsApi,
	getProductApi,
	postCartApi,
};
