import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Common/Avatar/Avatar';
import './SearchResult.scss'
function SearchResult({user}) {
	
	return (
		<div className='SearchResult'>
			<Avatar />
            <Link to = {'/profile/' + user.username}>
            {user.username}
            </Link>
		</div>
    )
}

export default SearchResult;