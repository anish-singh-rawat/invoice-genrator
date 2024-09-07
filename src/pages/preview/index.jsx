import ItemDetails from "../../components/preview/itemDetails"
import PreviewClient from "../../components/preview/previewClientDetail"
import PreviewSubTotal from "../../components/preview/previewSubTotal"
import PreviewVendorDetail from "../../components/preview/previewVendorDetail"
import styles from "../preview/preview.module.css"


const Preview = (props) => {
  console.log(props, "!!!!!!!!!");


  return (
    <div className={styles.container}>
      <div>
        <PreviewVendorDetail venderData={props.venderData} image={props.selectedImage} />
      </div>
      <div>
        <PreviewClient clientData={props.clientData} />
      </div>
      <div>
        <ItemDetails tableRows={props.tableRows} />
      </div>
      <div>
        <PreviewSubTotal subTotal={props.subTotal} />
      </div>
      <div>
        <img src={props.signUrl} alt="sign" width={100} />
      </div>
      <div>
        <img src={props.uploadImage} alt="uploadImage" width={200} />
      </div>
    </div>
  )
}

export default Preview
