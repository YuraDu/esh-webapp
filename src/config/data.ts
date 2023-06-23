export interface PostData {
  id: number;
  date: string;
  author: string;
  title: string;
  content: string[];
  postContent: string;
  image: string;
}

export const postData1: PostData = {
  id: 0,
  date: "17/04/2023",
  author: "Team esh",
  title: "Kira is joining esh; announcing eshX",
  content: [
    "We are happy to announce the appointment of Dr. Kira Radinsky as a member of the bank's board of directors and as head of eshX - the new laboratory for next-generation technologies.",
    "Kira, who has a PhD in artificial intelligence, serves as CEO of Diagnostic Robotics, one of the leading artificial intelligence companies in the world of medicine, is a world-renowned expert in the field of machine learning and a two-time winner of the Israel Defense Award. Kira served as eBay's chief scientist and before that led the establishment of big-data systems at Microsoft.",
    "Under her leadership, eshX will be engaged in the application of future technologies in the fields of banking. These technologies will be integrated into the activities of the group's technology platform, and into the bank's activities. This combination will make it possible to optimize the service and lower the costs for the bank's customers.",
    "Alongside Kira, in the team that is recruiting people these days, will take part Colonel Moshe Wolf, the bank’s CIO, former commander in unit 8200, also a winner of the Israel Defense Award and former CEO of the national payment infrastructure companies MASAV and SHVA, this alongside the co-founder and group CTO, Mr. Alex Liverant.",
    "With her appointment as a director, Kira joins the chairman of the bank's board of directors Prof. Shmuel Hauser, former chairman of the Israeli SEC, to the vice-chairman of the board Dr. Nadine Baudot-Trajtenberg, former deputy governor of the Central Bank of Israel, and to the bank's CEO, Mr. Kobi Malkin, former CEO of the Soldiers Treasury Bank.",
    "Team esh.",
  ],
  postContent:
    "We are happy to announce the appointment of Dr. Kira Radinsky as a member of the bank's board of directors and as head of eshX - the new laboratory for next-generation technologies.",
  image: "/src/assets/card-image.jpg",
};

export const postData2: PostData = {
  id: 1,
  date: "25/12/2022",
  author: "Yuval Aloni",
  title: "A new bank is coming",
  content: [
    "It’s been more than 5 years since Shir Raanan, Alex Liverant and I began our journey and formed esh, and finally, we can now share our first public post, as we officially obtained a bank license today.",
    "We are happy to announce that Clal, a reputable financial institution, with a history of successful investments in reliable and market-leading companies, is investing $30 million in esh, granting it ownership of 4.99% of the shares in each of the esh group companies - the bank and the technology company. Upon completion of the investment, the esh group companies will have a valuation of over $500 million.",
    "This investment will allow us to develop the product according to our vision and market entry.",
    "In a reality where economic transactions are performed automatically, and machine learning keeps developing and challenging traditional models, it demands a new bank operating-system that is most fitting. The unique platform developed by the technology company esh OS, is an alternative to the outdated core system used in banks today, and enables for the first time, a complete end-to-end banking services platform - all bank systems under one modular system. This is not only about a revolutionary technological change, but also a change in perception for all of us - from bankers to customers.",
    "Clal’s decision to join us on this journey is a vote of confidence from a leading institutional investor. We congratulate Clal on joining as shareholders in the group.",
    "Clal will join the existing shareholders, who have so far invested over $30 million. After the deal is completed, the total investment in esh will be over $60 million (Tier 1 equity capital).",
    "This is an opportunity to thank and congratulate our existing partners - experienced entrepreneurs and investors of exceptional international stature - from Nir Zuk and Alon Shine, who together with Alex Liverant and I form the control core, to Shmuel Gniwisch, Jose Mugrabi, and many others who are marching together with us.",
  ],
  postContent:
    "Clal is expected to invest $30 million and join as a shareholder in esh",
  image: "/src/assets/card-image.jpg",
};

export const postData3: PostData = {
  id: 2,
  date: "01/01/2022",
  author: "John Doe",
  title: "Welcome to our Blog",
  content: [
    "We are excited to launch our blog, where we'll be sharing insights, news, and updates about our products and services. Stay tuned for more exciting content!",
  ],
  postContent:
    "It’s been more than 5 years since Shir Raanan, Alex Liverant and I began our journey and formed esh, and finally, we can now share our first public post, as we officially obtained a bank license today.",
  image: "/src/assets/card-image.jpg",
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
