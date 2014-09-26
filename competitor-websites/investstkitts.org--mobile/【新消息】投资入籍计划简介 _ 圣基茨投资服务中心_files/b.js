var BDBridge = window.BDBridge || (function(){

    var self;
    var CONFIG = {
        BD_BRIDGE_OPEN : 1,
        BD_BRIDGE_ROOT : "http://qiao.baidu.com/v3/"
    };

    document.cookie = 'VERSION=2,0,0,0';
    
    if ((CONFIG.BD_BRIDGE_OPEN == 1) && (typeof window["BD_BRIDGE_LOADED"] == "undefined")) {
        window["BD_BRIDGE_LOADED"] = 1;
        var script = document.createElement("script");
        script.type="text/javascript";
        script.charset = "UTF-8";
        script.src = CONFIG.BD_BRIDGE_ROOT + "asset/js/bw.js?v=20140116";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    
    return self = {
    
        BD_BRIDGE_OPEN : CONFIG.BD_BRIDGE_OPEN,
        BD_BRIDGE_ROOT : CONFIG.BD_BRIDGE_ROOT,
        BD_BRIDGE_RCV_ROOT : "http://r.qiao.baidu.com/",
        BD_BRIDGE_DATA : {mainid : "120382991", SITE_ID : "00c1d07e2af3eda92726d4efd60b254f", siteid : "3610098", userName: 'bj-investstkitts:judy'},
        OPEN_MODULAR : 11111,
                BD_BRIDGE_SPECIAL :  [] ,
        
                BD_BRIDGE_STYLE_ITEM : 
        [        {
            pageid : "0",
            
           
                        BD_BRIDGE_GROUP:  [ '0' - 0 , '1' - 0 , '2' - 0 , '3' - 0 , '4' - 0 ] ,
            
            BD_BRIDGE_ICON_CONFIG : {
                iconlvtype : "1" - 0,
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/style/991/120382991/1/iconbg.jpg",
                    bgcolor : "#81962b"
                },
                head : {
                    url    : "",
                    width  : "145" - 0,
                    height : "65" - 0
                },
                button : {
                    color : "#e4e4e4",
                    url   : "",
                    text  : "#7e7e7e"
                },
                flow     : "1" - 0,
                position : "2" - 0,
                special : "14"
            },
            BD_BRIDGE_INVITE_CONFIG : {
                on : "0" - 0,
                show : {
                    pos : "2" - 0,
                    width : "240" - 0,
                    height : "152" - 0,
                    font : "黑体",
                    fontsize : "18",
                    fontcolor : "#fcfcfc",
                    type : "0" - 0
                },
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/style/991/120382991/1/invitebg.jpg"
                },
                head : {
                    show : "0" - 0,
                    size : "1" - 0,
                    url  : "http://qiao.baidu.com/v3/res/invitehead/07_big.jpg"
                },
                text   : "",
                button : "#9ac31e",
                mode   : "0" - 0,
                special : "9" - 0
            },
            BD_BRIDGE_INVITE : {
                inviteauto : "1" - 0,
                invitemanual : "1" - 0,
                invitetype   : "1" - 0,
                inviterepeat : "1" - 0,
                invitetime   : "7" - 0,
                invitedisaptype : "0" - 0,
                invitedisaptime : "20" - 0
            },
            BD_BRIDGE_WEBIM : {
                webimopentype : "1" - 0,
                webimbgcolor  : "#d5d5d5",
                floatposition : "0" - 0,
                floatChatName : "2" - 0,
                floatCustomname : ""
            },
                        BD_BRIDGE_PIGEON_SOUL : {
                disableMess     : "0" - 0,
                messType        : 1,
                messFloatType   : "0" - 0,
                language        : "0" - 0,
                position        : "0" - 0,
                backgroundColor : "",
                backgroundUrl       : "http://qiao.baidu.com/v3/res/messbg/06.png", 
                messItemName    : "1",
                messItemPhone   : "1",
                messItemAddress : "2",
                messItemEmail   : "1",
                extraMessItems  :  [] 
            }
        }        ]
        
    }
   


})();
