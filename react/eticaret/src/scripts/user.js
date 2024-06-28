export function getUser() {
    if(localStorage.getItem('member'))
    {
        return JSON.parse(localStorage.getItem('member'));
    }
    else
    {
        return "None";
    }
}

export function loadUser(user) {
    const userJson = JSON.stringify(user);
    localStorage.setItem('member', userJson);
}

export function deleteUser(user) {
    localStorage.removeItem('member');
}