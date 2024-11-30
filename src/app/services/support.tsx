import Link from "next/link";

export default function Support() {
    return (
      <div className="py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Maintenance et Support</h1>
        <p className="pb-10">
          Garantissez le bon fonctionnement de vos applications avec nos services de maintenance et de support. 
          Nous nous assurons que votre solution reste performante et sécurisée en tout temps.
        </p>
        
        {/* <Link href="/webdevelopment"><div className="btn">Détails</div></Link> */}
      </div>
    );
  }