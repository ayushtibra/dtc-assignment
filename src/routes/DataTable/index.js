import { Link } from "react-router-dom";
import { useDataTable } from "../../hooks/useDataTable";

const mapBoolen = {
    true: 'true',
    false: 'false'
}

const DataTable = () => {
    const {
        handleNextPage,
        handlePrevPage,
        setSearchTerm,
        currentPage,
        tableData,
        searchTerm,
        currentItems,
        totalPages
    } = useDataTable();

    if (tableData.length === 0) {
        return <p>Loading data....</p>
    }

    return (
        <div className="container w-3/4 m-auto my-4">
            <div className="row">
                <Link to='/login'>
                    <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Back to Login
                    </button>
                </Link>
                <Link to='/'>
                    <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-2.5 py-1.5 mb-4 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Back to home
                    </button>
                </Link>
                <div className="col-md-12 p-2">
                    <input
                        type="text"
                        className="my-3 block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="thead-dark">
                            <tr>
                                {Object.keys(tableData[0] || {}).map((key) => (
                                    <th key={key} scope="col" className="uppercase px-3 py-3.5 text-left text-sm font-semibold text-gray-900">{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentItems.length > 0 ? (
                                currentItems.map((item, index) => (
                                    <tr key={index}>
                                        {Object.values(item).map((val, idx) => {
                                            if (typeof val == 'boolean') {
                                                return <td key={idx} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{mapBoolen[val]}</td>
                                            }

                                            return <td key={idx} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{val}</td>
                                        }
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={Object.keys(tableData[0]).length}>
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="relative">
                        <button
                            className="disabled:opacity-75 disabled:cursor-not-allowed rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 absolute left-2"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-500 align-self-center absolute left-1/2">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 absolute right-2"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTable;