import React from 'react';

const Repo = ({ repo }) => {
    return (
        <div className="my-3 md:my-0 rounded bg-white-200 mx-8 my-4 p-4 hover:shadow-md">
            <h3><a target='_blank' href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
            <p>Language: {repo.language}</p>
        </div>
    );
}

export default Repo;