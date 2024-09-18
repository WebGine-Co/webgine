import Image from "next/image";
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';


export default function Contact() {
    return (
      <div className="py-20 flex justify-center">
        <div className="card bg-base-100 w-96 shadow-xl shadow-primary">
          <figure className="px-10 pt-10">
            <Image src="/images/logo.svg" priority={true} height={100} width={200} alt="hero" className="h-auto w-auto"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Contact nous !</h2>
            <p></p>
            <div className="card-actions">
              <p><Icon path={mdiEmailOutline} size={1} className="inline-block"/> <span className="select-all">contact@web-gine.fr</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }