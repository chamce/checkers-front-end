import React from 'react';

export default function Message(props) {

    return (
        <>
            <>
                <tr className='align-middle' style={ {minHeight: '54.8px'} }>
                    { props.message.sender_id === props.recipient.id ? <td className='col-6 text-start'>{ props.message.text }</td> : <td className='col-6 text-end bg-primary'>{ props.message.text }</td> }
                </tr>
            </>
        </>
    );
}