<template name="skeleton">
    <view class="sk-container">
        <view class="navbar navbar" style="padding-top:20px">
            <view class="wrap wrap">
                <navigator class="back icon-home sk-pseudo sk-pseudo-circle" open-type="switchTab"></navigator>
                <view class="title sk-transparent sk-text-14-2857-515 sk-text">订单详情</view>
            </view>
        </view>
        <scroll-view scroll-y="true" class="viewport viewport" id="scroller" enable-back-to-top="true">
            <view class="overview sk-image" style="padding-top:40px">
                <view class="status icon-clock sk-transparent sk-text-0-0000-712 sk-text sk-pseudo sk-pseudo-circle">
                    等待付款</view>
                <view class="tips sk-transparent">
                    <text class="money sk-transparent sk-text-0-0000-200 sk-text">应付金额: ¥ 99.00</text>
                    <text class="time sk-transparent sk-text-0-0000-579 sk-text">支付剩余</text> 00 时 29 分 59 秒
                </view>
                <view class="button sk-transparent sk-text-29-6296-146 sk-text" style="background-position-x: 50%;">去支付
                </view>
            </view>
            <view class="shipment shipment">
                <view class="item sk-image">
                    <view class="message sk-transparent sk-text-14-2857-478 sk-text">
                        您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。 </view>
                    <view class="date sk-transparent sk-text-14-2857-576 sk-text"> 2023-04-14 13:14:20 </view>
                </view>
                <view class="locate sk-image">
                    <view class="user sk-transparent sk-text-14-2857-793 sk-text"> 张三 13333333333 </view>
                    <view class="address sk-transparent sk-text-14-2857-10 sk-text"> 广东省 广州市 天河区 黑马程序员 </view>
                </view>
            </view>
            <view class="goods goods">
                <view class="item item">
                    <navigator class="navigator navigator" hover-class="none">
                        <image class="cover sk-image"></image>
                        <view class="meta meta">
                            <view class="name ellipsis sk-transparent sk-text-14-2857-934 sk-text">ins风小碎花泡泡袖衬110-160cm
                            </view>
                            <view class="type sk-transparent sk-text-22-2222-237 sk-text">藏青小花， 130</view>
                            <view class="price price">
                                <view class="actual actual">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="sk-transparent sk-text-14-2857-827 sk-text">99.00</text>
                                </view>
                            </view>
                            <view class="quantity sk-transparent sk-opacity">x1</view>
                        </view>
                    </navigator>
                    <navigator class="navigator navigator" hover-class="none">
                        <image class="cover sk-image"></image>
                        <view class="meta meta">
                            <view class="name ellipsis sk-transparent sk-text-14-2857-409 sk-text">ins风小碎花泡泡袖衬110-160cm
                            </view>
                            <view class="type sk-transparent sk-text-22-2222-854 sk-text">藏青小花， 130</view>
                            <view class="price price">
                                <view class="actual actual">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="sk-transparent sk-text-14-2857-254 sk-text">99.00</text>
                                </view>
                            </view>
                            <view class="quantity sk-transparent sk-opacity">x1</view>
                        </view>
                    </navigator>
                    <view class="action action">
                        <view class="button sk-transparent sk-transparent sk-text-28-0000-768 sk-text"
                            style="background-position-x: 50%;">申请售后</view>
                        <navigator class="button sk-transparent sk-text-28-0000-42 sk-text"
                            style="background-position-x: 50%;"> 去评价 </navigator>
                    </view>
                </view>
                <view class="total total">
                    <view class="row row">
                        <view class="text sk-transparent sk-text-0-0000-652 sk-text">商品总价: </view>
                        <view class="symbol sk-transparent sk-text-0-0000-608 sk-text sk-pseudo sk-pseudo-circle">99.00
                        </view>
                    </view>
                    <view class="row row">
                        <view class="text sk-transparent sk-text-0-0000-445 sk-text">运费: </view>
                        <view class="symbol sk-transparent sk-text-0-0000-365 sk-text sk-pseudo sk-pseudo-circle">10.00
                        </view>
                    </view>
                    <view class="row row">
                        <view class="text sk-transparent sk-text-0-0000-404 sk-text">应付金额: </view>
                        <view
                            class="symbol sk-transparent sk-transparent sk-text-0-0000-838 sk-text sk-pseudo sk-pseudo-circle">
                            109.00</view>
                    </view>
                </view>
            </view>
            <view class="toolbar toolbar" style="padding-bottom:0px">
                <view class="button sk-transparent sk-transparent sk-text-14-2857-753 sk-text"> 去支付 </view>
                <view class="button sk-transparent sk-text-14-2857-187 sk-text"> 取消订单 </view>
            </view>
        </scroll-view>
    </view>
</template>
<style>
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-515 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.6563rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-0-0000-712 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 35.1563rpx;
    position: relative !important;
}

.sk-text-0-0000-200 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-0-0000-579 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-29-6296-146 {
    background-image: linear-gradient(transparent 29.6296%, #EEEEEE 0%, #EEEEEE 70.3704%, transparent 0%) !important;
    background-size: 100% 63.2813rpx;
    position: relative !important;
}

.sk-text-14-2857-478 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-576 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-14-2857-793 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-10 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-14-2857-934 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-22-2222-237 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 42.1875rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-827 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-14-2857-409 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-22-2222-854 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 42.1875rpx;
    position: relative !important;
}

.sk-text-14-2857-254 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
}

.sk-text-28-0000-768 {
    background-image: linear-gradient(transparent 28.0000%, #EEEEEE 0%, #EEEEEE 72.0000%, transparent 0%) !important;
    background-size: 100% 58.5938rpx;
    position: relative !important;
}

.sk-text-28-0000-42 {
    background-image: linear-gradient(transparent 28.0000%, #EEEEEE 0%, #EEEEEE 72.0000%, transparent 0%) !important;
    background-size: 100% 58.5938rpx;
    position: relative !important;
}

.sk-text-0-0000-652 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
}

.sk-text-0-0000-608 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
}

.sk-text-0-0000-445 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
}

.sk-text-0-0000-365 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
}

.sk-text-0-0000-404 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
}

.sk-text-0-0000-838 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 35.1563rpx;
    position: relative !important;
}

.sk-text-14-2857-753 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-187 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>