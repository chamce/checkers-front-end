import React from 'react';

export default function Message(props) {

    return (
        <>
            <tr className='align-middle' style={ {minHeight: '54.8px'} }>
                { props.message.sender_id === props.recipient.id ? <td style={{wordWrap: 'break-word', maxWidth: '1px'}} className='text-start'><div style={{display: 'inline-block', padding: '8px', maxWidth: '372px'}} className='rounded-pill bg-white'>{ props.message.text }</div></td> : <td style={{wordWrap: 'break-word', maxWidth: '1px'}} className='text-end'><div style={{display: 'inline-block', padding: '8px', maxWidth: '371px'}} className='rounded-pill bg-primary'>{ props.message.text }</div></td> }
            </tr>
        </>
    );
}