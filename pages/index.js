import React from 'react';
import '../utils/getUser';
import getUser from '../utils/getUser';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Sumary from '../components/Sumary';
import Skills from '../components/Skills';
import Repos from '../components/Repos';
import Footer from '../components/Footer';


const Index = ({ repos, user }) => {
    return (
        <div className="container mx-auto">
            <PageHead />
            <Hero />
            <Sumary />
            <Skills />
            <Repos repos={repos} user={user} />
            <Footer />
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