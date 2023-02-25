import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

import TableRow from './TableRow';
import Filters from './Filters';

import { User } from '@/src/types';

import styles from "@/styles/Table.module.scss"

type Props = {
    users: User[];
}

const Table = ({ users }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [currentUsers, setCurrentUsers] = useState<any>([]);
    const [rows, setRows] = useState(10);
    const [show_filters, setShowFilters] = useState(false);

    const handleClick = (event: any) => {
        setCurrentIndex(event.selected);
    }

    useEffect(() => {
        const index = currentIndex * rows;
        const current = users?.slice(index - rows, index);
        setCurrentUsers(current);
    }, [currentIndex, rows, users])

    return (
        <div className={styles.table_container}>
            <div className={styles.table_wrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>
                            <div>
                                <span>Organization</span>
                                <FilterListOutlinedIcon onClick={() => setShowFilters(!show_filters)} />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Username</span>
                                <FilterListOutlinedIcon onClick={() => setShowFilters(!show_filters)} />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Email</span>
                                <FilterListOutlinedIcon onClick={() => setShowFilters(!show_filters)} />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Phone Number</span>
                                <FilterListOutlinedIcon onClick={() => setShowFilters(!show_filters)} />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Date Joined</span>
                                <FilterListOutlinedIcon onClick={() => setShowFilters(!show_filters)} />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Status</span>
                                <FilterListOutlinedIcon onClick={() => setShowFilters(!show_filters)} />
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {currentUsers?.map((row: User) => <TableRow key={row.id} user={row} />)}
                    </tbody>
                </table>
                <Filters showFilters={show_filters} />
            </div>
            <div className={styles.table_footer}>
                <div className={styles.table_footer_count}>
                    <span>Showing</span>
                    <select value={rows} onChange={(e) => setRows(Number(e.target.value))}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select> 
                    <span>out of {users?.length}</span>
                </div>
                <div className='table_paginate'>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handleClick}
                        pageRangeDisplayed={2}
                        pageCount={Number(users?.length) / rows}
                        previousLabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        // renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table