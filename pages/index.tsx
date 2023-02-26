import { GetServerSideProps } from 'next';

export default function Home() {
    return (
        <div></div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    
    return {
        redirect: {
            destination: "/users",
            permanent: false
        }
    };
};