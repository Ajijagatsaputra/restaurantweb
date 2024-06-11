import CONFIG from "./config";

const ENDPOINT = {
    LIST: `${CONFIG.BASE_URL}/list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
    SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
    ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default ENDPOINT;