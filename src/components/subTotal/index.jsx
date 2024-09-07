import styles from "../subTotal/subTotal.module.css"



const SubTotal = ({ subTotal }) => {
    return (
        <div className={styles.container}>
            <div className={styles.SubTotal}>
                <p>Subtotal</p>
                <p>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
            <div className={styles.SubTotal}>
                <p>Tax(0%)</p>
                <p>&#8377; 0.00</p>
            </div>
            <div className={styles.SubTotal}>
                <p>Total</p>
                <p>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
            <div className={`${styles.SubTotal} ${styles.total}`}>
                <p>Balance Due</p>
                <p>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
        </div>
    )
}

export default SubTotal
