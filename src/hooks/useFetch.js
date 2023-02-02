import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        isLoading: true,
        data: null,
    });

    const getFetch = async () => {
        setState({ data: null, isLoading: true });
        const response = await fetch(url);
        const data = await response.json();
        setState({ data, isLoading: false });
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
    };
};
