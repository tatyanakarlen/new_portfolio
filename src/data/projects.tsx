

export interface Project {
  title: string;
  deployed: boolean;
  deployedAppLink: string;
  description: string;
  gitHubLink: string;
  images: string[];
  tech_stack: string[];
}

export const projects: Project[] = [
  {
    title: "Flixstream",
    description:
      "Movie streaming app designed for seamless browsing and user-friendly navigation. It features Supabase-powered user authentication, a robust database for managing user data and watchlists, and allows users to like, save, and remove movies from personalized watchlists stored securely in the database.",
    tech_stack: ["React", "Supabase (PostgreSQL)", "Bootstrap"],
    images: [
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404896/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_11.52.42_AM_fg2ad1.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404890/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_11.55.22_AM_ils5km.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404890/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_11.55.22_AM_ils5km.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404885/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_11.53.40_AM_fsjjwa.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404892/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_12.08.53_PM_vb0goa.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404898/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_12.09.26_PM_rrsrhy.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404888/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_11.58.26_AM_agfagr.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404883/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_11.58.45_AM_l4wqov.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728404879/Project1/FlixStreamScreenshots/Screenshot_2024-09-20_at_11.55.48_AM_zzgj9h.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728406184/Project1/FlixStreamScreenshots/Screenshot_2024-10-08_at_12.48.56_PM_a6juak.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728406482/Project1/FlixStreamScreenshots/Screenshot_2024-10-08_at_12.52.45_PM_gqidqn.png",
    ],
    deployed: true,
    deployedAppLink: "https://flixstreamapp.netlify.app",
    gitHubLink: "https://github.com/tatyanakarlen/Flixstream",
  },
  {
    title: "CookBook",
    description:
      "Recipe app that lets users search for recipes from the Spoonacular API using keywords and view individual recipes. It features Firebase authentication and a cloud database, enabling users to like, save, and unsave recipes, with all data securely stored in Firebase.",
    tech_stack: ["React", "Firebase", "Spoonacular API", "Bootstrap"],
    images: [
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405162/Project1/CookBookScreenShots/cookbook_dnky3e.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405162/Project1/CookBookScreenShots/cookbook1_uf1hnd.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405163/Project1/CookBookScreenShots/cookbook5_c3sbgg.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405162/Project1/CookBookScreenShots/cookbook2_cusqna.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405162/Project1/CookBookScreenShots/cookbook4_lqq7zo.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405161/Project1/CookBookScreenShots/CookBook3_icxikw.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405161/Project1/CookBookScreenShots/CookBook6_vj0vx6.png",
    ],
    deployed: true,
    deployedAppLink: "https://cookbookspoonacularapi.netlify.app/",
    gitHubLink: "https://github.com/tatyanakarlen/Spoonacular",
  },
  {
    title: "Untitled Magazine",
    description:
      "MERN-stack content-management platform and online magazine where users can add authors and articles, with a magazine page for viewing, searching, and sharing on social media.",
    tech_stack: ["React", "MongoDB", "NodeJS", "Express", "Bootstrap"],
    images: [
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405542/Project1/UntitlesImages/UntitledTEST5_qvrf0o.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405537/Project1/UntitlesImages/UntitledTEST1_ldiapl.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405538/Project1/UntitlesImages/UntitledTEST2_qyru6e.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405541/Project1/UntitlesImages/UntitledTEST3_xlw4ea.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405540/Project1/UntitlesImages/UntitledTEST6_usqcau.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405539/Project1/UntitlesImages/UntitledTEST4_sxrq4a.png",
    ],
    deployed: true,
    deployedAppLink: "https://untitled-magazine.herokuapp.com/",
    gitHubLink: "https://github.com/tatyanakarlen/Untitled-Magazine",
  },
  {
    title: "Spark",
    description:
      "Online dating application where users sign up and get matched with potential partners. It uses AJAX for data fetching and includes JWT authentication, React Hooks, and photo uploads via Amazon S3.",
    tech_stack: ["Next.js", "MySql", "Typescript", "Chakra UI"],
    images: [
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405256/Project1/SparkImages/Spark_fq6mjv.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405257/Project1/SparkImages/Spark1_hy1bjs.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405256/Project1/SparkImages/Spark5_y50lyh.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405256/Project1/SparkImages/Spark4_ucuzef.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405255/Project1/SparkImages/Spark2_fewwqd.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405255/Project1/SparkImages/Spark3_wlsdys.png",
    ],
    deployed: false,
    deployedAppLink: "",
    gitHubLink: "https://github.com/uwitdat/Spark",
  },
  {
    title: "Tinterest",
    description:
      "social media mobile app that allows users to create, update, and delete posts about their interests while saving and commenting on others posts. It features photo uploads using Amazon S3 and utilizes a PostgreSQL database with Django authentication.",
    tech_stack: ["Django", "Python", "postgreSQL", "Materialize CSS", "AWS"],
    images: [
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405443/Project1/TinterestImages/TinScreenShot1_puefiy.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405441/Project1/TinterestImages/TinScreenShot4_pb4w9v.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405443/Project1/TinterestImages/TinScreenShot2_uf2nsp.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405442/Project1/TinterestImages/TinScreenShot3_wej2cy.png",
    ],
    deployed: false,
    deployedAppLink: "https://tinterest.herokuapp.com/",
    gitHubLink: "https://github.com/RyanneZ/project3",
  },
  {
    title: "Thriftd",
    description:
      "RESTful MEN-stack CRUD application that enables users to post items for sale and manage wishlists. It features comments for enhanced social interaction and integrates Google OAuth 2.0 for authentication, along with Imgur API for photo uploads and a NoSQL database.",
    tech_stack: ["NodeJS", "Express", "MongoDB", "HTML", "CSS"],
    images: [
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405355/Project1/Thriftd/Thriftd1_xz0hvm.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405355/Project1/Thriftd/Thriftd2_sbep8i.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405354/Project1/Thriftd/Thriftd4_gr1nky.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405353/Project1/Thriftd/Thriftd3_dgnt3o.png",
      "https://res.cloudinary.com/poodlelady/image/upload/v1728405353/Project1/Thriftd/Thriftd5_eo0iol.png",
    ],
    deployed: false,
    deployedAppLink: "https://thriftd-p2p-ecommerce.herokuapp.com/products",
    gitHubLink:
      "https://github.com/tatyanakarlen/Thriftd-P2P-e-commerce-Node-Express",
  },
];

export default projects;
