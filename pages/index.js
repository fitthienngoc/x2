import React, { Component } from 'react'
import Person from '../component/person';
import DraggableElement from "../component/draggable-element";





class App extends Component {
    constructor() {
        super();

        this.state = {
            height: 0,
            width: 0,
            rotate: 0,
            isModal: false,
            seeMore: false,
            seeMoreCsAn: false
        };


    }


    update = () => {
        if (window.innerHeight < window.innerWidth) {
            this.setState({
                height: window.innerHeight,
                width: window.innerHeight * 12 / 7,
                rotate: 0
            });
        } else {
            this.setState({
                height: window.innerWidth,
                width: window.innerWidth * 12 / 7,
                rotate: 90
            });
        }

    };

    componentDidMount() {
        window.addEventListener("resize", this.update);
        this.update();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    showReserve(list) {
        var { height, width } = this.state
        if (list) {
            var r = ''
            var index_ = 0
            r = list.map((item, index) => {
                if (index > 4) {

                    return <DraggableElement
                        key={index}
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * index_++ / 10 * 2}
                        left={width + height / 4}
                        maxWidth={width}
                        maxHeight={height}
                    >

                        <Person person={item} height={height} />
                    </DraggableElement>
                } else {
                    return <DraggableElement
                        key={index}
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * index / 10 * 2}
                        left={width}
                        maxWidth={width}
                        maxHeight={height}
                    >

                        <Person person={item} height={height} />
                    </DraggableElement>
                }
            });
        }
        return r
    }

    render() {

        // console.log('this.state', this.state)
        var { height, width, rotate } = this.state
        return (
            rotate == 90 ?
                <div>Hãy xoay màn hình</div>
                :
                <div >

                    <div className={'rotate'} style={{ padding: 0, paddingTop: rotate * 2, height, width }}>

                        <div className="stadium">
                            <div style={{ borderWidth: height * 0.01 }} className="line">

                            </div>

                            <div style={{
                                borderLeft: '6px solid white',
                                borderWidth: height * 0.01,
                                marginTop: -height * 0.9,
                                marginLeft: width * 0.9 / 2,
                                height: height * 0.9
                            }
                            } className="half"></div>
                            <div style={{
                                borderWidth: height * 0.01,
                                width: height * 0.9 / 6,
                                height: height * 0.9 / 2,
                                marginTop: -(height * 0.9) + (height * 0.9 / 2) / 2
                            }} className="panelty"></div>
                            <div style={{
                                borderWidth: height * 0.01,
                                marginLeft: width * 0.9 - height * 0.9 / 6 - height * 0.02,
                                width: height * 0.9 / 6,
                                height: height * 0.9 / 2,
                                marginTop: -(height * 0.9) + (height * 0.9 / 2) / 2
                            }} className="panelty"></div>

                            <div className="center" style={{
                                // backgroundColor: 'red',
                                borderWidth: height * 0.01,
                                marginTop: -(height * 0.9) + (height * 0.9 / 2.9),
                                width: height * 0.9 / 4,
                                height: height * 0.9 / 4,

                                marginLeft: width * 0.9 / 2 - 2 * height * 0.06,
                            }}></div>
                            <div className="center" style={{
                                backgroundColor: 'white',
                                height: height * 0.015,
                                width: height * 0.015,
                                marginTop: -(height * 0.9) + (height * 0.85 / 2),
                                marginLeft: width * 0.9 / 2 - 2 * height * 0.00433333,
                            }}></div>

                            {/* <div className="panelty right"></div>
                    <div className="p-spot left">&nbsp;</div>
                    <div className="p-spot right">&nbsp;</div>
                    <div className="center"></div>
                    <div className="p-place left"></div>
                    <div className="p-place right"></div> */}
                        </div>

                    </div >
                    <div className='coach'>

                    </div>

                    {/* {this.player(home.GK)} */}
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.4}
                        left={width * 0.82}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <Person person={home.GK} height={height} />

                    </DraggableElement>
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.045}
                        left={width * 0.6}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <Person person={home.DF[0]} height={height} />

                    </DraggableElement>
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.7}
                        left={width * 0.6}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <Person person={home.DF[1]} height={height} />

                    </DraggableElement>
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.4}
                        left={width * 0.66}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <Person person={home.DF[2]} height={height} />

                    </DraggableElement>
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.4}
                        left={width * 0.43}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <Person person={home.MF[0]} height={height} />

                    </DraggableElement>
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.2}
                        left={width * 0.2}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <Person person={home.FW[0]} height={height} />

                    </DraggableElement>
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.5}
                        left={width * 0.2}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <Person person={home.FW[1]} height={height} />

                    </DraggableElement>
                    <DraggableElement
                        title={`☩`}
                        width={`5`}
                        height={`5`}
                        top={height * 0.4}
                        left={width * 0.01}
                        maxWidth={width}
                        maxHeight={height}
                    >
                        <img style={{
                            height: height * 0.08, position: 'absolute',
                            marginTop: -20
                        }} src="./../static/Football-Soccer-Ball-PNG.png" />

                    </DraggableElement>
                    {this.showReserve(home.Reserve)}
                </div>

        )
    }
}
const home = {
    GK: {
        name: "Kh.Cương",
        number: 1,
        csAn: [
            {
                img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_20.png?20191212',
                title: "Đấm bóng",
                direction: "TM có khả năng đấm bóng tốt"
            },
            {
                img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_23.png',
                title: "Đối mặt",
                direction: 'TM có bản lĩnh trong tình huống 1vs1'
            }

        ],
        csChung: [
            {
                chiSo: 40,
                name: "Dứt điểm",
            },
            {
                chiSo: 35,
                name: "Lấy bóng",

            },
            {
                chiSo: 100,
                name: "Phản xạ"
            },
            {
                chiSo: 90,
                name: "Phản ứng"
            },
            {
                chiSo: 60,
                name: "Cắt bóng"
            },
            {
                chiSo: 50,
                name: "Chuyền"
            },
            {
                chiSo: 80,
                name: "Sức mạnh"
            },
            {
                chiSo: 60,
                name: "Tốc độ"
            },
            {
                chiSo: 50,
                name: "Giữ bóng"
            },
        ],
        birhday: '01/01/1999',
        canNang: 70,
        tall: 150,
        idFb: "100012213182043",
        position: 'GK'
    },
    DF: [
        {
            name: "C.Chiến",
            number: 3,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_16.png',
                    title: "Sút xa",
                    direction: "Thường xuyên thực hiện những cú sút từ xa"
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_12.png?20191212',
                    title: "Tạt bóng sớm",
                    direction: 'Thường xuyên tung ra đường tạt bóng sớm'
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_17.png?20191212',
                    title: "Ma tốc độ",
                    direction: 'Cầu thủ có khả năng chạy nhanh'
                }

            ],
            csChung: [
                {
                    chiSo: 75,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 80,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 70,
                    name: "Phản xạ"
                },
                {
                    chiSo: 84,
                    name: "Phản ứng"
                },
                {
                    chiSo: 72,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 87,
                    name: "Chuyền"
                },
                {
                    chiSo: 77,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 95,
                    name: "Tốc độ"
                },
                {
                    chiSo: 80,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 60,
            tall: 170,
            idFb: "100022832236976",
            position: 'LB'
        },
        {
            name: "V.Chiến",
            number: 2,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_17.png?20191212',
                    title: "Ma tốc độ",
                    direction: 'Cầu thủ có khả năng chạy nhanh'
                }
            ],
            csChung: [
                {
                    chiSo: 75,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 80,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 70,
                    name: "Phản xạ"
                },
                {
                    chiSo: 84,
                    name: "Phản ứng"
                },
                {
                    chiSo: 72,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 87,
                    name: "Chuyền"
                },
                {
                    chiSo: 77,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 97,
                    name: "Tốc độ"
                },
                {
                    chiSo: 70,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 70,
            tall: 165,
            idFb: "100007839018991",
            position: 'RB'
        },
        {
            name: "Đ.Hùng",
            number: 4,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_5.png?20191212',
                    title: "Cứng như thép",
                    direction: "Rất khó bị chấn thương"
                }

            ],
            csChung: [
                {
                    chiSo: 60,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 89,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 61,
                    name: "Phản xạ"
                },
                {
                    chiSo: 65,
                    name: "Phản ứng"
                },
                {
                    chiSo: 90,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 70,
                    name: "Chuyền"
                },
                {
                    chiSo: 89,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 73,
                    name: "Tốc độ"
                },
                {
                    chiSo: 65,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 70,
            tall: 170,
            idFb: "100007912215765",
            position: 'CB'
        },
    ],
    MF: [
        {
            name: "D.Dương",
            number: 8,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_18.png?20191212',
                    title: "Kiến tạo (AI)",
                    direction: "Từng các đường chuyền tấn công và kiến tạo"
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_14.png?20191212',
                    title: "Tinh tế",
                    direction: 'Khả năng thực .hiện những kĩ năng diệu nghệ'
                }

            ],
            csChung: [
                {
                    chiSo: 83,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 82,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 60,
                    name: "Phản xạ"
                },
                {
                    chiSo: 55,
                    name: "Phản ứng"
                },
                {
                    chiSo: 78,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 90,
                    name: "Chuyền"
                },
                {
                    chiSo: 80,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 75,
                    name: "Tốc độ"
                },
                {
                    chiSo: 88,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 63,
            tall: 179,
            idFb: "100007124799677",
            position: 'CM'
        },
    ],
    FW: [
        {
            name: "V.Ka",
            number: 9,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_16.png',
                    title: "Sút xa",
                    direction: "Thường xuyên thực hiện những cú sút từ xa"
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_28.png',
                    title: "Nỗ lực đến cùng",
                    direction: 'Càng về cuối trận càng dũng mãnh!'
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_17.png?20191212',
                    title: "Ma tốc độ",
                    direction: 'Cầu thủ có khả năng chạy nhanh'
                }

            ],
            csChung: [
                {
                    chiSo: 83,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 82,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 60,
                    name: "Phản xạ"
                },
                {
                    chiSo: 55,
                    name: "Phản ứng"
                },
                {
                    chiSo: 78,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 80,
                    name: "Chuyền"
                },
                {
                    chiSo: 80,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 101,
                    name: "Tốc độ"
                },
                {
                    chiSo: 88,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 63,
            tall: 170,
            idFb: "100008743564762",
            position: 'RWF'
        },
        {
            name: "P.Xuân",
            number: 7,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_4.png',
                    title: "Dễ chấn thương",
                    direction: "Dễ bị chấn thương"
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_13.png',
                    title: "Sút xoáy",
                    direction: 'Cầu thủ giòi sút xoáy'
                }

            ],
            csChung: [
                {
                    chiSo: 79,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 70,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 60,
                    name: "Phản xạ"
                },
                {
                    chiSo: 60,
                    name: "Phản ứng"
                },
                {
                    chiSo: 70,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 75,
                    name: "Chuyền"
                },
                {
                    chiSo: 65,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 86,
                    name: "Tốc độ"
                },
                {
                    chiSo: 85,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 60,
            tall: 173,
            idFb: "100011388397335",
            position: 'LWF'
        },
    ],
    Reserve: [
        {
            name: "V.Tuấn",
            number: 11,
            csAn: [

            ],
            csChung: [
                {
                    chiSo: 70,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 50,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 55,
                    name: "Phản xạ"
                },
                {
                    chiSo: 55,
                    name: "Phản ứng"
                },
                {
                    chiSo: 65,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 78,
                    name: "Chuyền"
                },
                {
                    chiSo: 75,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 77,
                    name: "Tốc độ"
                },
                {
                    chiSo: 69,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 66,
            tall: 173,
            idFb: "100017059335166",
            position: 'RWF'
        },
        {
            name: "T.Minh",
            number: 12,
            csAn: [

                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_7.png?20191212',
                    title: "Xoạc bóng (AI)",
                    direction: "Thường xuyên xoạc bóng"
                },
            ],
            csChung: [
                {
                    chiSo: 80,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 78,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 66,
                    name: "Phản xạ"
                },
                {
                    chiSo: 61,
                    name: "Phản ứng"
                },
                {
                    chiSo: 77,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 77,
                    name: "Chuyền"
                },
                {
                    chiSo: 63,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 85,
                    name: "Tốc độ"
                },
                {
                    chiSo: 79,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 60,
            tall: 169,
            idFb: "100011571764825",
            position: 'LWF'
        },
        {
            name: "N. Dũng",
            number: 13,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_7.png?20191212',
                    title: "Xoạc bóng (AI)",
                    direction: "Thường xuyên xoạc bóng"
                },
            ],
            csChung: [
                {
                    chiSo: 70,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 80,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 66,
                    name: "Phản xạ"
                },
                {
                    chiSo: 61,
                    name: "Phản ứng"
                },
                {
                    chiSo: 77,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 70,
                    name: "Chuyền"
                },
                {
                    chiSo: 63,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 82,
                    name: "Tốc độ"
                },
                {
                    chiSo: 70,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 70,
            tall: 172,
            idFb: "100006138404753",
            position: 'LB'
        },
        {
            name: "D. Nam",
            number: 14,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_21.png?20191212',
                    title: "TM ném xa",
                    direction: "TM có khả năng ném bóng xa"
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_43.png?20191212',
                    title: "Thủ môn quét",
                    direction: "TM dâng cao hoạt động như hậu vệ quét"
                },
            ],
            csChung: [
                {
                    chiSo: 85,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 75,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 80,
                    name: "Phản xạ"
                },
                {
                    chiSo: 88,
                    name: "Phản ứng"
                },
                {
                    chiSo: 70,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 83,
                    name: "Chuyền"
                },
                {
                    chiSo: 60,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 60,
                    name: "Tốc độ"
                },
                {
                    chiSo: 80,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 68,
            tall: 160,
            idFb: "100011424008506",
            position: 'LB'
        },
        {
            name: "X. Phượng",
            number: 15,
            csAn: [

                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_42.png?20191212',
                    title: "Qua người",
                    direction: "Kỹ thuật cá nhân xuất sắc khi rê bóng 1vs1"
                },
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_14.png?20191212',
                    title: "Tinh tế",
                    direction: "Khả năng thực .hiện những kĩ năng diệu nghệ"
                },


            ],
            csChung: [
                {
                    chiSo: 88,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 60,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 55,
                    name: "Phản xạ"
                },
                {
                    chiSo: 55,
                    name: "Phản ứng"
                },
                {
                    chiSo: 61,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 87,
                    name: "Chuyền"
                },
                {
                    chiSo: 70,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 84,
                    name: "Tốc độ"
                },
                {
                    chiSo: 90,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 65,
            tall: 171,
            idFb: "100023574105910",
            position: 'LWB'
        },
        {
            name: "P. Huy",
            number: 16,
            csAn: [

            ],
            csChung: [
                {
                    chiSo: 75,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 70,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 50,
                    name: "Phản xạ"
                },
                {
                    chiSo: 55,
                    name: "Phản ứng"
                },
                {
                    chiSo: 65,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 70,
                    name: "Chuyền"
                },
                {
                    chiSo: 80,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 80,
                    name: "Tốc độ"
                },
                {
                    chiSo: 73,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 65,
            tall: 178,
            idFb: "100023479671230",
            position: 'ST'
        },
        {
            name: "V. Lực",
            number: 5,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_6.png?20191212',
                    title: "Tránh sai chân thuận",
                    direction: "Tránh sai chân thuận"
                },
            ],
            csChung: [
                {
                    chiSo: 75,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 83,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 52,
                    name: "Phản xạ"
                },
                {
                    chiSo: 51,
                    name: "Phản ứng"
                },
                {
                    chiSo: 80,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 74,
                    name: "Chuyền"
                },
                {
                    chiSo: 90,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 92,
                    name: "Tốc độ"
                },
                {
                    chiSo: 80,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 71,
            tall: 171,
            idFb: "100016940350895",
            position: 'RB'
        },
        {
            name: "Tr. Hiếu",
            number: 6,
            csAn: [
                {
                    img: 'https://s1.fifaaddict.com/fo4/traits/trait_icon_6.png?20191212',
                    title: "Tránh sai chân thuận",
                    direction: "Tránh sai chân thuận"
                },
            ],
            csChung: [
                {
                    chiSo: 75,
                    name: "Dứt điểm",
                },
                {
                    chiSo: 83,
                    name: "Lấy bóng",

                },
                {
                    chiSo: 52,
                    name: "Phản xạ"
                },
                {
                    chiSo: 51,
                    name: "Phản ứng"
                },
                {
                    chiSo: 82,
                    name: "Cắt bóng"
                },
                {
                    chiSo: 78,
                    name: "Chuyền"
                },
                {
                    chiSo: 88,
                    name: "Sức mạnh"
                },
                {
                    chiSo: 82,
                    name: "Tốc độ"
                },
                {
                    chiSo: 81,
                    name: "Giữ bóng"
                },
            ],
            birhday: '01/01/1999',
            canNang: 70,
            tall: 168,
            idFb: "100029485661356",
            position: 'RB'
        },
    ],


}
export default App
