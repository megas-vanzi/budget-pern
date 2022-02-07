const Modal = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          Modal
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title">Modal Title</h2>
              <button className="close" onClick={() => close()}>
                <img alt="close" />
              </button>
            </header>
            <main className="modal_content">Modal main content</main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>

              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
