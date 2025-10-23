import React from 'react';

const Layout = (props: {children: React.ReactNode }) => {
    const { children } = props
    return (
        <div>
            <h2 className='bg-amber-700'>hIHI hAHA Dashboard</h2>
            { children }
        </div>
    );
};

export default Layout;