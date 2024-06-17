import { useNavigate } from "react-router-dom";

export default function MailboxList (props) {
    // console.log(props)
    let navigate = useNavigate()
    
    const showMailboxes = (mailbox) => {
        navigate(`${mailbox.id}`)
    }

    return (
        <ul className="mail-box">
            {
                props.mailboxes.map((mailbox)=> (
                    <div className="mail-box" onClick={()=> showMailboxes(mailbox)} key={mailbox.id}>
                        <h3>View Info For {mailbox.boxHolder}</h3>
                        </div>
                ))
            }
        </ul>
    )
}