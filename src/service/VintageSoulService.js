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
		return {token, name: auth.name};
	}
	return false;
};

function SignInApi(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
};

function SignUpApi(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
};

function getProductsApi(limit) {
    const promise = axios.get(`${BASE_URL}/products?limit=${limit}`);
    return promise;
};

function getCart() {
	const auth = getToken();	
		const promise = axios.get(`${BASE_URL}/cart`,auth.token );
		return promise;

};

export {SignInApi, SignUpApi, getToken, getCart, getProductsApi};
