import React from 'react'
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

import Layout from '@/src/components/Layout'
import Table from '@/src/components/Table/Table';

import { getAllUsers } from '@/src/queries';

import styles from '@/styles/Dashboard.module.scss';

const Users = () => {
    const { data } = useQuery("allusers", () => getAllUsers());

    return (
        <Layout>
            <div className={styles.dashboard}>
                <div className={styles.dashboard_wrapper}>
                    <h1>Users</h1>
                    <section className={styles.stats_wrapper}>
                        <div className={styles.stat}>
                            <div className={[styles.stat_icon, styles.icon_purple].join(" ")}>
                                <PeopleAltOutlinedIcon />
                            </div>
                            <div className={styles.stat_title}>
                                <p>Users</p>
                            </div>
                            <div className={styles.stat_numbers}>
                                <p>2,435</p>
                            </div>
                        </div>
                        <div className={styles.stat}>
                            <div className={[styles.stat_icon, styles.icon_blue].join(" ")}>
                                <Groups2OutlinedIcon />
                            </div>
                            <div className={styles.stat_title}>
                                <p>Active Users</p>
                            </div>
                            <div className={styles.stat_numbers}>
                                <p>2,453</p>
                            </div>
                        </div>
                        <div className={styles.stat}>
                            <div className={[styles.stat_icon, styles.icon_orange].join(" ")}>
                                <Image
                                    src="/loans_icon.svg"
                                    alt="loans"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className={styles.stat_title}>
                                <p>Users with loans</p>
                            </div>
                            <div className={styles.stat_numbers}>
                                <p>12,453</p>
                            </div>
                        </div>
                        <div className={styles.stat}>
                            <div className={[styles.stat_icon, styles.icon_red].join(" ")}>
                                <Image
                                    src="/savings_icon.svg"
                                    alt="savings"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className={styles.stat_title}>
                                <p>Users with savings</p>
                            </div>
                            <div className={styles.stat_numbers}>
                                <p>102,453</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.table_section}>
                        <Table users={data} />
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const queryClient = new QueryClient();

    queryClient.prefetchQuery("allusers", () => getAllUsers())

    return {
        props: {
            queryDehydratedState: dehydrate(queryClient)
        }
    };
}

export default Users