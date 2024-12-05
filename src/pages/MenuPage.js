import { useEffect, useState } from "react";


const Menupage = () => {
    const [menus, setMenus] = useState([]);

    useEffect(()=>{
        fetch("https://www.beforeitcools.site:5555/menu/select")
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
            <h1>우리가 메뉴를 불러와서 보여줄 페이지</h1>
            <ul>{menus.map(function(item, index){
                return <li>{item.menuName} {item.menuPrice}</li>
            })}
            </ul>
        </>
    );
};

export default Menupage;
