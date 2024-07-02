import { useEffect, useState } from "react";
import axios from 'axios';

const useList = (page) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(null);
    const pageSize = 20;

    const fetchData = async() => {
        try {
            if(page <= Math.ceil(total/pageSize) || page === 1) {
                const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
                setTotal(response?.data?.page?.['total-content-items']);
                setItems(prevItems => {
                    return [...prevItems, ...response?.data?.page?.['content-items']?.content]
                });
                setLoading(false);
            }
        } catch (error) {
            alert(error.message);
            console.error('Error',  error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    return { items, loading };
};

export default useList;