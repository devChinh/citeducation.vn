import React, { useEffect } from 'react'
import "../../styles/home/events.css"
import Slider from "react-slick";
import Aos from "aos"
import "aos/dist/aos.css"

const events = [
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1714537065/jtvq2n8yxgskzmziouab.jpg",
        title: "Lễ ký kết đối tác đầu ra với PT Corp",
        content1: "Chiều 16/03 hôm qua, CIT Education đã chính thức ký hợp đồng đối tác chiến lược với PTCorp Software.",
        content2: "Buổi lễ diễn ra nhằm hợp tác về việc PTCorp Software là đối tác đầu ra của học viên tại CIT Education và cung cấp phần mềm EduQuiz - phần mềm tạo đề thi online cho học viên , giúp học viên có được 'bến đỗ' phù hợp sau khi hoàn thành khóa học.",
        content3: "Với tinh thần hỗ trợ hết mình cho học viên, hi vọng thời gian tới, học viên của CIT Education sẽ có cơ hội thực tập, trải nghiệm, thực hiện các dự án thực tế tại môi trường chuyên nghiệp khi đã trang bị đủ kiến thức từ các khóa học tại CIT Education.        "
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1714538024/xa2dldhttughbvuiaxqn.jpg",
        title: "Lễ ký kết đối tác đầu ra với Bivaco",
        content1: "Chiều 01/03/2024, CIT Education đã chính thức ký hợp đồng đối tác chiến lược với Bivaco Agency.",
        content2: "Buổi lễ diễn ra nhằm hợp tác về việc Bivaco là đối tác đầu ra của học viên tại CIT Education, giúp học viên có được 'bến đỗ' phù hợp sau khi hoàn thành khóa học.        ",
        content3: "Với tinh thần hỗ trợ hết mình cho học viên, hi vọng thời gian tới, học viên của CIT Education sẽ có cơ hội thực tập, trải nghiệm, thực hiện các dự án thực tế tại môi trường chuyên nghiệp khi đã trang bị đủ kiến thức từ các khóa học.         "
    }
];

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}


function Events() {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='events-container'>
            <h1>Tin tức mới nhất</h1>
            <div data-aos='fade-up'>
                <Slider {...settings} className='events-content'>
                    {
                        events.map((item, index) => (
                            <>
                                <div className='events-image'>
                                    <img src={item.imagePath} alt="events" />
                                </div>
                                <div className='events-slideContent'>
                                    <h1>{item.title}</h1>
                                    <p>{item.content1}</p>
                                    <p>{item.content2}</p>
                                    <p>{item.content3}</p>
                                </div>
                            </>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Events