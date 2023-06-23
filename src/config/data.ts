export interface PostData {
  id: number;
  date: string;
  author: string;
  title: string;
  content: string;
  image: string;
  video: string;
}

export const postData1: PostData = {
  id: 0,
  date: "17/04/2023",
  author: "Team esh",
  title: "Kira is joining esh; announcing eshX",
  content:
    "We are happy to announce the appointment of Dr. Kira Radinsky as a member of the bank's board of directors and as head of eshX - the new laboratory for next-generation technologies.",
  image: "/src/assets/card-image.jpg",
  video: "/assets/card-vid.e4092562.mp4",
};

export const postData2: PostData = {
  id: 1,
  date: "25/12/2022",
  author: "Yuval Aloni",
  title: "A new bank is coming",
  content:
    "It’s been more than 5 years since Shir Raanan, Alex Liverant and I began our journey and formed esh, and finally, we can now share our first public post, as we officially obtained a bank license today.",
  image: "/src/assets/card-image.jpg",
  video: "/assets/card-vid.e4092562.mp4",
};

export const postData3: PostData = {
  id: 2,
  date: "01/01/2022",
  author: "John Doe",
  title: "Welcome to our Blog",
  content:
    "We are excited to launch our blog, where we'll be sharing insights, news, and updates about our products and services. Stay tuned for more exciting content!",
  image: "/src/assets/card-image.jpg",
  video: "/assets/card-vid.e4092562.mp4",
};

export interface BlogData {
  posts: PostData[];
}

export const blogData: BlogData = {
  posts: [postData1, postData2, postData3],
};

export interface HomePageData {
  posts: PostData[];
}

export const homePageData: HomePageData = {
  posts: [postData1, postData2, postData3],
};
