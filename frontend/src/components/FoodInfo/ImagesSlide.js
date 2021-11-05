import React, { useState, useEffect } from 'react';

const images = [
    "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
    "https://vuacua.vn/storage/media/iPfA30ZgTpzyDuzoMHJBYIC3pbdwIJlcOAsC4DHQ.jpeg",
    "https://vuacua.vn/storage/media/YE93ZWhvd8hKQZ8SoFPKCBn6cyzPPR5UCIUtaEeu.jpeg",
    "https://vuacua.vn/storage/media/7atQojptTrQx1Zqz7LnOroTDBn8RXbVf8rQCeWEZ.jpeg",
    "https://vuacua.vn/storage/media/31tpzKyd0wlgwC0cfrQJ6bsUS72uNabwRqqJSnx0.jpeg",
    "https://vuacua.vn/storage/media/EV0k9gZZjYCcxq1KZlLMaYxKi0GDSJOG45qfyIrR.jpeg",
    "https://vuacua.vn/storage/media/JzAPf1tpgEt6jSEvWqGt4fiWjRQqfesSXT5CUgP3.jpeg",
    "https://vuacua.vn/storage/media/4URBXmwIR2f2foAQjmCK9goo8ZHa4e9o8irdGB10.png",
    "https://vuacua.vn/storage/media/GkuRArvrbDfL5WLjFcSEkA04mXu7XqEPoLT1NAbo.png"
]
export function ImagesSlide({imageData}) {
    // imageData = images;
    const N_BOTTOM_IMGS = 4;
    const [mainImgIdx, setMainImgIdx] = useState(0);
    const [bottomImgIdxs, setBottomImgIdxs] = useState(getInitBottomImgs());

    function shiftRight() {
        if(bottomImgIdxs[bottomImgIdxs.length - 1] < imageData.length - 1) {
            setBottomImgIdxs(bottomImgIdxs.map((item) => {return item + 1;}));
        }
    }
    function shiftLeft() {
        if(bottomImgIdxs[0] > 0) {
            setBottomImgIdxs(bottomImgIdxs.map((item) => {return item - 1;}));
        }
    }

    function getInitBottomImgs() {
        var imgIdxs = [];
        for(let i = 0; i < imageData.length && i < N_BOTTOM_IMGS; i++) {
            imgIdxs.push(i);
        }
        console.log(imgIdxs);
        return imgIdxs
    }


    return(
        <div>
            <div class="row p-0">
                <img class="w-100" src={imageData[mainImgIdx]}/>
            </div>
            <div class="row">
                <div class="col-auto row align-items-center p-0 m-0" onClick={() => {shiftLeft()}}>
                    <a class="text-primary p-0 m-0" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                        </svg>
                    </a>
                </div>
                <div class="col row">
                    {bottomImgIdxs.map((idx) => {
                        return (
                            <div class={"col w-25 p-1" + " " + (idx == mainImgIdx ? "" : "opacity-50")} onMouseEnter={() => {setMainImgIdx(idx)}}>
                                <button class="btn button-light p-0 shadow-none">
                                    <img class="w-100" src={imageData[idx]}/>
                                </button>                            
                            </div>
                        )
                    })}
                </div>
                <div class="col-auto row align-items-center p-0 m-0" onClick={() => {shiftRight()}}>
                    <a class="text-primary p-0 m-0" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}