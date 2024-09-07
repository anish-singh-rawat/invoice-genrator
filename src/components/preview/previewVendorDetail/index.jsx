import styles from "../previewVendorDetail/previewVendorDetail.module.css"

const PreviewVendorDetail = (props) => {
    const { Name, Email, Address, BusinessNumber, City, Date, InvoiceNumber, ZipCode, Phone } = props.venderData

    return (
        <div className={styles.container}>
            <div className={styles.vendorDetail}>
                <div>
                    <img src={props.image} alt="Logo" width={100} />
                </div>
                <div className={styles.vendorAdd}>
                    <h2 className={styles.vendorName}>{Name}</h2>
                    <p><span className={styles.businessNum}>Business Number</span>{BusinessNumber}</p>
                    <p>{Address}</p>
                    <p>{City}</p>
                    <p>{ZipCode}</p>
                    <p>{Phone}</p>
                    <p>{Email}</p>
                </div>
            </div>
            <div className={styles.clientDetail}>
                <div>
                    <p className={styles.clientTitle}>INVOICE NO</p>
                    <p>{InvoiceNumber}</p>
                </div>
                <div>
                    <p className={styles.clientTitle}>DATE</p>
                    <p>{Date}</p>
                </div>
                <div>
                    <p className={styles.clientTitle}>DUE</p>
                    <p>On Reciept</p>
                </div>
                <div>
                    <p className={styles.clientTitle}>BALANCE DUE</p>
                    <p>INR &#8377;123456</p>
                </div>
            </div>
        </div>
    )
}

export default PreviewVendorDetail
