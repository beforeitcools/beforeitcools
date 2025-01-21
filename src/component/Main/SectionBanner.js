
const SectionBanner = () => {
    
    return (
        <section className="section section-banner">
            <div className="inner">
                <div className="text-wrap">
                    <h2 className="sec-title">로컬과 소통하는 <br/>여행 일정 관리 앱</h2>
                    <p className="sec-desc">일정 계획부터 현지 추천까지, 로캣으로 간편해졌어요!</p>
                    <div className="btn-wrap">
                        <button onClick={()=>alert("출시 준비중입니다.")}><img src="/images/google-download.svg" alt="get it on google play" /></button>
                        <button onClick={()=>alert("출시 준비중입니다.")}><img src="/images/apple-download.svg" alt="download on the app store" /></button>
                    </div>
                </div>
                <div className="img-wrap">
                    <img src="/images/banner-img.svg" alt="여행가는 이미지" />
                </div>
            </div>
        </section>
    );
}

export default SectionBanner;