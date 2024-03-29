var auth = {
    getToken() {
        return localStorage.getItem("accessToken")
    },
    getFcmToken() {
        return process.env.FCM_TOKEN;
    }
}

export default auth;