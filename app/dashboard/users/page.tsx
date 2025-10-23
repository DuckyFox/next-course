import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h2>users</h2>
            <ul className='mt-10'>
                <li>
                    <Link href="/dashboard/users/1">
                        u1
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/users/2">
                        u2
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/users/3">
                        u3
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/users/4">
                        u4
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Page;