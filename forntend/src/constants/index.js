
import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, block, smart, howitworks, member1,dashboard, discord, user, parthenon, request,  } from "../assets";

export const sideNavLinks = [
  {
    path: "/user dashboard",
    title: "Dashboard",
    icon: dashboard,
  },
  {
    path: "/property",
    title: "Property",
    icon: parthenon,
  },
  {
    path: "/requested",
    title: "Requested",
    icon: request,

  },
  {
    path: "/requests",
    title: "Requests",
    icon: discord,

  },
  {
    path: "/profile",
    title: "Profile",
    icon: user,

  },
];
export const topNav = [
  {
    id: "/user dashboard",
    title: "Dashboard",
    icon: dashboard,
  },
  {
    id: "/property",
    title: "Property",
    icon: parthenon,
  },
  {
    id: "/requested",
    title: "Requested",
    icon: request,

  },
  {
    id: "/requests",
    title: "Requests",
    icon: discord,

  },
  {
    id: "/profile",
    title: "Profile",
    icon: user,

  },
];
export const Inspectorform = [
  {
    id: "walletAddress",
    title:"Enter Wallet Address",
    type: "text",

  },
  {
    id: "district",
    title:"Enter District",
    type: "text",

  },
  {
    id: "city",
    title:"Enter City",
    type: "text",

  },
];
export const Userform = [
  {
    id: "emailAddress",
    title:"Enter Email Address",
    type: "email",

  },
  {
    id: "firstName",
    title:"Enter First Name",
    type: "text",

  },
  {
    id: "lastName",
    title:"Enter Last Name",
    type: "text",

  },
  {
    id: "contact",
    title:"Enter Contact",
    type: "phone",

  },
  {
    id: "residentialAddress",
    title:"Enter Residential Address",
    type: "address",

  },
  {
    id: "ghanaCard",
    title:"Upload Ghana Card",
    type: "file",

  },
];
export const landForm = [
  {
    id: "state",
    title:"Enter State",
    type: "text",

  },
  {
    id: "district",
    title:"Enter District",
    type: "text",

  },
  {
    id: "city",
    title:"Enter City",
    type: "text",
  },
  {
    id: "ownerAddress",
    title:"Enter Owner Address",
    type: "text",
  },
  {
    id: "propertyNumber",
    title:"Enter Property Number",
    type: "text",

  },
  {
    id: "marketValue",
    title:"Enter Market Value(in Gh cedis)",
    type: "number",

  },
  {
    id: "size",
    title:"Enter Size(in plot)",
    type: "text",

  },
  {
    id: "landDocument",
    title:"Enter Land Document",
    type: "file",

  },
];

export const ownersLinks = [
  {
    id: "/owner dashboard",
    title: "Dashboard",
    icon: dashboard,
  },
  {
    id: "/add land inspector",
    title: "Add Inspector",
    icon: parthenon,
  },
];
export const inspectorLinks = [
  {
    id: "/inspector dashboard",
    title: "Dashboard",
    icon: dashboard,
  },
  {
    id: "/verify land",
    title: "Verify Land",
    icon: parthenon,
  },
  {
    id: "/verify user",
    title: "Verify User",
    icon: parthenon,
  },
];

export const navLinks = [
  {
    id: "/home",
    title: "Home",
  },
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/login",
    title: "Login",
  },
  {
    id: "/team",
    title: "Team",
  },
];

export const features = [
  {
    id: "feature-1",
    img: block,
    title: "Blockchain",
    content:
      "Blockchain is a distributed digital ledger technology that enables secure, transparent, and tamper-proof recording of transactions. It consists of a network of computers, or nodes, that work together to verify and validate transactions, which are then recorded as blocks on the blockchain.",
  },
  {
    id: "feature-2",
    img: smart,
    title: "Smart Contract",
    content:
      "A smart contract is a computer program that facilitates, verifies, and enforces the negotiation or performance of a contract.",
  },
  {
    id: "feature-3",
    img: howitworks,
    title: "How It Works",
    content:
      "This eliminates the need for intermediaries, reduces costs, and enhances the speed and efficiency of transactions.",
  },
];

export const team = [
  {
    id: "member-1",
    description:
      "He is one of the main running member of this group and he is the head of the developing team.",
    name: "Adeyoju Joel",
    role: "Senior Developer",
    img: member1,
  },
  {
    id: "member-2",
    description:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Kukua Kukua",
    role: "Founder & Leader",
    img: member1,
  },
  {
    id: "member-3",
    description:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Derick Banor",
    role: "Founder & Leader",
    img: member1,
  },
  {
    id: "member-4",
    description:
      "He is one of the main running member of this group and he is the head of the developing team.",
    name: "Fanny Oha",
    title: "Founder & Leader",
    img: member1,
  },
];








export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.google.com/",
      },
      {
        name: "Ethereum",
        link: "https://ethereum.org/en/",
      },
      {
        name: "IPFS API",
        link: "https://docs.infura.io/infura/networks/ipfs/how-to/make-requests",
      },
      {
        name: "Explore",
        link: "https://www.ibm.com/za-en/topics/what-is-blockchain",
      },
      {
        name: "Blockchain Courses",
        link: "https://www.edx.org/learn/blockchain#browse-courses",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Team",
        link: "#",
      },
      {
        name: "Get Help for your Project",
        link: "#",
      },
      {
        name: "Resource Materials",
        link: "#",
      },
      {
        name: "Journals",
        link: "#",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Team",
        link: "#",
      },
      {
        name: "Contribute To This Project",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "Ghana Land Commission",
  },
  
  {
    id: "stats-1",
    title: "User Active",
    value: "0",
  },
  
  {
    id: "stats-3",
    title: "Transaction",
    value: "$0",
  },
];