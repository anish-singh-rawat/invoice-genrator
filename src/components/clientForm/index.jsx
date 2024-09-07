import { clientFormData } from "../../utils/clientFormDetails"
import styles from "../clientForm/clientForm.module.css"



const ClientForm = ({ handleChange, clientData }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Billed To <span>(Client Details)</span></p>
            <form className={styles.form}>
                {clientFormData.map((ele) =>
                    <div key={ele.id} className={styles.inputContainer}>
                        {/* <label htmlFor={ele.name}>{ele.label}</label> */}
                        <input id={ele.id} type={ele.type} name={ele.name} value={clientData[ele.name]} onChange={handleChange} placeholder={ele.placeholder} autoComplete="off" />
                    </div>
                )}
            </form>
        </div>
    )
}

export default ClientForm
