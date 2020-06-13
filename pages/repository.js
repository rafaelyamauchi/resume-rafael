import React from 'react';
import '../utils/getUser';
import getUser from '../utils/getUser';

const Index = ({ repos, user }) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl" >Meus repositórios</h1>
            <h2 className="font-bold text-3xl"></h2>
            <p>Github stats: public repository: {user.public_repos} / public gists: {user.public_gists}</p>
            {
                repos.map(repo => {
                    return (
                        <div key={repo.id} className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md">
                            <h3>{repo.full_name}</h3>
                            <p>Language: {repo.language}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
export async function getServerSideProps(context) {
    const { repos, user } = await getUser('rafaelyamauchi');

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index;