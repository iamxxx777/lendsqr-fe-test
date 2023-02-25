import React from 'react'
import { Button } from '../UI';

import styles from '@/styles/Table.module.scss';

type Props = {
    showFilters: boolean;
}

const Filters = ({ showFilters }: Props) => {

    const handleSubmit = (e: any) => {
        e.preventSubmit();
    }

    return (
        <div className={[styles.filters, showFilters && styles.show_filters].join(" ")}>
            <form className={styles.filters_wrapper} onSubmit={handleSubmit}>
                <div className={styles.form_input}>
                    <label>Organization</label>
                    <select>
                        <option value="marvel">Marvel</option>
                        <option value="marvel">Marvel</option>
                        <option value="marvel">Marvel</option>
                        <option value="marvel">Marvel</option>
                        <option value="marvel">Marvel</option>
                        <option value="marvel">Marvel</option>
                    </select>
                </div>
                <div className={styles.form_input}>
                    <label>Username</label>
                    <input type="text" placeholder='User' className={styles.input_control} />
                </div>
                <div className={styles.form_input}>
                    <label>Email</label>
                    <input type="email" placeholder='Email' className={styles.input_control} />
                </div>
                <div className={styles.form_input}>
                    <label>Date</label>
                    <input type="date" placeholder='Date' className={styles.input_control} />
                </div>
                <div className={styles.form_input}>
                    <label>Phone Number</label>
                    <input type="text" placeholder='Phone Number' className={styles.input_control} />
                </div>
                <div className={styles.form_input}>
                    <label>Status</label>
                    <select>
                        <option value="marvel">Active</option>
                        <option value="marvel">Inactive</option>
                        <option value="marvel">Pending</option>
                        <option value="marvel">Blacklisted</option>
                    </select>
                </div>
                <div className={styles.filters_btns}>
                    <Button size={'sm'} variant='plain'>Reset</Button>
                    <Button size={'sm'}>Filter</Button>
                </div>
            </form>
        </div>
    )
}

export default Filters