import { deleteFriend, updateFriend } from "./handlerAPI.js";

export function OpenRegEditorModal(friendList) {
    const editBtns = document.querySelectorAll(".reg__edit");
    const editModal = document.querySelector("#modal__friend__editor");
    editBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            editModal.style.display = "flex";
        });
    });
}

export function OpenRegDeleteModal() {
    const deleteBtns = document.querySelectorAll(".reg__delete");
    const deleteModal = document.querySelector("#modal__friend__delete");
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            deleteModal.style.display = "flex";

        });
    });
}

export function CloseModal() {
    const modalCloseBtns = document.querySelectorAll(".btn__modal__close");
    const genericModals = document.querySelectorAll(".modal");
    modalCloseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            genericModals.forEach(modal => {
                modal.style.display = "none";
            });
        });
    });
}

export function confirmDelete(friendId) {
    deleteFriend(friendId);
}

export function loadEditData(friend) {

}
