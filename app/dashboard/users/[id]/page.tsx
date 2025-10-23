import React from 'react';

const Page = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const { id } = params
    return (
        <div>
            USER DETAIL { id }
        </div>
    );
};

export default Page;