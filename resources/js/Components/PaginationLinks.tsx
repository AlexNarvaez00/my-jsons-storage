import { LinkPage } from "@/Types/PaginationRegisters";
import { Link } from "@inertiajs/react";

interface Props {
  links: LinkPage[];
}

export default function PaginationLinks({ links }: Props) {
  if (!links || links.length <= 3) {
    return null;
  }
  return (
    <ul className="flex items-center -space-x-px h-10 text-base">
      {links.filter((link) => link.url != null || link.url != undefined).map((
        link,
        index,
      ) => (
        <li key={index}>
          <Link
            href={`${link.url}`}
            className={link.active
              ? `z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`
              : `flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {link.label.replace("&raquo;","").replace("&laquo;","")}
          </Link>
        </li>
      ))}
    </ul>
  );
}
