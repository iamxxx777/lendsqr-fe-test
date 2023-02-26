import { GetStaticProps } from 'next';
import Layout from '@/src/components/Layout'

import styles from '@/styles/Home.module.css'

export default function Home() {
    return (
        <Layout>
            <div></div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    
    return {
        redirect: {
            destination: "/users",
            permanent: false
        }
    };
};