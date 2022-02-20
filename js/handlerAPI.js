const APIUrl = "http://localhost:3000";

export async function getAllFriends() {
    const response = await fetch(`${APIUrl}/friends`);
    return await response.json();
}

export async function getFriend(friendID) {
    return "Test - Returning Friend with id " + friendID;
}

export async function deleteFriend(friendId) {
    return "Test - Deleting Friend with id " + friendId;
}

export async function updateFriend(friend) {
    return "Test - Updating Friend " + friend;
}

export async function insertFriend(friend) {
    return "Test - Inserting Friend " + friend;
}


