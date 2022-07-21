import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
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
	}, [axiosParams]);

	return { response, error, loading };
};

/*
    const { response, loading, error } = useAxios({
        method: 'POST',
        url: '/api',
        headers: { 
          accept: '* / *' //nospacesbetween
        },
        data: {
            userId: 1,
            id: 19392,
            title: 'title',
            body: 'Sample text',
        },
    });
*/
