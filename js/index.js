window.onload = function(){
    couponInit();
    // requestCoupon();
}

const couponInit = (getData) => {
    const couponElems = document.querySelectorAll(".cupon");
    [...couponElems].forEach((coupon, index) => {
        const couponNumber = index + 1;
        const reactElem = coupon.parentNode;
        // const targetData = getData.filter(targetCoupon => targetCoupon.cupon == couponNumber);
        // if(targetData.length > 0){
        //     targetData[0].state == 0 ? reactElem.classList.remove("on") : reactElem.classList.add("on")
        // }
        // coupon.onclick = () => {
        //     !reactElem.classList.contains("on") && modalOpen(reactElem, targetData)
        // }
        coupon.onclick = () => {
            !reactElem.classList.contains("on") && modalOpen(reactElem)
        }
    })
}


const modalOpen = (targetCoupon) => {
    const modal = document.querySelector(".modal_wrap");
    modal.style.display = "flex";

    const okBtn = modal.querySelector(".ok");
    const closeBtn = modal.querySelector(".close");
    okBtn.onclick = () => {
        !targetCoupon.classList.contains("on") && targetCoupon.classList.add("on");
        modal.style.display = "none";
        // requestChangeState(targetData[0]);
    }

    closeBtn.onclick = () => {
        modal.style.display = "none";
    }
}

// const requestChangeState = (targetData) => {
//     const responseChangeState = result => {}
//     fetch("https://news.glserver.co.kr/",{
//         method : "POST",
//         body : JSON.stringify({
//             ctl : "Product",
//             param1 : "webTestChange",
//             state : targetData.state == 1 ? 0 : 1,
//             cupon : targetData.cupon,
//         })
//     })
//     .then(response => response.text())
//     .then(result => responseChangeState(result))
//     .catch(error => console.log("error : " + error));
// }

// const requestCoupon = () => {
//     const responseCoupon = result => {
//         result = JSON.parse(result);
//         if(result.result == 1){
//             couponInit(result.value);
//         }
//     }
//     fetch("https://news.glserver.co.kr/",{
//         method : "POST",
//         body : JSON.stringify({
//             ctl : "Product",
//             param1 : "webTest",
//         })
//     })
//     .then(response => response.text())
//     .then(result => responseCoupon(result))
//     .catch(error => console.log("error : " + error));
// }
