import React, { useEffect, useState} from 'react';
import { search } from '../services/user.service';
import SearchResult from './SearchResult/Searchresult';
import { debounce } from "lodash"
function Search() {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (!query.trim().length) {
			setResults([]);
			return;
		}
		search(query)
			.then(usersFound => setResults(usersFound))
			.catch(e => console.log(e));
	}, [query]);

    const handleDebounceTimer = debounce((time) =>{
        setQuery(time)
    },750);


	return (
		<div>
			<h1>Search</h1>
			<form>
				<input onChange={e => handleDebounceTimer(e.target.value)} />
			</form>
            <hr />
            <div>
                {results.map(result => <SearchResult user = {result} key={result._id} />)}
            </div>

		</div>
	);
}

export default Search;