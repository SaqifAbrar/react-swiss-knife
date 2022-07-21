import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState(undefined);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if ("headers" in axiosParams)
			axiosParams.headers = JSON.stringify(axiosParams.headers);

		if ("data" in axiosParams)
			axiosParams.headers = JSON.stringify(axiosParams.headers);

		const fetchData = async (params) => {
			try {
				const result = await axios.request(params);
				setResponse(result.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData(axiosParams);
	}, [axiosParams]); // execute once only

	return { response, error, loading };
};
