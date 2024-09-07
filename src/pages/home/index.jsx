import { useEffect, useRef, useState } from "react";
import ClientForm from "../../components/clientForm";
import DescriptionForm from "../../components/descriptionForm";
import Footer from "../../components/footer";
import SubTotal from "../../components/subTotal";
import VenderForm from "../../components/venderForm";
import styles from "../home/home.module.css"
import { TiDelete } from "react-icons/ti";
import { FaCloudUploadAlt } from "react-icons/fa";
import Preview from "../preview";



const Home = ({ showPreview }) => {
    const fileInputRef = useRef("");
    const [selectedImage, setSelectedImage] = useState("");
    const [uploadImage, setUploadImage] = useState("");
    const [signUrl, setSignUrl] = useState("")
    const [venderData, setVenderData] = useState({ Name: "", Email: "", Address: "", City: "", ZipCode: "", Phone: "", BusinessNumber: "", InvoiceNumber: "", Date: "" })
    const [clientData, setClientData] = useState({ Name: "", Email: "", Address: "", City: "", ZipCode: "", Phone: "", Mobile: "", Fax: "" })
    const [tableRows, setTableRows] = useState([{ id: 1, description: '', rate: '', qty: '1', amount: '0.00', tax: true }]);
    const [subTotal, setSubTotal] = useState("");


    const handleLabelClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => setSelectedImage(reader.result);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage("");
        fileInputRef.current.value = '';
    };


    const handleChangeForVenderData = (e) => {
        setVenderData({ ...venderData, [e.target.name]: e.target.value })
    }
    const handleChangeForClientData = (e) => {
        setClientData({ ...clientData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const newSubtotal = tableRows.reduce((acc, row) => acc + parseFloat(row.amount), 0);
        setSubTotal(newSubtotal.toFixed(2));
    }, [tableRows]);

    // console.log(signImage, "#########");

    return (
        <>
            {showPreview ?
                <Preview
                    venderData={venderData}
                    clientData={clientData}
                    selectedImage={selectedImage}
                    tableRows={tableRows}
                    subTotal={subTotal}
                    uploadImage={uploadImage}
                    signUrl={signUrl}
                />
                : <div className={styles.container}>
                    <div className={styles.topnav}>
                        <div className={styles.invoice}>
                            <p>Invoice</p>
                        </div>
                        <div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className={styles.uploadImg}
                            />
                            <label
                                htmlFor="fileInput"
                                className={styles.fileLabel}
                                onClick={handleLabelClick}
                            >
                                {selectedImage ? (
                                    <div className={styles.file}>
                                        <div>
                                            <img src={selectedImage} alt="Selected" />
                                        </div>
                                        <div className={styles.updateBtnGrp}>
                                            <button className={styles.updateButton}>Update your logo</button>
                                            <TiDelete size={28} onClick={handleRemoveImage} />
                                        </div>
                                    </div>
                                ) : (
                                    <><FaCloudUploadAlt size={24} />Upload logo</>
                                )}
                            </label>
                        </div>
                    </div>
                    <div className={styles.formContainer}>
                        <VenderForm handleChange={handleChangeForVenderData} venderData={venderData} />
                        <ClientForm handleChange={handleChangeForClientData} clientData={clientData} />
                    </div>
                    <div>
                        <DescriptionForm tableRows={tableRows} setTableRows={setTableRows} />
                    </div>
                    <div>
                        <SubTotal subTotal={subTotal} />
                    </div>
                    <div>
                        <Footer uploadImage={uploadImage} setUploadImage={setUploadImage} signUrl={signUrl} setSignUrl={setSignUrl} />
                    </div>
                </div>}
        </>
    )
}

export default Home
