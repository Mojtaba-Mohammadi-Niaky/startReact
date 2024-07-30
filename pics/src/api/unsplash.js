import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID CpNPrq9pthAg9Ky5NVUQraj2qja6u-dmGE5hcjmXfcw",
      }

});
