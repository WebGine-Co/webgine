import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <Image src="/images/logo.svg" priority={true} width={100} height={500} alt="hero"/>
                <p>
                <br />
                WebGine.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link href="/webdevelopment"><div className="link link-hover">Développement Web</div></Link>
                <Link href="/discorddevelopment"><div className="link link-hover">Développement Discord</div></Link>
            </nav>
            <nav>
                <h6 className="footer-title">Companie</h6>
                <Link href="/team"><div className="link link-hover">A propos de nous</div></Link>
                <Link href="/contact"><div className="link link-hover">Nous contacter</div></Link>
            </nav>
            </footer>
    );
};