import styles from "../previewSubTotal/previewSubTotal.module.css"


const PreviewSubTotal = ({ subTotal }) => {
    return (
        <div className={styles.container}>
            <div className={styles.SubTotal}>
                <p className={styles.title}>Subtotal</p>
                <p>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
            <div className={styles.SubTotal}>
                <p className={styles.title}>Tax(0%)</p>
                <p>&#8377; 0.00</p>
            </div>
            <div className={styles.SubTotal}>
                <p className={styles.title}>Total</p>
                <p>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
            <div className={styles.SubTotal}>
                <p className={styles.total}>Balance Due</p>
                <p className={styles.total}>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
        </div>
    )
}

export default PreviewSubTotal
