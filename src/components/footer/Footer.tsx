import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import MailIcon from "@/assets/icons/MailIcon";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import Link from "next/link";
import RenderList from "../render-list/RenderList";

const USEFUL_LINKS = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 4,
    name: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
];

const CONTACT_LINK = [
  {
    id: 1,
    name: "Saatdobato,Lalitpur",
  },
  {
    id: 2,
    name: "milanrokaya2014@gmail.com",
  },
  {
    id: 3,
    name: "+977 9869599304",
  },
];

const SOCIAL_MEDIA = [
  {
    id: 1,
    icon: <FacebookIcon className="w-8 h-8 fill-white hover:fill-gray-400" />,
  },
  {
    id: 2,
    icon: <InstagramIcon className="w-8 h-8 fill-white hover:fill-gray-400" />,
  },
  {
    id: 3,
    icon: <YoutubeIcon className="w-8 h-8 fill-white hover:fill-gray-400" />,
  },
  {
    id: 4,
    icon: <MailIcon className="w-8 h-8 fill-white hover:fill-gray-400" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-10">
      <nav className="flex justify-around items-start">
        <div className="">Logo</div>
        <ul className="flex flex-col gap-4">
          <RenderList
            data={USEFUL_LINKS}
            render={(list) => (
              <li key={list.id}>
                <Link
                  href={list.link}
                  className="hover:after:w-full after:w-0 after:h-[1.4px] after:bg-white relative after:absolute after:-bottom-2 after:left-0 pr-2 after:transition-[width] after:duration-700 "
                >
                  {list.name}
                </Link>
              </li>
            )}
          />
        </ul>
        <ul className="flex flex-col gap-4">
          <RenderList
            data={CONTACT_LINK}
            render={(list) => <li key={list.id}>{list.name}</li>}
          />
          <div className="flex items-center justify-start gap-4">
            <RenderList
              data={SOCIAL_MEDIA}
              render={(list) => (
                <button key={list.id} className="cursor-pointer">
                  {list.icon}
                </button>
              )}
            />
          </div>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
