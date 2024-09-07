import styles from "../itemDetails/itemDetails.module.css"




const data = [
    { id: "1", itemName: "iphone", rate: "1000", qty: "2", amount: "2000" },
    { id: "2", itemName: "iphone", rate: "1000", qty: "2", amount: "2000" },
]
const ItemDetails = ({tableRows}) => {
    console.log(tableRows);
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.description}>DESCRIPTION</th>
                        <th className={styles.rate}>RATE</th>
                        <th className={styles.qty}>QTY</th>
                        <th className={styles.amount}>AMOUNT</th>
                    </tr>
                </thead>
                <tbody className={styles.tablebody}>
                    {tableRows && tableRows.map((ele) => {
                        return (
                            <tr className={styles.allItems} key={ele.id}>
                                <td className={styles.itemName}>{ele.description}</td>
                                <td>&#8377;{ele.rate}.00</td>
                                <td className={styles.itemqty}>{ele.qty}</td>
                                <td>&#8377;{ele.amount}.00</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemDetails
