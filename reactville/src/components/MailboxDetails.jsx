import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

export default function MailboxDetails (props) {
    
    const [mailbox, setMailbox]= useState('')
    let { id } = useParams()
    
console.log(id)
    useEffect(() => {
        let selectedMailbox = props.mailboxes.find((mailbox)=> mailbox.id === parseInt(id))
        setMailbox(selectedMailbox)
    }, [props.mailboxes, id])

    return mailbox ? (
        <div className="detail">
                <h1>{mailbox.id}</h1>
                <h2>{mailbox.boxholder}</h2>
                <h2>{mailbox.boxSize}</h2>
        </div>
    ) : <h1>Mailbox Not Found!</h1>
} 