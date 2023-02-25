import React, { useState } from 'react'
import { format } from 'date-fns'
import Link from 'next/link';

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';

import styles from "@/styles/Table.module.scss";
import { User } from '@/src/types';

type Props = {
    user: User;
}


const TableRow = ({ user }: Props) => {

    const [showOptions, setShowOptions] = useState(false);

    return (
        <tr>
            <td>
                <div>
                    <p>{user.orgName}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{user.userName}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{user.email}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{user.phoneNumber}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{format(new Date(user.createdAt), 'LLL cc yyyy, hh:mm a')}</p>
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
                    <p onClick={() => setShowOptions(!showOptions)}><MoreVertOutlinedIcon /></p>
                    <div className={[styles.dropdown, showOptions && styles.show_dropdown].join(" ")}>
                        <ul>
                            <Link href={`/users/${user.id}`}><li><RemoveRedEyeOutlinedIcon /> View Details</li></Link>
                            <li><PersonAddAltOutlinedIcon /> Blacklist User</li>
                            <li><PersonRemoveOutlinedIcon /> Activate User</li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TableRow