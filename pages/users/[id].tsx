import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { QueryClient, dehydrate, useQuery } from 'react-query';
import ReactStars from 'react-stars'
import WestIcon from '@mui/icons-material/West';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { getAllUsers, getUser } from '@/src/queries';
import { User as TUser } from '@/src/types';

import Layout from '@/src/components/Layout';
import { Avatar, Button } from '@/src/components/UI';
import GeneralDetails from '@/src/components/User/GeneralDetails';
import OtherTabs from '@/src/components/User/OtherTabs';

import styles from "@/styles/User.module.scss";

const tabs = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

const User = () => {
    const router = useRouter();
    const { query: { id } } = router;

    const [activeTab, setActiveTab] = useState(0);

    //@ts-ignore
    const { data } = useQuery("user", () => getUser(id), { enabled: !!id });
    const user = data as TUser;

    return (
        <Layout>
            <div className={styles.user_page}>
                <div className={styles.user_page_wrapper}>
                    <section className={styles.top_section}>
                        <div className={styles.back}>
                            <button onClick={() => router.back()}>
                                <WestIcon />
                                <span>Back to Users</span>
                            </button>
                        </div>
                        <div className={styles.title}>
                            <h1>User Details</h1>
                            <div className={styles.action_btns}>
                                <Button size="md" variant='red_plain'>Blacklist User</Button>
                                <Button size="md" variant='cyan_plain'>Activate User</Button>
                            </div>
                        </div>
                    </section>
                    <section className={styles.user_banner}>
                        <div className={styles.banner_info}>
                            <div className={styles.user_img}>
                                {/* <div className={styles.avatar}>
                                    <PersonOutlineOutlinedIcon />
                                </div> */}
                                <div>
                                    <Avatar size='xxl' name={user?.profile?.firstName} image={user?.profile?.avatar} />
                                </div>
                                <div className={styles.user_name}>
                                    <h2>{user?.profile?.firstName} {user?.profile?.lastName}</h2>
                                    <p>{user?.accountNumber}</p>
                                </div>
                            </div>
                            <div className={styles.user_tier}>
                                <h3>User&apos;s Tier</h3>
                                <ReactStars
                                    count={3}
                                    value={1}
                                    size={16}
                                    color2={'#E9B200'} 
                                />
                            </div>
                            <div className={styles.user_balance}>
                                <h2>₦{user?.accountBalance}</h2>
                                <p><span>{user?.profile?.bvn}</span>/<span>Providus Bank</span></p>
                            </div>
                        </div>
                        <div className={styles.banner_tabs}>
                            <div className={styles.tabs_container}>
                                {tabs.map((tab: string, i) => (
                                    <button onClick={() => setActiveTab(i)} className={activeTab === i ? styles.tab_active : ""} key={i}>{tab}</button>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className={styles.user_tabs}>
                        {activeTab === 0 && <GeneralDetails data={user} />}
                        {activeTab !== 0 && <OtherTabs />}
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const users = await getAllUsers();

    const paths = users.map((user: TUser) => ({
        params: { id: user.id },
    }))

    return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const queryClient = new QueryClient();

    //@ts-ignore
    queryClient.prefetchQuery("user", () => getUser(params.id))

    return {
        props: {
            queryDehydratedState: dehydrate(queryClient)
        }
    };
}


export default User