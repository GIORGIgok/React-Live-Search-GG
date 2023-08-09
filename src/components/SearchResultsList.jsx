export const SearchResultsList = ({ results }) => {
    if (!results.length) {
        return [];
    }

    return (
        <div className="results-list">
            {results.length > 0 ? (
                results.map((res, id) =>
                <p key={id}>{res.strDrink}</p>
                )
            ) : (
                <p>No results.</p>
            )}
        </div>
    );
};
