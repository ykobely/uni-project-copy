const apiUrl = {
    index: {
        config: `api/index/config`,
        newIndex: `api/index/new-index`,
        tplIndex: `api/index/tpl-index`,
        index: `api/index/index`,
        buy_data: `api/index/purchase`,
        extra: 'api/index/index-extra',
        status: 'api/index/shop-status',
        //test: 'api/test/index',
        indexWechat: 'api/index/index-wechat',
    },
    finance: {
        cash: 'api/finance/cash',
        config: 'api/finance/config',
        list: 'api/finance/list',
    },
    payment: {
        get_payments: `api/payment/get-payments`,
        pay_data: `api/payment/pay-data`,
        pay_buy_balance: `api/payment/pay-buy-balance`,
        pay_buy_huodao: `api/payment/pay-buy-huodao`,
    },
    upload: {
        file: `api/attachment/upload`
    },
    default: {
        district: `api/default/district`,
        goods_list: `api/default/goods-list`,
        search_list: `api/default/search-list`,
        cart_list: `api/default/cats-list&cat_id=`,
        qrcode_parameter: 'api/default/qr-code-parameter',
        cat_list: `api/cat/list`,
        cat_goods: `api/cat/goods`,
    },
    passport: {
        login: `api/passport/login`,
    },
    user: {
        user_info: `api/user/user-info`,
        address: `api/user/address`,
        wechat_district: `api/user/wechat-district`,
        address_save: `api/user/address-save`,
        address_detail: `api/user/address-detail`,
        address_default: `api/user/address-default`,
        address_destroy: `api/user/address-destroy`,
        auto_address_info: `api/default/auto-address-info`,
        my_favorite_goods: `api/user/my-favorite-goods`,
        my_favorite_topic: `api/user/my-favorite-topic`,
        favorite_add: "api/user/favorite-add",
        favorite_remove: "api/user/favorite-remove",
        favorite_batch_remove: `/api/user/favorite-batch-remove`,
        config: 'api/user/config',
        is_clerk: 'api/user/is-clerk-user',
    },
    article: {
        list: `api/default/article-list`,
        detail: `api/default/article`,
    },
    coupon: {
        list: `api/coupon/list`,
        detail: `api/coupon/detail`,
        receive: `api/coupon/receive`,
        user_coupon: `api/coupon/user-coupon`,
        user_coupon_detail: `api/coupon/user-coupon-detail`,
        share_coupon: `api/coupon/share-coupon`,
        give: 'api/coupon/give',
    },
    city: {
        cityName: `api/default/district`,
        goodsList: `api/default/goods-list`
    },
    balance: {
        index: `api/balance/index`,
        logs: `api/balance/logs`,
        log_detail: `api/balance/log-detail`
    },
    order: {
        preview: `api/order/preview`,
        submit: `api/order/submit`,
        pay_data: `api/order/pay-data`,
        usable_coupon_list: `api/order/usable-coupon-list`,
        store_list: `api/order/store-list`,
        list: `api/order/list`,
        detail: `api/order/detail`,
        appraise: 'api/order/appraise',
        express_detail: 'api/order/express-detail',
        clerk_affirm_pay: 'api/order/clerk-affirm-pay',
        order_clerk: 'api/order/order-clerk',
        clerk_qr_code: 'api/order/clerk-qr-code',
        apply_refund: 'api/order/apply-refund',
        refund_submit: 'api/order/refund-submit',
        refund_detail: 'api/order/refund-detail',
        refund_send: 'api/order/refund-send',
        confirm: 'api/order/confirm',
        cancel: 'api/order/cancel',
        list_pay_data: 'api/order/list-pay-data',
        pay_result: `api/order/pay-result`,
        customer: 'api/express/get-customer',
        delivery: 'api/express/delivery-config',
        order_express_list: 'api/express/order-express-list',
        cancel_cause_list: 'api/order/cancel-cause-list',
        cancel_refund: 'api/order/cancel-refund',
        cancel_apply: 'api/order/cancel-apply',
        city_map: 'api/order/city-map'
    },
    video: {
        index: 'api/video/index'
    },
    topic: {
        type: 'api/topic/type',
        list: 'api/topic/list',
        detail: 'api/topic/detail',
        favorite: 'api/topic/favorite',
        qrcode: 'api/qrcode/topic',
    },
    member: {
        index: 'api/mall-member/index',
        all: 'api/mall-member/all-member',
        coupon: 'api/mall-member/member-coupon',
        goods: 'api/mall-member/member-goods',
        cats: 'api/mall-member/goods-cats',
        purchase: 'api/mall-member/purchase-member',
        receive: 'api/mall-member/coupon-receive',
        detail: 'api/mall-member/detail',
        set_password: 'api/mall-member/set-pay-password',
        update_password: 'api/mall-member/update-pay-password',
        verify_password: 'api/mall-member/verify-pay-password',
    },
    recharge: {
        index: 'api/recharge/index',
        setting: 'api/recharge/setting',
        balance_recharge: 'api/recharge/balance-recharge',
    },
    store: {
        list: `api/store/list`,
        detail: `api/store/detail`,
    },
    goods: {
        detail: 'api/goods/detail',
        attr: 'api/goods/attr',
        comments_list: 'api/goods/comments-list',
        recommend: 'api/goods/recommend',
        new_recommend: 'api/goods/new-recommend',
        cat_style: 'api/goods/cat-style',
        goods_video_list: '/api/goods/goods-list',
        poster: '/api/goods/poster',
        hot_search: '/api/goods/hot-search',
        addMaterial: '/api/video-number/add-material',
        articleUrl: '/api/video-number/get-article-url',
		remind: 'api/goods/remind'
    },
    card: {
        index: 'api/card/user-card',
        detail: 'api/card/user-card-detail',
        qrcode: 'api/card/card-qrcode',
        clerk: 'api/card/card-clerk',
        history: 'api/card/clerk-history',
        give: 'api/card/give',
        receive: 'api/card/receive',
    },
    share: {
        apply: 'api/share/apply',
        index: 'api/share/index',
        setting: 'api/share/setting',
        customize: 'api/share/customize',
        brokerage: 'api/share/brokerage',
        team: 'api/share/team',
        cash: 'api/share/cash',
        cash_list: 'api/share/cash-list',
        apply_status: 'api/share/apply-status',
        share_order: 'api/share/share-order',
        bind_parent: 'api/share/bind-parent',
        poster: 'api/qrcode/share',
        new_apply_status: 'api/share/new-apply-status',
        level: 'api/share/level',
        level_up: 'api/share/level-up',
    },
    pond: {
        index: 'plugin/pond/api/pond/index',
        lottery: 'plugin/pond/api/pond/lottery',
        prize: 'plugin/pond/api/pond/prize',
        send: 'plugin/pond/api/pond/send',
        setting: 'plugin/pond/api/pond/setting',
        order_preview: 'plugin/pond/api/pond/order-preview',
        order_submit: 'plugin/pond/api/pond/order-submit',
        poster: 'plugin/pond/api/pond/poster',
    },
    scratch: {
        index: 'plugin/scratch/api/scratch/index',
        receive: 'plugin/scratch/api/scratch/receive',
        setting: 'plugin/scratch/api/scratch/setting',
        prize: 'plugin/scratch/api/scratch/prize',
        record: 'plugin/scratch/api/scratch/record',
        order_preview: 'plugin/scratch/api/scratch/order-preview',
        order_submit: 'plugin/scratch/api/scratch/order-submit',
        poster: 'plugin/scratch/api/scratch/poster',
    },
    bonus: {
        order: 'plugin/bonus/api/order/index',
        index: 'plugin/bonus/api/index/index',
        apply: 'plugin/bonus/api/index/apply',
        status: 'plugin/bonus/api/index/apply-status',
        team: 'plugin/bonus/api/order/team-bonus',
        setting: 'plugin/bonus/api/index/setting',
        clear: 'plugin/bonus/api/index/clear-apply',
        cash: 'plugin/bonus/api/index/cash',
        detail: 'plugin/bonus/api/cash/index',
        member: 'plugin/bonus/api/index/all-member',
        data: 'plugin/bonus/api/order/data'
    },
    lottery: {
        index: 'plugin/lottery/api/lottery/index',
        setting: 'plugin/lottery/api/lottery/setting',
        detail: 'plugin/lottery/api/lottery/detail',
        prize: 'plugin/lottery/api/lottery/prize',
        clerk: 'plugin/lottery/api/lottery/clerk',
        code: 'plugin/lottery/api/lottery/code',
        order_preview: 'plugin/lottery/api/lottery/order-preview',
        order_submit: 'plugin/lottery/api/lottery/order-submit',
        goods: 'plugin/lottery/api/lottery/goods',
        poster: 'plugin/lottery/api/lottery/poster',
        poster_config: 'plugin/lottery/api/poster/config',
        poster_generate: 'plugin/lottery/api/poster/generate',
    },
    check_in: {
        index: 'plugin/check_in/api/index/index',
        user: 'plugin/check_in/api/index/user',
        customize: 'plugin/check_in/api/index/customize',
        sign_in: 'plugin/check_in/api/index/sign-in',
        sign_in_result: 'plugin/check_in/api/index/sign-in-result',
        sign_in_day: 'plugin/check_in/api/index/sign-in-day',
    },
    quick: {
        index: `api/quick/index`,
        goods_list: `api/quick/goods-list`,
        cart: `api/quick/cart`,
    },
    // #ifdef MP
    step: {
        index: 'plugin/step/api/step/index',
        setting: 'plugin/step/api/step/setting',
        ranking: 'plugin/step/api/step/ranking',
        goods: 'plugin/step/api/step/goods',
        activity_detail: 'plugin/step/api/step/activity-detail',
        activity: 'plugin/step/api/step/activity',
        activity_log: 'plugin/step/api/step/activity-log',
        activity_join: 'plugin/step/api/step/activity-join',
        activity_submit: 'plugin/step/api/step/activity-submit',
        invite_list: 'plugin/step/api/step/invite-list',
        convert: 'plugin/step/api/step/convert',
        log: 'plugin/step/api/step/log',
        step_convert: 'plugin/step/api/step/step-convert',
        remind: 'plugin/step/api/step/remind',
        order_preview: 'plugin/step/api/step/order-preview',
        order_submit: 'plugin/step/api/step/order-submit',
        goods_detail: 'plugin/step/api/step/goods-detail',
        poster: 'plugin/step/api/step/poster',
        goods_poster: 'plugin/step/api/step/goods-poster',
        receive: 'plugin/step/api/step/receive',

        poster_config: 'plugin/step/api/poster/config',
        poster_generate: 'plugin/step/api/poster/generate',
    },
    // #endif
    cart: {
        edit: 'api/cart/edit',
        delete: 'api/cart/delete',
        list: 'api/cart/list',
        add: 'api/cart/add',
    },
    fxhb: {
        index: 'plugin/fxhb/api/index/index',
        join: 'plugin/fxhb/api/index/join',
        join_result: 'plugin/fxhb/api/index/join-result',
        detail: 'plugin/fxhb/api/index/detail',
        recommend: 'plugin/fxhb/api/index/recommend'
    },
    scan_code_pay: {
        index: 'plugin/scan_code_pay/api/index/index',
        preview: 'plugin/scan_code_pay/api/order/preview',
        submit: 'plugin/scan_code_pay/api/order/submit',
        qr_code: 'plugin/scan_code_pay/api/index/qr-code',
        coupons: 'plugin/scan_code_pay/api/order/coupons',
        cancel: 'plugin/scan_code_pay/api/order/cancel',
    },
    phone: {
        binding: 'api/phone/binding',
        code: 'api/user/phone-code',
    },
    book: {
        cats: 'plugin/booking/api/booking/cats',
        clerk_code: 'plugin/booking/api/order-list/clerk-code',
        order_submit: 'plugin/booking/api/order/order-submit',
        order_preview: 'plugin/booking/api/order/order-preview',
        detail: 'plugin/booking/api/goods/detail',
        list: 'plugin/booking/api/goods/list',
        setting: 'plugin/booking/api/booking/setting',
        order_list: 'plugin/booking/api/order-list/index',
        order_detail: 'plugin/booking/api/order-list/detail',
        store_list: 'plugin/booking/api/booking/store-list',
        poster: 'plugin/booking/api/booking/poster',
        poster_config: 'plugin/booking/api/poster/config',
        poster_generate: 'plugin/booking/api/poster/generate',
    },
    poster: {
        share: 'api/qrcode/share',
        goods: 'api/qrcode/goods',
        topic: 'api/qrcode/topic',
        footprint: 'api/qrcode/footprint',
        goods_new: 'api/qrcode/goods-new',
        card: 'api/card/give-poster',
        coupon: 'api/coupon/give-poster',
        card_share: 'api/qrcode/card-share',
        coupon_share: 'api/qrcode/coupon-share',
    },
    bargain: {
        banner: 'plugin/bargain/api/index/banner',
        goods_list: 'plugin/bargain/api/goods/list',
        goods_detail: 'plugin/bargain/api/goods/detail',
        list: 'plugin/bargain/api/order/bargain-list',
        bargain_submit: 'plugin/bargain/api/order/bargain-submit',
        bargain_result: 'plugin/bargain/api/order/bargain-result',
        order_preview: 'plugin/bargain/api/order/order-preview',
        order_submit: 'plugin/bargain/api/order/order-submit',
        user_join_bargain: 'plugin/bargain/api/order/user-join-bargain',
        user_join_bargain_result: 'plugin/bargain/api/order/user-join-bargain-result',
        activity: 'plugin/bargain/api/order/activity',
        setting: 'plugin/bargain/api/index/index',
        poster: 'plugin/bargain/api/index/poster',
        poster_config: 'plugin/bargain/api/poster/config',
        poster_generate: 'plugin/bargain/api/poster/generate',
    },
    integral_mall: {
        index: 'plugin/integral_mall/api/index/index',
        coupon: 'plugin/integral_mall/api/coupon/index',
        cats: 'plugin/integral_mall/api/goods/cats',
        detail: 'plugin/integral_mall/api/coupon/detail',
        goods_detail: 'plugin/integral_mall/api/goods/detail',
        coupon_submit: 'plugin/integral_mall/api/coupon-order/order-submit',
        goods: 'plugin/integral_mall/api/goods/index',
        log: 'api/integral-log/index',
        order: 'plugin/integral_mall/api/order/index',
        coupon_order: 'plugin/integral_mall/api/coupon-order/index',
        order_preview: 'plugin/integral_mall/api/order/order-preview',
        order_submit: 'plugin/integral_mall/api/order/order-submit',
        coupon_pay: 'plugin/integral_mall/api/coupon-order/order-pay-data',
        poster: 'plugin/integral_mall/api/index/poster',
        poster_config: 'plugin/integral_mall/api/poster/config',
        poster_generate: 'plugin/integral_mall/api/poster/generate',
    },
    pt: {
        index: 'plugin/pintuan/api/v2/index/index',
        goods: 'plugin/pintuan/api/v2/goods/index',
        detail: 'plugin/pintuan/api/v2/goods/detail',
        cats: 'plugin/pintuan/api/v2/goods/cats',
        order_preview: 'plugin/pintuan/api/v2/order/order-preview',
        order_submit: 'plugin/pintuan/api/v2/order/submit',
        list: 'plugin/pintuan/api/v2/order/pintuan-list',
        pt_detail: 'plugin/pintuan/api/v2/order/pintuan-detail',
        order: 'plugin/pintuan/api/v2/order/list',
        poster: 'plugin/pintuan/api/v2/index/poster',
        order_poster: 'plugin/pintuan/api/v2/order/poster',
        poster_config: 'plugin/pintuan/api/v2/poster/config',
        poster_generate: 'plugin/pintuan/api/v2/poster/generate',
    },
    mch: {
        index: 'plugin/mch/api/mch/index',
        detail: 'plugin/mch/api/mch/detail',
        category: 'plugin/mch/api/mch/category',
        goods: 'plugin/mch/api/goods/index',
        goods_detail: 'plugin/mch/api/goods/detail',
        cat_style: 'plugin/mch/api/goods/cat-style',
        cats_list: 'api/cat/list',
        setting: 'plugin/mch/api/mch/setting',
        visit: 'plugin/mch/api/mch/add-visit',
        order_list: 'plugin/mch/api/order/index',
        order_detail: 'plugin/mch/api/order/detail',
        manage_index: 'plugin/mch/api/mch/manage-index',
        qr_code: 'plugin/mch/api/mch/qr-code',
        qr_code_parameter: 'api/default/qr-code-parameter',
        statistic: 'plugin/mch/api/mch/statistic',
        year_list: 'plugin/mch/api/mch/year-list',
        property: 'plugin/mch/api/property/index',
        account_log: 'plugin/mch/api/property/account-log',
        cash_log: 'plugin/mch/api/property/cash-log',
        order_close_log: 'plugin/mch/api/property/order-close-log',
        cash_submit: 'plugin/mch/api/property/cash-submit',
        order_send: 'plugin/mch/api/order/order-send',
        express_list: 'api/order/express-list',
        refund_detail: 'plugin/mch/api/order/refund-detail',
        mch_status: 'plugin/mch/api/mch/mch-status',
        apply: 'plugin/mch/api/mch/apply',
        login: 'plugin/mch/api/mch/login',
        order_print: 'plugin/mch/api/order/print',
        update_total_price: 'plugin/mch/api/order/update-total-price',
        update_price: 'plugin/mch/api/order/update-price',
        refund_handle: 'plugin/mch/api/order/refund-handle',
        update_password: 'plugin/mch/api/mch/update-password',
        switch_status: 'plugin/mch/api/goods/switch-status',
        destroy: 'plugin/mch/api/goods/destroy',
        cancel: 'plugin/mch/api/order/cancel',
        order_preview: 'plugin/mch/api/order/preview',
        order_submit: 'plugin/mch/api/order/submit',
        apply_status: 'plugin/mch/api/goods/apply-status',
        qr_code_login: 'plugin/mch/api/mch/qr-code-login',
        poster: 'plugin/mch/api/mch/poster',
        edit: 'plugin/mch/api/goods/edit',
        cat: 'plugin/mch/api/goods/cats',
        postage: 'plugin/mch/api/goods/rules',
        service: 'plugin/mch/api/goods/services',
        mch_cat: 'plugin/mch/api/goods/mch-cats',
        mch_cat_edit: 'plugin/mch/api/goods/cat-edit',
        mch_cat_destroy: 'plugin/mch/api/goods/cat-destroy',
        poster_config: 'plugin/mch/api/poster/config',
        poster_generate: 'plugin/mch/api/poster/generate',
        update_address: 'plugin/mch/api/order/update-address',
        goods_edit: 'plugin/mch/api/goods/edit',
        delivery_rules: 'plugin/mch/api/goods/free-delivery-rules',
        force_cancel: 'plugin/mch/api/order/force-cancel',
        shou_huo: 'plugin/mch/api/order/shou-huo',
    },
    app_admin: {
        index: 'api/admin/data-statistics/all_data',
        send: 'api/admin/order/send',
        goods: 'api/admin/goods/index',
        table: 'api/admin/data-statistics/table',
        express: 'api/order/express-list',
        goods_switch: 'api/admin/goods/switch-status',
        goods_destroy: 'api/admin/goods/destroy',
        comments: 'api/admin/order-comments/index',
        comments_top: 'api/admin/order-comments/update-top',
        comments_reply: 'api/admin/order-comments/reply',
        comments_show: 'api/admin/order-comments/show',
        user: 'api/admin/user/index',
        share: 'api/admin/share/index',
        clerk: 'api/admin/user/clerk',
        integral: 'api/admin/user/integral',
        balance: 'api/admin/user/balance',
        setting: 'api/admin/mall/setting',
        review: 'api/admin/review/index',
        tabs: 'api/admin/review/tabs',
        review_detail: 'api/admin/review/detail',
        review_switch: 'api/admin/review/switch-status',
        order: 'api/admin/order/index',
        update_price: 'api/admin/order/update-total-price',
        update_address: 'api/admin/order/update-address',
        address_list: 'api/admin/order/address-list',
        express_detail: 'api/order/express-detail',
        cancel: 'api/admin/order/cancel',
        force_cancel: 'api/admin/order/force-cancel',
        detail: 'api/admin/order/detail',
        refund: 'api/admin/order/refund',
        refund_handle: 'api/admin/order/refund-handle',
        edit: 'api/admin/goods/edit',
        service: 'api/admin/service/options',
        card: 'api/admin/card/options',
        cat: 'api/admin/cat/options',
        order_num: 'api/admin/order/order-num',
        print: 'api/admin/order/print',
        refund_address: 'api/admin/refund-address/index',
        refund_address_edit: 'api/admin/refund-address/edit',
        clerk_destroy: 'api/admin/user/clerk-destroy',
        address_destroy: 'api/admin/refund-address/destroy',
        clerk_edit: 'api/admin/user/clerk-edit',
        cash: 'api/admin/cash/list',
        verify: 'api/admin/cash/verify',
        user_cash: 'api/admin/cash/cash',
        postage: 'api/admin/postage-rule/all-list',
        delivery_rules: 'api/admin/free-delivery-rules/all-list',
        shou_huo: 'api/admin/order/shou-huo',
        delivery: 'api/admin/order/delivery',
        remark: 'api/admin/user/update-user-remark',
        remarkName: 'api/admin/user/update-user-remark-name',
        level: 'api/admin/user/update-user-level',
        goods_edit: 'api/admin/goods/edit',
        sellerRemark: 'api/admin/order/seller-remark',
        confirm: 'api/admin/order/confirm',
        queue: 'api/admin/review/queue-status',
        cash_save: 'api/admin/cash/save',
        goods_config: `/api/admin/goods/goods-config`,
        ecard_api_url: ``,
        refund_detail: 'api/admin/order/refund-detail',
        tabs_v2: 'api/admin/v2/review/tabs',
        review_v2: 'api/admin/v2/review/index',
        review_switch_v2: 'api/admin/v2/review/switch-status',
        cash_tabs: 'api/admin/cash/tabs',
        review_detail_v2: 'api/admin/v2/review/detail',
        cat_edit: 'api/admin/cat/edit',
        cat_destroy: 'api/admin/cat/destroy',
        pick_link: 'api/admin/cat/pick-link',
    },
    clerk: {
        info: 'plugin/clerk/api/index/clerk-info',
        order: 'plugin/clerk/api/index/order',
        my: 'plugin/clerk/api/index/my-order',
        detail: 'plugin/clerk/api/index/detail',
        card: 'plugin/clerk/api/index/card',
        my_card: 'plugin/clerk/api/index/my-card',
        card_detail: 'api/card/user-card-detail',
        statistics: 'plugin/clerk/api/index/statistics',
        qrcode_parameter: 'api/default/qr-code-parameter',
    },
    miaosha: {
        goods: 'plugin/miaosha/api/v2/goods/index',
        estimate: 'plugin/miaosha/api/v2/goods/estimate',
        goods_detail: 'plugin/miaosha/api/v2/goods/detail',
        cats: 'plugin/miaosha/api/v2/goods/cats',
        goods_info: 'plugin/miaosha/api/v2/goods/miaosha',
        order_preview: 'plugin/miaosha/api/v2/order/order-preview',
        order_submit: 'plugin/miaosha/api/v2/order/submit',
        today_goods: 'plugin/miaosha/api/v2/goods/today-miaosha',
        time_list: 'plugin/miaosha/api/v2/goods/time-list',
        add_cart: 'plugin/miaosha/api/v2/index/add-cart',
        cart_edit: 'plugin/miaosha/api/v2/index/cart-edit',
        poster: 'plugin/miaosha/api/v2/index/poster',
        poster_config: 'plugin/miaosha/api/v2/poster/config',
        poster_generate: 'plugin/miaosha/api/v2/poster/generate',
    },
    diy: {
        page_store: 'plugin/diy/api/page/store',
        receive: `plugin/diy/api/ad-award/receive`,
        coupon_receive: `plugin/diy/api/coupon/receive`,
    },
    vip_card: {
        index: 'plugin/vip_card/api/index/index',
        card: 'plugin/vip_card/api/index/card',
        order_preview: 'plugin/vip_card/api/order/preview',
        card_detail: 'plugin/vip_card/api/index/card-detail',
        setting: 'plugin/vip_card/api/index/setting',
        right: 'plugin/vip_card/api/index/right',
        index_right: 'plugin/vip_card/api/index/index-right',
        order_submit: 'plugin/vip_card/api/order/submit',
        pay_data: 'plugin/vip_card/api/order/pay-data',
        recommend: 'plugin/vip_card/api/index/recommend',
        poster: 'plugin/vip_card/api/index/poster'
    },
    advance: {
        goods: `plugin/advance/api/goods/index`,
        banner: `plugin/advance/api/goods/banner`,
        detail: `plugin/advance/api/goods/detail`,
        poster: `plugin/advance/api/goods/poster`,
        order_submit: `plugin/advance/api/order/advance`,
        order: `plugin/advance/api/order/my-advance`,
        order_preview: `plugin/advance/api/order/order-preview`,
        order_sub: `plugin/advance/api/order/order-submit`,
        order_detail: `plugin/advance/api/order/detail`,
        pay_data: `plugin/advance/api/order/pay-data`,
        get_payments: `plugin/advance/api/payment/get-payments`,
        goods_list: `plugin/advance/api/goods/index`,
        poster_config: 'plugin/advance/api/poster/config',
        poster_generate: 'plugin/advance/api/poster/generate',
    },
    gift: {
        order_submit: `/plugin/gift/api/gift-order/order-submit`,
        order_preview: `/plugin/gift/api/gift-order/order-preview`,
        config: `plugin/gift/api/gift-index/config`,
        pay_data: `plugin/gift/api/gift-order/pay-data`,
        gift: `plugin/gift/api/gift-index/gift`,
        poster: `plugin/gift/api/gift-index/poster`,
        send_list: `plugin/gift/api/order-list/send-list`,
        send_detail: `plugin/gift/api/order-list/send-detail`,
        turn: `plugin/gift/api/gift-order/turn`,
        get_turn: `plugin/gift/api/gift-order/get-turn`,
        my_join: `plugin/gift/api/gift-join/my-join`,
        my_win: `plugin/gift/api/gift-join/my-win`,
        win_detail: `plugin/gift/api/gift-join/win-detail`,
        join: `plugin/gift/api/gift-join/join`,
        join_status: `plugin/gift/api/gift-join/join-status`,
        join_detail: `plugin/gift/api/gift-join/join-detail`,
        preview: `plugin/gift/api/gift-order/gift-convert-preview`,
        convert: `plugin/gift/api/gift-order/gift-convert`,
        list: `plugin/gift/api/goods/goods-list`,
        goods: `plugin/gift/api/goods/detail`,
        cancel: `plugin/gift/api/gift-order/order-cancel`,
    },
    foot: {
        index: 'api/footprint/footprint',
        list: 'api/footprint/index',
        del: 'api/footprint/footprint-del',
    },
    quick_share: {
        poster_list: `plugin/quick_share/api/goods/poster-list`,
        goods: `plugin/quick_share/api/goods/index`,
        poster: `plugin/quick_share/api/goods/poster`,
        setting: `plugin/quick_share/api/setting/index`,
        poster_config: 'plugin/quick_share/api/poster/config',
        poster_generate: 'plugin/quick_share/api/poster/generate',
    },
    stock: {
        status: 'plugin/stock/api/index/apply-status',
        index: 'plugin/stock/api/index/index',
        setting: 'plugin/stock/api/index/setting',
        apply: 'plugin/stock/api/index/apply',
        clear: 'plugin/stock/api/index/clear-apply',
        cash: 'plugin/stock/api/index/cash',
        detail: 'plugin/stock/api/cash/index',
        level: 'plugin/stock/api/index/level',
        info: 'plugin/stock/api/index/info',
        up: 'plugin/stock/api/index/level-up',
        bonus: 'plugin/stock/api/cash/bonus-detail',
    },
    region: {
        status: 'plugin/region/api/index/apply-status',
        index: 'plugin/region/api/index/index',
        setting: 'plugin/region/api/index/setting',
        apply: 'plugin/region/api/index/apply',
        clear: 'plugin/region/api/index/clear-apply',
        cash: 'plugin/region/api/index/cash',
        detail: 'plugin/region/api/cash/index',
        level: 'plugin/region/api/index/level',
        info: 'plugin/region/api/index/info',
        level_up: 'plugin/region/api/index/level-up',
        clear_up: 'plugin/region/api/index/clear-level-up',
    },
    template: {
        template: `api/message/template`,
    },
    pick: {
        goods_list: `plugin/pick/api/index/goods-list`,
        goods: `/plugin/pick/api/index/goods-detail`,
        order_preview: `/plugin/pick/api/pick-order/order-preview`,
        order_submit: `/plugin/pick/api/pick-order/order-submit`,
        poster: 'plugin/pick/api/index/poster',
        add: `plugin/pick/api/cart/add`,
        list: 'plugin/pick/api/cart/list',
        edit: `plugin/pick/api/cart/edit`,
        delete: 'plugin/pick/api/cart/delete',
        poster_config: 'plugin/pick/api/poster/config',
        poster_generate: 'plugin/pick/api/poster/generate',
    },
    live: {
        index: 'api/live/index',
        playback: 'api/live/play-back',
    },
    ecard: {
        index: `plugin/ecard/api/index/index`
    },
    composition: {
        index: `plugin/composition/api/index/index`,
        config: `plugin/composition/api/index/config`,
        detail: `plugin/composition/api/index/detail`,
        composition_detail: `plugin/composition/api/index/composition-detail`,
        order_preview: `plugin/composition/api/index/order-preview`,
        order_submit: `plugin/composition/api/index/order-submit`,
    },
    favorite: {
        cats: `api/user/favorite-cats`,
        my_favorite_goods: 'api/user/my-new-favorite-goods'
    },
    flash_sale: {
        list: `/plugin/flash_sale/api/index/goods-list`,
        detail: `/plugin/flash_sale/api/index/goods-detail`,
        add_cart: `/plugin/flash_sale/api/index/add-cart`,
        poster_config: 'plugin/flash_sale/api/poster/config',
        poster_generate: 'plugin/flash_sale/api/poster/generate',
    },
    full_reduce: {
        list: `api/goods/full-reduce-goods-list`,
        index: `api/full-reduce/index`
    },
    community: {
        setting: `plugin/community/api/index/setting-data`, //设置
        index: `plugin/community/api/middleman/index`, //获取团长信息
        apply: `plugin/community/api/middleman/apply`, //申请成为团长
        apply_result: `plugin/community/api/middleman/apply-result`, //申请结果
        apply_pay: `plugin/community/api/middleman/apply-pay`, //获取支付ID
        activity_list: `plugin/community/api/activity/list`, //团长活动列表
        activity_detail: `plugin/community/api/activity/detail`, //团长活动详情
        activity_log: `plugin/community/api/activity/log`, //团长活动数据
        user_activity: `plugin/community/api/activity/activity`, //用户活动详情
        activity_goods: `plugin/community/api/activity/goods-list`, //用户活动详情
        middle_list: `plugin/community/api/order/middle-list`, //团长订单列表
        middle_detail: `plugin/community/api/order/middle-detail`, //团长订单详情
        order_list: `plugin/community/api/order/list`, //订单列表
        order_detail: `plugin/community/api/order/detail`, //订单详情
        poster: `plugin/community/api/activity/poster-config`, //活动海报
        middleman_list: `plugin/community/api/middleman/list`, //团长列表
        cats: `plugin/community/api/activity/goods-cats`, //团长列表
        cart_add: `plugin/community/api/cart/add`, //添加购物车
        cart_result: `plugin/community/api/cart/add-result`, //购物车添加结果
        cart: `plugin/community/api/cart/index`, //购物车列表
        cart_delete: `plugin/community/api/cart/delete`, //购物车删除
        cart_edit: `plugin/community/api/cart/edit`, //购物车批量操作
        goods_config: `plugin/community/api/goods/config`, //分享海报数据获取
        profit_list: `plugin/community/api/middleman/profit-list`, //利润列表
        profit_detail: `plugin/community/api/middleman/profit-detail`, //利润详情
        order_preview: `plugin/community/api/order/order-preview`, //下单预览
        order_submit: `plugin/community/api/order/order-submit`, //下单提交
        notice: `plugin/community/api/middleman/notice`, //下单提交
        list: `plugin/community/api/activity/activity-list`, //买家活动列表
        bind: `plugin/community/api/middleman/bind`, //下单提交
        goods_detail: `plugin/community/api/goods/detail`, //下单提交
        switch: `plugin/community/api/goods/switch`, //商品参加海报开关
        edit_address: `plugin/community/api/middleman/edit-address`, //商品参加海报开关
        confirm: `plugin/community/api/order/confirm`, //确认提货
        goods_generate: `plugin/community/api/goods/generate`,
        poster_share: `plugin/community/api/poster-share/generate`,
    },
    exchange: {
        list: `plugin/exchange/api/index/card-goods-list`,
        code: `plugin/exchange/api/index/get-code`,
        detail: `plugin/exchange/api/index/card-goods-detail`,
        me_list: `plugin/exchange/api/index/me-card-list`,
        me_detail: 'plugin/exchange/api/index/me-card-detail',
        order_preview: `plugin/exchange/api/index/e-order-preview`,
        order_submit: `plugin/exchange/api/index/e-order-submit`,
        exchange_preview: `plugin/exchange/api/index/c-order-preview`,
        exchange_submit: `plugin/exchange/api/index/c-order-submit`,
        setting: `plugin/exchange/api/index/setting`,
        log: `plugin/exchange/api/index/me-log`,
        info: 'plugin/exchange/api/index/show-info',
        unite: 'plugin/exchange/api/index/unite',
        covert: 'plugin/exchange/api/index/covert',
        log_detail: 'plugin/exchange/api/index/me-log-detail',
        qrcode: 'plugin/exchange/api/index/qrcode',
        poster_generate: 'plugin/exchange/api/poster/generate',
        poster_config: 'plugin/exchange/api/poster/config',
    },
    wholesale: {
        index: `plugin/wholesale/api/goods/index`,
        detail: `plugin/wholesale/api/goods/detail`,
        cart: 'plugin/wholesale/api/cart/add-cart',
        cats: 'plugin/wholesale/api/goods/cats',
        order_preview: 'plugin/wholesale/api/order/order-preview',
        order_submit: 'plugin/wholesale/api/order/order-submit',
        poster_config: 'plugin/wholesale/api/poster/config',
        poster_generate: 'plugin/wholesale/api/poster/generate'
    },
    teller: {
        code: 'plugin/teller/api/member/pay-code',
        search: 'plugin/teller/api/member/search-pay-code',
    },
    // #ifdef H5
    registered: {
        captcha: `site/pic-captcha`,
        sms: `plugin/mobile/api/passport/sms-captcha`,
        register: `plugin/mobile/api/passport/register`,
        register_data: `plugin/mobile/api/passport/register-data`,
        login: `api/passport/login`,
        password: `plugin/mobile/api/user/password`,
        nickName: `plugin/mobile/api/user/nickname`,
        validate: `plugin/mobile/api/user/validate-identity`,
        mobile: `plugin/mobile/api/user/mobile`,
        weChat: `plugin/wechat/api/passport/check`,
        avatar: `plugin/mobile/api/user/avatar`,
        url: `plugin/wechat/api/passport/login-url`,
        pay: `api/order/is-pay`,
        update: `plugin/wechat/api/passport/update`,
        logout: `plugin/mobile/api/passport/logout`
    }
    // #endif
};

export default apiUrl;