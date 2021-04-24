import React from 'react';

const Count = ({match}) => {
    return (
        <div>
            <h2>About {match.params.name}</h2>
        </div>
    );
};

export default Count;
