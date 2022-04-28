import axios, {AxiosResponse} from "axios";

// https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},

export type TestAuthDataType = {
	errorText: string
	info: string
	yourBody: {
		success: true
	}
	yourQuery: {}
}

export const RequestAPI = {

	testAuth(checked: boolean) {
			return axios.post<TestAuthDataType>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: checked})

	}
}
