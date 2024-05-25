import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  //   console.log(pathName);

  return (
    <Link
      className={`rounded-sm px-2 py-1 ${
        pathName === link.url && "bg-[#fca61f] text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
