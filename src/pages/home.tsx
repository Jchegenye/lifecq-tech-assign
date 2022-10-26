import Popover from "../components/Popover/Index";
import familySvg from '../assets/timeline/family.svg';

function App() {
    return (
        <section className='timeline'>
            
            <div className="timeline__body">
                <ul className="timeline__body__content">
                    <li>
                         <div className="timeline__body__content__start">
                            <div className="timeline__body__start"></div>
                            <div className="timeline__body__content__start__popover">
                                <p className="timeline__body__content__start__popover--start">
                                    You are here
                                </p>
                            </div>
                            <div className="timeline__body__line"></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline__body__content__start">
                            <div className="timeline__body__content__start__popover">
                                <div className="timeline__body__content__circled"></div>
                                <div className="timeline__body__content__start__popover--all">
                                    <Popover 
                                        imageUrl={familySvg}
                                        imageAlt={'Baby’s birth image'}
                                        description={"Baby’s birth"}
                                        canHover={false}
                                        placement={'tc'}
                                    />
                                </div>
                            </div>
                            <div className="timeline__body__line"></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline__body__content__start">
                            <div className="timeline__body__content__start__popover">
                                <div className="timeline__body__content__circled"></div>
                                <div className="timeline__body__content__start__popover--all">
                                    <Popover 
                                        imageUrl={familySvg}
                                        imageAlt={'Baby’s birth image'}
                                        description={"Baby’s birth"}
                                        canHover={false}
                                        placement={'tc'}
                                    />
                                </div>
                            </div>
                            <div className="timeline__body__line"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default App;