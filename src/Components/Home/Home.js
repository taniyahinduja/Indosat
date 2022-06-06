import './Home.css'
import Dropdowns from '../Dropdown/Dropdowns'
import PieC from '../PieChart/PieC'
export default function Home() {
    return (
        <>
            <div class="top">
                <h1>Hour Details</h1>
            </div>
            <div class="dropdowns">
                <Dropdowns/>
                <Dropdowns/>
                <Dropdowns/>
                <Dropdowns/>
                <Dropdowns/>
                
            </div>
            <div class="pieHolder">
                <div><PieC/></div>
                <div><PieC/></div>
            </div>
        </>
    )
}