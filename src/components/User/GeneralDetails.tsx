import React from 'react'
import { User } from '@/src/types';

import styles from "@/styles/Tabs.module.scss";

type Props = {
    data: User;
}

const GeneralDetails = ({ data }: Props) => {
    return (
        <div className={styles.tab_wrapper}>
            <div className={styles.tab_section}>
                <h2>Personal Information</h2>
                <div className={styles.tab_section_details}>
                    <div>
                        <h4>Full Name</h4>
                        <h3>{data?.profile?.firstName} {data?.profile?.lastName}</h3>
                    </div>
                    <div>
                        <h4>Phone Number</h4>
                        <h3>{data?.profile?.phoneNumber}</h3>
                    </div>
                    <div>
                        <h4>Email Address</h4>
                        <h3>{data?.email}</h3>
                    </div>
                    <div>
                        <h4>Bvn</h4>
                        <h3>{data?.profile?.bvn}</h3>
                    </div>
                    <div>
                        <h4>Gender</h4>
                        <h3>{data?.profile?.gender}</h3>
                    </div>
                    <div>
                        <h4>Marital Status</h4>
                        <h3>Single</h3>
                    </div>
                    <div>
                        <h4>Children</h4>
                        <h3>None</h3>
                    </div>
                    <div>
                        <h4>Type of Residence</h4>
                        <h3>Parent&apos;s Apartment</h3>
                    </div>
                </div>
            </div>
            <div className={styles.tab_section}>
                <h2>Education and Employment</h2>
                <div className={[styles.tab_section_details, styles.tab_section_details_alt].join(" ")}>
                    <div>
                        <h4>Level Of Education</h4>
                        <h3>{data?.education?.level}</h3>
                    </div>
                    <div>
                        <h4>Employment status</h4>
                        <h3>{data?.education?.employmentStatus}</h3>
                    </div>
                    <div>
                        <h4>Sector of employment</h4>
                        <h3>{data?.education?.sector}</h3>
                    </div>
                    <div>
                        <h4>Duration of employment</h4>
                        <h3>{data?.education?.duration}</h3>
                    </div>
                    <div>
                        <h4>Office email</h4>
                        <h3>{data?.education?.officeEmail}</h3>
                    </div>
                    <div>
                        <h4>Monthly Income</h4>
                        <h3>₦{data?.education?.monthlyIncome[1]} - ₦{data?.education?.monthlyIncome[0]}</h3>
                    </div>
                    <div>
                        <h4>Loan repayment</h4>
                        <h3>{data?.education?.loanRepayment}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.tab_section}>
                <h2>Socials</h2>
                <div className={styles.tab_section_details}>
                    <div>
                        <h4>Twitter</h4>
                        <h3>{data?.socials?.twitter}</h3>
                    </div>
                    <div>
                        <h4>Facebook</h4>
                        <h3>{data?.socials?.facebook}</h3>
                    </div>
                    <div>
                        <h4>Instagram</h4>
                        <h3>{data?.socials?.instagram}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.tab_section}>
                <h2>Guarantor</h2>
                <div className={styles.tab_section_details}>
                    <div>
                        <h4>Full Name</h4>
                        <h3>{data?.guarantor?.firstName} {data?.guarantor?.lastName}</h3>
                    </div>
                    <div>
                        <h4>Phone Number</h4>
                        <h3>{data?.guarantor?.phoneNumber}</h3>
                    </div>
                    <div>
                        <h4>Email Address</h4>
                        <h3>cousin@gmail.com</h3>
                    </div>
                    <div>
                        <h4>Relationship</h4>
                        <h3>Cousin</h3>
                    </div>
                </div>
            </div>
            <div className={styles.tab_section}>
                <h2 className={styles.invisible}>Guarantor</h2>
                <div className={styles.tab_section_details}>
                    <div>
                        <h4>Full Name</h4>
                        <h3>{data?.guarantor?.firstName} {data?.guarantor?.lastName}</h3>
                    </div>
                    <div>
                        <h4>Phone Number</h4>
                        <h3>{data?.guarantor?.phoneNumber}</h3>
                    </div>
                    <div>
                        <h4>Email Address</h4>
                        <h3>cousin@gmail.com</h3>
                    </div>
                    <div>
                        <h4>Relationship</h4>
                        <h3>Cousin</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralDetails