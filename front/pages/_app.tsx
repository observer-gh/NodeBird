import React, {FunctionComponent} from 'react';
import Head from 'next/head';




const NodeBird:FunctionComponent<{Component:FunctionComponent}> = ({Component}) => {
    return(
        <>
            {/*  changes the HTML <head> elem */}
            <Head>
                <title>NodeBird!!Whoya</title>
            </Head>
            {/* might need to do sth about this.. */}
            <Component />
        </>
    );
}

export default NodeBird;