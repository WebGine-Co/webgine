import Link from "next/link";
import LinksMenu from "./linksMenu";

export default function Navbar() {
    return (
        <div className="flex-none md:block hidden">
            <ul className="menu menu-horizontal px-1">
                <LinksMenu />
            </ul>
        </div>
    );
}