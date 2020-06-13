import React from 'react';
import Repo from './Repo';
import Stats from './Stats';


const Repos = ({ repos, user }) => {
    return (
        <div>
            <h3 className="text-2xl mt-5 md:text-4xl font-bold text-center uppercase md:mt-10">Repositórios git</h3>
            <Stats user={user} />
            <div className="md:grid md:grid-cols-3 md:gap-2 md:my-6">
                {
                    repos.map(repo => {
                        return (
                            <Repo key={repo.id} repo={repo} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Repos;