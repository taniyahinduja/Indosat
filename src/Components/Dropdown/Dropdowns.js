import './Dropdowns.css'
import Dropdown from 'react-bootstrap/Dropdown'
export default function Dropdowns() {
    return (
        <div >
            <div>
                Province
            </div>
            <div style={{ border: "1px solid silver", borderRadius: "50px", marginRight: "100px" }}>
            <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
    )
}