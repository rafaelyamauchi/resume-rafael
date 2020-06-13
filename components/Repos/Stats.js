import React from 'react';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';
import { GoGist } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';

const Stats = ({ user }) => {
    return (
        <p className="text-center">
            Github stats: repositórios publicos:
            <RiGitRepositoryCommitsLine className="inline-block" /> {user.public_repos} /
            gists:
            <GoGist className="inline-block" />{user.public_gists} /
            seguidores:
            <FiUsers className="inline-block" />{user.followers}
        </p>
    );
}

export default Stats;