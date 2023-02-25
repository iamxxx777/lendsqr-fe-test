import React from 'react'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';

import styles from "@/styles/Table.module.scss"

const Table = () => {
    return (
        <div className={styles.table_container}>
            <div className={styles.table_wrapper}>
                <table className={styles.table}>
                    <tr>
                        <th>
                            <div>
                                <span>Organization</span>
                                <FilterListOutlinedIcon />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Username</span>
                                <FilterListOutlinedIcon />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Email</span>
                                <FilterListOutlinedIcon />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Phone Number</span>
                                <FilterListOutlinedIcon />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Date Joined</span>
                                <FilterListOutlinedIcon />
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Status</span>
                                <FilterListOutlinedIcon />
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Landsqr</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Adedeji</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>adedeji@lendsqr.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>08078903721</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>May 15, 2020 10:00 AM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>
                                    <span>Inactive</span>
                                </p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p><MoreVertOutlinedIcon /></p>
                                <div className={styles.dropdown}>
                                    <ul>
                                        <li><RemoveRedEyeOutlinedIcon /> View Details</li>
                                        <li><PersonAddAltOutlinedIcon /> Blacklist User</li>
                                        <li><PersonRemoveOutlinedIcon /> Activate User</li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Landsqr</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Adedeji</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>adedeji@lendsqr.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>08078903721</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>May 15, 2020 10:00 AM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>
                                    <span>Inactive</span>
                                </p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p><MoreVertOutlinedIcon /></p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Landsqr</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Adedeji</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>adedeji@lendsqr.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>08078903721</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>May 15, 2020 10:00 AM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>
                                    <span>Inactive</span>
                                </p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p><MoreVertOutlinedIcon /></p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Landsqr</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Adedeji</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>adedeji@lendsqr.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>08078903721</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>May 15, 2020 10:00 AM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>
                                    <span>Inactive</span>
                                </p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p><MoreVertOutlinedIcon /></p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Landsqr</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Adedeji</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>adedeji@lendsqr.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>08078903721</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>May 15, 2020 10:00 AM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>
                                    <span>Inactive</span>
                                </p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p><MoreVertOutlinedIcon /></p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Landsqr</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Adedeji</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>adedeji@lendsqr.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>08078903721</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>May 15, 2020 10:00 AM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>
                                    <span>Inactive</span>
                                </p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p><MoreVertOutlinedIcon /></p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Landsqr</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Adedeji</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>adedeji@lendsqr.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>08078903721</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>May 15, 2020 10:00 AM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span>Inactive</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p><MoreVertOutlinedIcon /></p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Table