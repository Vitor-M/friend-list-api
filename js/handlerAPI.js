const APIUrl = "http://localhost:3000";

export async function getAllFriends() {
    const response = await fetch(`${APIUrl}/friends`);
    return await response.json();
}

export async function getFriend(friendID) {
    return "Test - Returning Friend with id " + friendID;
}

export async function deleteFriend(friendId) {
    return "Test - Deleting Friend with id " + friendID;
}

export async function updateFriend(friendId) {
    return "Test - Updating Friend with id " + friendID;
}




