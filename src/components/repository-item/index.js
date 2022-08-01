import React from 'react';

function RepositoryItem({ name, linkToRepo, fullName }) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{fullName}</h4>
            <a
                href={linkToRepo}
                target="blank"
                rel="norefer"
            >
                joaosodres/blog
            </a>
        </div>
    );
}

export default RepositoryItem;