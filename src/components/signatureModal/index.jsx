import { useRef, useState } from "react";
import styles from "../signatureModal/signatureModal.module.css"
import ReactSignatureCanvas from "react-signature-canvas";
import { TiEdit } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";

const SignaturePad = ({ isOpen, onClose, onOpen, setSignUrl, signUrl }) => {
    const signnatureRef = useRef()

    const handleClear = () => {
        signnatureRef.current.clear()
    }

    const handleSave = () => {
        setSignUrl(signnatureRef.current.toDataURL())
        onClose();
    }

    return (
        <>
            {isOpen &&
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <div className={styles.signature_container}>
                            <ReactSignatureCanvas penColor='black' ref={signnatureRef} />
                            <div className={styles.button_container}>
                                <button onClick={() => onClose()}>Cancel</button>
                                <button onClick={handleClear}>Clear</button>
                                <button onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {signUrl &&
                <div className={styles.signBox}>
                    <div className={styles.sign}>
                        <img src={signUrl} width={150} height={50} />
                    </div>
                    <div className={styles.button_group}>
                        <TiEdit size={20} onClick={() => onOpen()} />
                        <TiDeleteOutline size={22} onClick={() => setSignUrl("")} />
                    </div>
                </div>
            }
        </>
    )
}

export default SignaturePad
