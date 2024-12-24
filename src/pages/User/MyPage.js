import { useEffect, useState } from "react";
import MyPageNavBar from "../../component/User/MyPageNavBar";
import { Outlet } from "react-router-dom";


const MyPage = () => {
    const [menus, setMenus] = useState([]);

    useEffect(()=>{
        fetch("https://www.beforeitcools.site:8082/user/mypage")
            .then(response=>{
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                setMenus(data);
            }).catch(error => {
                console.log("API 호출 중 오류 발생", error);
            });
    },[])

    // const menuList = menus.map

    return (
        <>
            <MyPageNavBar/>
            <Outlet/>
        </>
    );
};

export default MyPage;