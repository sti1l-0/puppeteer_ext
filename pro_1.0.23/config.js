const config = {
    clientKey: 'c42525539530dfa89e6258ca8333042c19c3546e18210', // 你购买授权的clientKey
    host: 'https://api.yescaptcha.com', // 服务器地址，默认官网服务器https://api.yescaptcha.com

    autorun: true, // 自动运行 true or false
    imageclassification: true, // reCaptcha谷歌人机自动识别
    hcaptcha: true, // hCaptchaHC人机自动识别
    imagetotext: true, // Coinlist英文数字人机自动识别
    rainbow: true, // Coinlist排队时粉色按钮自动点击
    times: 200, // 点击图片的间隔时间，单位毫秒
    isTextCaptcha: true, // 开启文字验证码识别
    endTimes: '1',// 在几次识别流程后停止识别
    isAutoClickCheckBox: true, // 是否自动点击checkBox
    checkBoxClickDelayTime: "500",// 页面加载之后 延迟多久自动点击checkBox
    isOpenEndTimes: true,// 是否打开“在几次识别流程后停止识别”这个功能
    isOpenCloudflare: true, //是否开启Cloudflare验证
    isAutoSubmit: true,//一次九宫格验证中，是否自动点击提交按钮
    network: { //网络设置
        hcaptchaVerifyFailDelay: 1000,//在一次解析请求失败后，重试的延迟事件（网络不好的情况）
        hcaptchaVerifyTry: 3,//单次解析请求的重复此时（网络不好的情况）
        recaptchaVerifyFailDelay: 1000,
        recaptchaVerifyTry: 2
    },
    hcaptchaConfig: {
        //“超过一定次数的识别后停止识别”，防止识别次数过多导致扣钱，一次识别次数指的是识别一次九宫格，
        //注意和上面的识别流程endTimes有区别,两者可同时起作用
        recognitionLimit: {
            isOpenRecognitionLimit: true, // 是否开启功能
            recognitionMaxTimes: 10, //超过几次识别后触发逻辑
            //nothing | refreshCaptcha
            actionAfterRecognitionMaxTimes: "nothing" //触发什么逻辑 nothing：什么都不干，refreshCaptcha：刷新九宫格
        },

    }
}

// 以下代码请勿修改
chrome.storage.local.get(['config'], function (result) {
    if (!result.config) {
        chrome.storage.local.set({ config }, () => { })// 存储配置
    }
})