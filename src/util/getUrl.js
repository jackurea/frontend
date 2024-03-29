var url = {
    getStageUrl() {
        return process.env.BACKEND_STAGE_URL;
    },
    getLiveUrl() {
        return process.env.BACKEND_LIVE_URL
    }
}

export default url;