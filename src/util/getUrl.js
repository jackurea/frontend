var url = {
    getStageUrl() {
        return process.env.VITE_BACKEND_STAGE_URL;
    },
    getLiveUrl() {
        return process.env.VITE_BACKEND_LIVE_URL
    }
}

export default url;