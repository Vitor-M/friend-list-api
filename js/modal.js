
(() => {
    const modalCloseBtns = document.querySelectorAll(".btn__modal__close");
    const editBtns = document.querySelectorAll(".reg__edit");
    const deleteBtns = document.querySelectorAll(".reg__delete");
    const editModal = document.querySelector("#modal__friend__editor");
    const deleteModal = document.querySelector("#modal__friend__delete");
    const genericModals = document.querySelectorAll(".modal");

    function OpenRegEditorModal() {
        editBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                editModal.style.display = "flex";
            });
        });
    }

    function OpenRegDeleteModal() {
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                deleteModal.style.display = "flex";
            });
        });
    }

    function CloseModal() {
        modalCloseBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                genericModals.forEach(modal => {
                    modal.style.display = "none";
                });
            });
        });
    }


    function Init() {
        OpenRegEditorModal();
        OpenRegDeleteModal();
        CloseModal();
    }

    Init();
})();
