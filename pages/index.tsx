import { GetStaticProps } from 'next';

export default function Home() {
    return (
        <div></div>
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