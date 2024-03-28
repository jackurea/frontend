var auth = {
    getToken() {
        return localStorage.getItem("accessToken")
    }
}

export default auth;