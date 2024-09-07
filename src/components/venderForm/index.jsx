import styles from "../venderForm/venderForm.module.css"
import { venderFormData } from "../../utils/venderFormDetails"

const VenderForm = ({ handleChange, venderData }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Billed By <span>(Your Details)</span></p>
            <form className={styles.form}>
                {venderFormData.map((ele) =>
                    <div key={ele.id} className={styles.inputContainer}>
                        {/* <label htmlFor={ele.label}>{ele.label}</label> */}
                        <input id={ele.id} type={ele.type} name={ele.name} value={venderData[ele.name]} placeholder={ele.placeholder} onChange={handleChange} autoComplete="off" />
                    </div>
                )}
            </form>
        </div>
    )
}

export default VenderForm
