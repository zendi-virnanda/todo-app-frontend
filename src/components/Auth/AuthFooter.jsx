import { Link } from "react-router-dom";

export default function AuthFooter({ textHeader, textLink, link }) {
  return (
    <>
      <p className="mt-10 text-sm text-center text-gray-500">
        {textHeader}
        <Link
          to={link}
          className="font-semibold leading-6 text-blue-600 ms-1 hover:text-blue-500"
        >
          {textLink}
        </Link>
      </p>
    </>
  );
}
