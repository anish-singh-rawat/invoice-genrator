import styles from "../footer/footer.module.css"
import { MdAddBox } from "react-icons/md";
import SignaturePad from "../signatureModal";
import { useRef, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaCloudUploadAlt } from "react-icons/fa";

const Footer = ({ uploadImage, setUploadImage,setSignUrl,signUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef("");

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLabelClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => setUploadImage(reader.result);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveImage = () => {
        setUploadImage("");
        fileInputRef.current.value = '';
    };


    return (
        <div className={styles.container}>
            <p>Notes</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Notes - any relevant information not covered , additional terms and conditions"></textarea>
            <div className={styles.signature}>
                <p>Signature</p>
                <MdAddBox size={32} className={styles.addBtn} onClick={openModal} />
                <SignaturePad isOpen={isModalOpen} onClose={closeModal} onOpen={openModal} signUrl={signUrl} setSignUrl={setSignUrl} />
            </div>
            <div className={styles.photoSection}>
                <p>Photo</p>
                <div className={styles.addPhoto}>
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
                        {uploadImage ? (
                            <div className={styles.file}>
                                <div>
                                    <img src={uploadImage} alt="Selected" />
                                </div>
                                <div className={styles.updateBtnGrp}>
                                    <button className={styles.updateButton}>Update photo</button>
                                    <TiDelete size={28} onClick={handleRemoveImage} />
                                </div>
                            </div>
                        ) : (
                            <><FaCloudUploadAlt size={24} />Upload photo</>
                        )}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Footer
