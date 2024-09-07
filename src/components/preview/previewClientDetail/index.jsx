import styles from "../previewClientDetail/previewClientDetail.module.css"
import { IoMdCall } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";

const PreviewClient = (props) => {
    const { Name, Email, Address,City, ZipCode, Phone, Mobile, Fax } = props.clientData

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.billTo}>Bill To</p>
                <h4 className={styles.clientName}>{Name}</h4>
                <p>{Address}</p>
                <p>{City}</p>
                <p>{ZipCode}</p>
                <p><IoMdCall size={14}/> {Phone}</p>
                <p><FaMobileRetro size={15}/> {Mobile}</p>
                <p><FaFax size={13} /> {Fax}</p>
                <p>{Email}</p>
            </div>
        </div>
    )
}

export default PreviewClient
