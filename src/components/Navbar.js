import {Link} from "react-router-dom";

export function Navbar() {


    return (
        <>
            <h1>
                <Link to={'/products'}>List Products</Link> |

            </h1>

        </>
    )
}