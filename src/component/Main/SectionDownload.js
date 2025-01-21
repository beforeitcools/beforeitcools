const SectionDownload = () => {
    return (
        <section className="section section-download">
            <div className="inner">
                <img src="/images/locat-blue.png" alt="로캣 이미지 로고" />
                <p><strong>함께라면 못갈 곳은 없어
                </strong><br/>앱 설치하고 여행자들을 만나보세요</p>
                <div className="btn-wrap">
                    <button onClick={()=>alert("출시 준비중입니다.")}><img src="/images/google-download.svg" alt="get it on google play" /></button>
                    <button onClick={()=>alert("출시 준비중입니다.")}><img src="/images/apple-download.svg" alt="download on the app store" /></button>
                </div>
            </div>
        </section>
    );
}

export default SectionDownload;