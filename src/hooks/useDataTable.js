import { useEffect, useState } from "react";

export const useDataTable = () => {
    const [tableData, setTableData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(tableData || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);


    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resp = await data.json();
            setTableData(resp);
            setFilteredData(resp);
        }

        getData();
    }, []);

    useEffect(() => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filteredItems = tableData.filter((item) =>
            Object.keys(item).some((key) =>
                String(item[key]).toLowerCase().includes(lowercasedFilter)
            )
        );
        setFilteredData(filteredItems);
        setCurrentPage(1);
    }, [searchTerm, tableData]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return {
        handleNextPage,
        handlePrevPage,
        setCurrentPage,
        setSearchTerm,
        filteredData,
        currentPage,
        tableData,
        searchTerm,
        currentItems,
        totalPages
    }
}