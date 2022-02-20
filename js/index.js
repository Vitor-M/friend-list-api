import { getAllFriends, getFriend, deleteFriend, updateFriend } from "./handlerAPI.js";
import { OpenRegEditorModal, OpenRegDeleteModal, CloseModal } from "./modal.js";

(() => {
    let friendsList = [];

    function populateFriendsTable(list) {
        const table = document.querySelector(".table__content");
        const tableHeader = table.querySelector(".row__header");
        table.innerHTML = "";

        list.forEach(item => {
            const row = document.createElement("div");
            row.classList.add("row");

            const name = document.createElement("p");
            name.classList.add("reg__name");
            name.textContent = item.name;

            const email = document.createElement("p");
            email.classList.add("reg__email");
            email.textContent = item.email;

            const gender = document.createElement("p");
            gender.classList.add("reg__genre");
            gender.textContent = item.gender == "M" ? "Masculino" : "Feminino";

            const desc = document.createElement("p");
            desc.classList.add("reg__desc");
            desc.textContent = item.description;

            const editIcon = document.createElement("p");
            editIcon.classList.add("reg__edit");
            editIcon.textContent = "✏️";
            editIcon.setAttribute("id", item.id);

            const deleteIcon = document.createElement("p");
            deleteIcon.classList.add("reg__delete");
            deleteIcon.textContent = "🗑️";
            deleteIcon.setAttribute("id", item.id);

            row.appendChild(name);
            row.appendChild(email);
            row.appendChild(gender);
            row.appendChild(desc);
            row.appendChild(editIcon);
            row.appendChild(deleteIcon);
            table.appendChild(row);
        });
    }

    async function loadFriends() {
        friendsList = await getAllFriends();
        populateFriendsTable(friendsList);
        OpenRegEditorModal(friendsList);
        OpenRegDeleteModal();
    }

    function init() {
        CloseModal();
        loadFriends();

    }

    init();
})();