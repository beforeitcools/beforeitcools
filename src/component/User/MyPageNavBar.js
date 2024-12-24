const MyPageNavBar = () => {
    
    const activateStyle = {
        backgroundColor: "black",
        color: "white"
    };

    return (
        <>
            <ul>
                <li>
                    <NavLink to="/mypage/localauth" style={({isActive})=>
                        isActive? activateStyle : null
                    }>현지인 인등하기</NavLink>
                </li>
                <li>
                    <NavLink to="/mypage/mytrip" style={({isActive})=>
                        isActive? activateStyle : null
                    }>내 여행</NavLink>
                </li>
                <li>
                    <NavLink to="/mypage/myfavorites" style={({isActive})=>
                        isActive? activateStyle : null
                    }>내 저장</NavLink>
                </li>
                <li>
                    <NavLink to="/mypage/mypost" style={({isActive})=>
                        isActive? activateStyle : null
                    }>내 포스트</NavLink>
                </li>
                <li>
                    <NavLink to="/mypage/myadvice" style={({isActive})=>
                        isActive? activateStyle : null
                    }>내 첨삭</NavLink>
                </li>
                
            </ul>
        </>
    )
};

export default MyPageNavBar;