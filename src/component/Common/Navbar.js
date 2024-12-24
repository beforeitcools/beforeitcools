import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activateStyle = {
        backgroundColor: "black",
        color: "white"
    };

    return (
        <>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive})=>
                        isActive? activateStyle : null
                    }>Locat</NavLink>
                </li>
                <li>
                    <NavLink to="/trippage" style={({isActive})=>
                        isActive? activateStyle : null
                    }>일정</NavLink>
                </li>
                <li>
                    <NavLink to="/localadvicepage" style={({isActive})=>
                        isActive? activateStyle : null
                    }>여행첨삭소</NavLink>
                </li>
                <li>
                    <NavLink to="/mappage" style={({isActive})=>
                        isActive? activateStyle : null
                    }>지도</NavLink>
                </li>
                <li>
                    <NavLink to="/trippage" style={({isActive})=>
                        isActive? activateStyle : null
                    }>알림</NavLink>        // 알림은 NavLink 가 아닌 무언가로??
                </li>
                <li>
                    <NavLink to="/mypage" style={({isActive})=>
                        isActive? activateStyle : null
                    }>마이페이지</NavLink>
                </li>
            </ul>
        </>
    )
};

export default Navbar;