// import axios, { AxiosResponse } from "axios";
// import { BlogData, homePageData } from "./data";

// // Create an Axios instance
// const axiosInstance = axios.create({
//   baseURL: "https://your-api-url.com", // Replace with your API endpoint
// });

// // Function to fetch data and update homePageData
// const fetchData = async (): Promise<void> => {
//   try {
//     const response: AxiosResponse<BlogData> = await axiosInstance.get(
//       "/your-endpoint"
//     ); // Replace with your API endpoint
//     const fetchedData: BlogData = response.data;

//     // Update homePageData with fetchedData
//     homePageData.posts = fetchedData.posts;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// export default fetchData;
