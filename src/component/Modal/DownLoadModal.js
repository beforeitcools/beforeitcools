
import ReactModal from "react-modal";

const DownLoadModal = ({modalIsOpen, setIsOpen}) => {


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="app-download-modal">
        <div className="top">
          <h2>QR 코드 스캔</h2>
          <button onClick={closeModal}><span class="material-symbols-outlined">close</span></button>
        </div>
        <h3>Locat 앱으로 열기</h3>
        <img src="" alt="" />
        <p>모바일에서만 이용할 수 있어요.<br/>
        휴대전화의 카메라 또는 당근 앱으로 QR코드를 촬영해주세요.</p>
    </ReactModal>
    );
}

export default DownLoadModal;