import Popover from "../components/Popover/Index";
import familySvg from '../assets/timeline/family.svg';
import houseSvg from '../assets/timeline/house.svg';
import emFundsSvg from '../assets/timeline/em-funds.svg';
import debtFreeSvg from '../assets/timeline/debt-free.svg';
import contributeSvg from "../assets/timeline/contribute.svg";
import holidaySvg from "../assets/timeline/holiday.svg";
import retireSvg from "../assets/timeline/retire.svg";

function App() {
    const styles = {
        start: {
            width: '50%'
        },
        holiday: {
            width: '60rem'
        },
        debtFree: {
            width: '150%'
        },
        ultimately: {
            width: '75rem'
        }
    }
    return (
        <section className="timeline">
            <div className="timeline__body">
                <ul className="timeline__body__content">
                    <li style={styles.start}>
                         <div className="timeline__body__content__start">
                            <div className="timeline__body__doughnut"></div>
                            <div className="timeline__body__content__start__popover">
                                <p className="timeline__body__content__start__popover--start">
                                    You are here
                                </p>
                            </div>
                            <div className="timeline__body__line"></div>
                        </div>
                    </li>
                    <li style={styles.holiday}>
                        <div className="timeline__body__content__start">
                            <div className="timeline__body__content__start__popover">   
                                <div className="timeline__body__content__start__popover--all top">
                                    <Popover 
                                        imageUrl={familySvg}
                                        imageAlt={'Baby’s birth image'}
                                        description={"Baby’s birth"}
                                        canHover={false}
                                        placement={'bc'}
                                    />
                                    <div className="timeline__body__content__start__popover--all__topcontent">
                                        <div className="timeline__body__content__start__popover__line"></div>
                                    </div>
                                </div>
                                <div className="timeline__body__content__circled"></div>
                                <div className="timeline__body__content__start__popover--all">
                                    <div>
                                        <p className="timeline__body__content__start__popover__desc">
                                            In 1 year and 9 months
                                        </p>
                                        <div className="timeline__body__content__start__popover__line"></div>
                                    </div>
                                    <Popover 
                                        imageUrl={houseSvg}
                                        imageAlt={'New home image'}
                                        description={"New home"}
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
                                <div className="timeline__body__content__start__popover--all top">
                                    <Popover 
                                        imageUrl={holidaySvg}
                                        imageAlt={'Holiday image'}
                                        description={"Holiday birth"}
                                        canHover={false}
                                        placement={'bc'}
                                    />
                                    <div className="timeline__body__content__start__popover--all__topcontent">
                                        <div className="timeline__body__content__start__popover__line"></div>
                                    </div>
                                </div>
                                <div className="timeline__body__content__circled"></div>
                                <div className="timeline__body__content__start__popover--all">
                                    <p className="timeline__body__content__start__popover__desc">
                                        In 3 years and 2 months
                                    </p>
                                </div>
                            </div>
                            <div className="timeline__body__line"></div>
                        </div>
                    </li>
                    <li style={styles.debtFree}>
                        <div className="timeline__body__content__start">
                            <div className="timeline__body__content__start__popover">
                                <div className="timeline__body__content__circled"></div>
                                <div className="timeline__body__content__start__popover--all">
                                    <div>
                                        <p className="timeline__body__content__start__popover__desc">
                                            In 4 years and 9 months
                                        </p>
                                        <div className="timeline__body__content__start__popover__line"></div>
                                    </div>
                                    <Popover 
                                        imageUrl={emFundsSvg}
                                        imageAlt={'Emergency fund image'}
                                        description={"Emergency fund"}
                                        canHover={false}
                                        placement={'tc'}
                                    />
                                </div>
                            </div>
                            <div className="timeline__body__line"></div>
                        </div>
                    </li>
                    <li style={styles.ultimately}>
                        <div className="timeline__body__content__start">
                            <div className="timeline__body__content__start__popover">
                                <div className="timeline__body__content__circled"></div>
                                <div className="timeline__body__content__start__popover--all">
                                    <div>
                                        <p className="timeline__body__content__start__popover__desc">
                                            In 8 years and 11 months
                                        </p>
                                        <div className="timeline__body__content__start__popover__line"></div>
                                    </div>
                                    <Popover 
                                        imageUrl={debtFreeSvg}
                                        imageAlt={'Debt free image'}
                                        description={"Debt free"}
                                        canHover={false}
                                        placement={'tc'}
                                    />
                                </div>
                            </div>
                            <div className="timeline__body__dotted"></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline__body__content__start">
                            <div className="timeline__body__content__start__popover">
                                <div className="timeline__body__content__start__popover--all last">
                                    <div className="timeline__body__content__start__popover--all top-center">
                                        <Popover 
                                            imageUrl={retireSvg}
                                            imageAlt={'Retire image'}
                                            description={"Retire"}
                                            canHover={false}
                                            placement={'bc'}
                                        />
                                        <div className="timeline__body__content__start__popover--all__topcontent">
                                            <div className="timeline__body__content__start__popover__line"></div>
                                        </div>
                                    </div>
                                    <div className="timeline__body__content__start__popover--all__content">
                                        <p className="timeline__body__content__start__popover__desc">
                                            Ultimately
                                        </p>
                                        <div className="timeline__body__content__start__popover__line"></div>
                                    </div>
                                    <Popover 
                                        imageUrl={contributeSvg}
                                        imageAlt={'Ultimately image'}
                                        description={"Make a contribution to my community through philantrophy"}
                                        canHover={false}
                                        placement={'tr'}
                                        isActive={true}
                                    />
                                </div>
                            </div>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.186 1.23705C1.79052 0.851542 1.15741 0.859625 0.771899 1.2551C0.386391 1.65058 0.394474 2.28369 0.789951 2.6692L2.186 1.23705ZM10.4634 9.74367L11.0655 10.542C11.3534 10.3249 11.5021 9.96948 11.4546 9.61197C11.4071 9.25445 11.1708 8.95021 10.8362 8.81575L10.4634 9.74367ZM0.0720886 17.6742C-0.133804 18.1866 0.114728 18.769 0.627199 18.9749C1.13967 19.1808 1.72202 18.9322 1.92791 18.4198L0.0720886 17.6742ZM0.789951 2.6692C2.014 3.86239 3.9342 5.68606 5.72029 7.28222C6.61248 8.07954 7.47992 8.8279 8.21467 9.41465C8.58165 9.70772 8.92429 9.96751 9.22597 10.1754C9.51261 10.3728 9.81551 10.5611 10.0906 10.6716L10.8362 8.81575C10.7766 8.79184 10.6242 8.70997 10.3607 8.52839C10.1121 8.35717 9.80972 8.12896 9.4627 7.85184C8.76945 7.29821 7.93309 6.57745 7.05299 5.79094C5.2945 4.21945 3.39613 2.41668 2.186 1.23705L0.789951 2.6692ZM9.86121 8.94528C8.38635 10.0576 6.1396 11.8107 4.18909 13.4584C3.21515 14.2811 2.30277 15.0878 1.59414 15.7809C1.24046 16.1269 0.925855 16.4558 0.676088 16.7522C0.444684 17.0269 0.202451 17.3497 0.0720886 17.6742L1.92791 18.4198C1.92445 18.4284 1.93654 18.3977 1.98918 18.3204C2.03862 18.2478 2.10953 18.1549 2.20552 18.041C2.39798 17.8126 2.66286 17.5332 2.99263 17.2107C3.6509 16.5668 4.5213 15.7958 5.47969 14.9862C7.39384 13.3693 9.60994 11.6399 11.0655 10.542L9.86121 8.94528Z" fill="white"/>
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default App;