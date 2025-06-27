import { useContext } from "react";
import BasicLayout from "../layouts/basicLayout";
import { TestContext } from "../store/testContext";


function MainPage() {

    const {signin} = useContext(TestContext)

    return ( 
        <BasicLayout>
            <div>
                <h1 onClick={() => {
                    signin('user11','efsfesef')
                }}>Main Page</h1>
            </div>
        </BasicLayout>
     );
}

export default MainPage;