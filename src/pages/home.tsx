import Popover from "../components/Popover/Index";
import familySvg from '../assets/timeline/family.svg';

function App() {
    return (
        <div className='timeline'>
            {/* <ul>
    	        <li></li>
    	        <li></li>
    	        <li></li>
            </ul>   */}
            <Popover 
                imageUrl={familySvg}
                imageAlt={'Baby’s birth image'}
                description={"Baby’s birth"}
                canHover={false}
                placement={'tc'}
            />
        </div>
    );
}

export default App;