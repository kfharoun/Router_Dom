import { useNavigate } from "react-router-dom";

export default function MailboxForm (props) {
    
    let navigate = useNavigate()

    const newMailbox = props.newMailboxes

    const handleSubmit = (e) => {
        props.addBox(e)
        navigate('/mailboxes')
    }
    
    // console.log("form:", props)
    return (
        <div>
            <h3>Welcome to the building! Please input info.</h3>
        <form onSubmit={handleSubmit}>
        <select
          id="boxSize"
          name="boxSize"
          required
          onChange={props.handleChange}>
          <option value="" disabled selected>Select a size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

            <input type="text" value={newMailbox.boxHolder} onChange={props.handleChange} name={'boxHolder'} placeholder="Tenant Name"/>
            <button>Submit</button>
        </form>

        </div>
    )
}