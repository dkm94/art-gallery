import "./Main.css";

import { IMainProps } from "../../../types";
import { useState } from "react";

const Main = ({ setBackground }: IMainProps) => {
    const [section, setSection] = useState<string>('Fashion')

  return (
    <div className='content'>
        <section className='left-col'>Left</section>
        <section className='center-col'>
            <div className="page-title">
                <h1>{section}</h1>
            </div>
        </section>
        <section className='right-col'>Right</section>
    </div>
  )
}

export default Main;
