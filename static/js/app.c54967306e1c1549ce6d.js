webpackJsonp([1],{0:function(e,t){},"05Ij":function(e,t){e.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},1:function(e,t){},"1QQ/":function(e,t){e.exports={_from:"bigi@^1.4.2",_id:"bigi@1.4.2",_inBundle:!1,_integrity:"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=",_location:"/bigi",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"bigi@^1.4.2",name:"bigi",escapedName:"bigi",rawSpec:"^1.4.2",saveSpec:null,fetchSpec:"^1.4.2"},_requiredBy:["/ecurve","/eosjs-ecc"],_resolved:"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz",_shasum:"9c665a95f88b8b08fc05cfd731f561859d725825",_spec:"bigi@^1.4.2",_where:"/Users/flyer/Documents/dev/blockchain/eos/dapp/ENS-web/EOSNameServe-Web/node_modules/eosjs-ecc",bugs:{url:"https://github.com/cryptocoinjs/bigi/issues"},bundleDependencies:!1,dependencies:{},deprecated:!1,description:"Big integers.",devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},homepage:"https://github.com/cryptocoinjs/bigi#readme",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],main:"./lib/index.js",name:"bigi",repository:{url:"git+https://github.com/cryptocoinjs/bigi.git",type:"git"},scripts:{"browser-test":"mochify --wd -R spec",coverage:"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info",jshint:"jshint --config jshint.json lib/*.js ; true",test:"_mocha -- test/*.js",unit:"mocha"},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},version:"1.4.2"}},2:function(e,t){},3:function(e,t){},4:function(e,t){},"6ZSt":function(e,t){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},Hujw:function(e,t){e.exports={get_actions:{params:{account_name:"account_name",pos:{type:"int32?",doc:"An absolute sequence positon -1 is the end/last action"},offset:{type:"int32?",doc:"The number of actions relative to pos, negative numbers return [pos-offset,pos), positive numbers return [pos,pos+offset)"}},results:{actions:"ordered_action_result[]",last_irreversible_block:"uint32",time_limit_exceeded_error:"bool?"},structs:[{name:"ordered_action_result",fields:{global_action_seq:"uint64",account_action_seq:"int32",block_num:"uint32",block_time:"block_timestamp_type",action_trace:"variant"}}]},get_transaction:{brief:"Retrieve a transaction from the blockchain.",params:{id:"transaction_id_type",block_num_hint:{type:"uint32?",default:0,doc:"A non-zero block number allows shorter transaction IDs (8 hex, 4 bytes)"}},results:{id:"transaction_id_type",trx:"variant",block_time:"block_timestamp_type",block_num:"uint32",last_irreversible_block:"uint32",traces:"variant[]"}},get_key_accounts:{params:{public_key:"public_key_type"},results:{account_names:"account_name[]"}},get_controlled_accounts:{params:{controlling_account:"account_name"},results:{controlled_accounts:"account_name[]"}}}},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},s,!1,function(e){a("gsu9")},null,null).exports,c=a("/ocq"),o=a("8+8L"),r=a("mvHQ"),f=a.n(r),m=(a("iqEf"),a("rViV")),p=a.n(m),_={name:"Main",mounted:function(){var e=this;ScatterJS.scatter.connect("ENSDapp").then(function(t){if(!t)return!1;var a=ScatterJS.scatter,n={accounts:[network]};a.getIdentity(n).then(function(t){window.identity=t,null!=t.accounts&&void 0!=t.accounts&&t.accounts.length>0?(e.hasLogin=!0,e.accountName=t.accounts[0].name,e.permission=t.accounts[0].authority):(e.hasLogin=!1,e.accountName=""),console.log("getId success")}).then(function(t){e.$http.post("https://openapi.eos.ren/v1/chain/get_table_rows",{scope:e.accountName,code:"enserve.bank",table:"enstables",json:"true"}).then(function(t){t.body.rows.length>0?(e.hasBind=!0,e.bindDappUrl=t.body.rows[0].dapp):(e.hasBind=!1,e.bindDappUrl="未绑定")}).catch(function(e){console.log("response error: "+e),alert("responese error: "+f()(response))})}).catch(function(e){console.log("getId error: "+e),alert("getId error: "+f()(e))})}).catch(function(e){console.log("connect finish: "+e),alert("connect finish:"+f()(e))})},methods:{bindAccount:function(e,t){var a=this;scatter.eos(network,p.a,{expireInSeconds:60}).transaction({actions:[{account:"enserve.bank",name:"binddapp",authorization:[{actor:e,permission:"active"}],data:{dapp:t,account_name:e}}]},{blocksBehind:3,expireSeconds:60}).then(function(e){console.log(e),a.bindDappUrl=t,a.hasBind=!0,alert("Bind Success!!")}).catch(function(e){console.log(e),alert(f()(e))})},unbind:function(e){var t=this;scatter.eos(network,p.a,{expireInSeconds:60}).transaction({actions:[{account:"enserve.bank",name:"unbind",authorization:[{actor:e,permission:"active"}],data:{account_name:e}}]},{blocksBehind:3,expireSeconds:60}).then(function(e){console.log(e),t.bindDappUrl="",t.dappUrl="",t.hasBind=!1,alert("Unbind Success!!")}).catch(function(e){console.log(e),alert(f()(e))})},logout:function(){var e=this;scatter.forgetIdentity().then(function(){alert("Logout Success!!"),e.accountName="",e.dapp="",e.permission="",e.hasLogin=!1,e.hasBind=!1,e.bindDappUrl=""}).catch(function(e){console.log(e),alert(f()(e))})},login:function(){var e=this;ScatterJS.scatter.connect("ENSDapp").then(function(t){if(!t)return!1;var a=ScatterJS.scatter,n={accounts:[network]};a.getIdentity(n).then(function(t){window.identity=t,null!=t.accounts&&void 0!=t.accounts&&t.accounts.length>0?(e.hasLogin=!0,e.accountName=t.accounts[0].name,e.permission=t.accounts[0].authority):(e.hasLogin=!1,e.accountName=""),console.log("getId success")}).then(function(t){e.$http.post(e.url,{scope:e.accountName,code:"enserve.bank",table:"enstables",json:"true"}).then(function(t){t.body.rows.length>0?(e.hasBind=!0,e.bindDappUrl=t.body.rows[0].dapp):(e.hasBind=!1,e.bindDappUrl="未绑定")},function(e){alert(f()(e))})}).catch(function(e){console.log("getId error: "+e),alert(f()(e))})}).catch(function(e){console.log("connect finish: "+e),alert(f()(e))})}},data:function(){return{msg:"Welcome to EOS Name Serve!",accountName:"",dappUrl:"",bindDappUrl:"",permission:"",hasLogin:!1,hasBind:!1}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("a",[e._v("当前登录账号："+e._s(e.accountName+"@"+e.permission))]),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:e.hasLogin,expression:"hasLogin"}],staticClass:"logout",on:{click:function(t){e.logout()}}},[e._v("logout")]),a("br"),a("br"),e._v(" "),a("a",[e._v("已绑定 URL/IP 地址："+e._s(e.bindDappUrl))]),a("br"),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!e.hasLogin,expression:"!hasLogin"}],staticClass:"inputBtn",on:{click:function(t){e.login()}}},[e._v("登录")]),e._v(" "),a("form",[a("input",{directives:[{name:"show",rawName:"v-show",value:e.hasLogin,expression:"hasLogin"},{name:"model",rawName:"v-model",value:e.accountName,expression:"accountName"}],staticClass:"inputTx",attrs:{type:"text",name:"accountName",placeholder:"Input your EOS account"},domProps:{value:e.accountName},on:{input:function(t){t.target.composing||(e.accountName=t.target.value)}}}),a("br"),e._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:e.hasLogin,expression:"hasLogin"},{name:"model",rawName:"v-model",value:e.dappUrl,expression:"dappUrl"}],staticClass:"inputTx",attrs:{name:"accountName",placeholder:"Input your website URL or IP address"},domProps:{value:e.dappUrl},on:{input:function(t){t.target.composing||(e.dappUrl=t.target.value)}}}),a("br"),e._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:e.hasLogin,expression:"hasLogin"}],staticClass:"inputBtn",attrs:{type:"button",value:"Bind"},on:{click:function(t){e.bindAccount(e.accountName,e.dappUrl)}}}),a("br"),e._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:e.hasBind,expression:"hasBind"}],staticClass:"inputBtn",attrs:{type:"button",value:"unbind"},on:{click:function(t){e.unbind(e.accountName)}}}),a("br")])])},staticRenderFns:[]};var d=a("VU/8")(_,u,!1,function(e){a("z5jv")},"data-v-856a24da",null).exports,l=a("JRkP"),y=a.n(l),b=a("hu3b"),h=a.n(b);y.a.plugins(new h.a),n.a.use(c.a),n.a.use(o.a);var g=new c.a({routes:[{path:"/",name:"Main",component:d}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:g,components:{App:i},template:"<App/>"})},NoFI:function(e,t){e.exports={version:"eosio::abi/1.0",types:[{new_type_name:"account_name",type:"name"},{new_type_name:"permission_name",type:"name"},{new_type_name:"action_name",type:"name"},{new_type_name:"transaction_id_type",type:"checksum256"},{new_type_name:"weight_type",type:"uint16"}],____comment:"eosio.bios structs: set_account_limits, setpriv, set_global_limits, producer_key, set_producers, require_auth are provided so abi available for deserialization in future.",structs:[{name:"permission_level",base:"",fields:[{name:"actor",type:"account_name"},{name:"permission",type:"permission_name"}]},{name:"key_weight",base:"",fields:[{name:"key",type:"public_key"},{name:"weight",type:"weight_type"}]},{name:"bidname",base:"",fields:[{name:"bidder",type:"account_name"},{name:"newname",type:"account_name"},{name:"bid",type:"asset"}]},{name:"permission_level_weight",base:"",fields:[{name:"permission",type:"permission_level"},{name:"weight",type:"weight_type"}]},{name:"wait_weight",base:"",fields:[{name:"wait_sec",type:"uint32"},{name:"weight",type:"weight_type"}]},{name:"authority",base:"",fields:[{name:"threshold",type:"uint32"},{name:"keys",type:"key_weight[]"},{name:"accounts",type:"permission_level_weight[]"},{name:"waits",type:"wait_weight[]"}]},{name:"newaccount",base:"",fields:[{name:"creator",type:"account_name"},{name:"name",type:"account_name"},{name:"owner",type:"authority"},{name:"active",type:"authority"}]},{name:"setcode",base:"",fields:[{name:"account",type:"account_name"},{name:"vmtype",type:"uint8"},{name:"vmversion",type:"uint8"},{name:"code",type:"bytes"}]},{name:"setabi",base:"",fields:[{name:"account",type:"account_name"},{name:"abi",type:"bytes"}]},{name:"updateauth",base:"",fields:[{name:"account",type:"account_name"},{name:"permission",type:"permission_name"},{name:"parent",type:"permission_name"},{name:"auth",type:"authority"}]},{name:"deleteauth",base:"",fields:[{name:"account",type:"account_name"},{name:"permission",type:"permission_name"}]},{name:"linkauth",base:"",fields:[{name:"account",type:"account_name"},{name:"code",type:"account_name"},{name:"type",type:"action_name"},{name:"requirement",type:"permission_name"}]},{name:"unlinkauth",base:"",fields:[{name:"account",type:"account_name"},{name:"code",type:"account_name"},{name:"type",type:"action_name"}]},{name:"canceldelay",base:"",fields:[{name:"canceling_auth",type:"permission_level"},{name:"trx_id",type:"transaction_id_type"}]},{name:"onerror",base:"",fields:[{name:"sender_id",type:"uint128"},{name:"sent_trx",type:"bytes"}]},{name:"buyrambytes",base:"",fields:[{name:"payer",type:"account_name"},{name:"receiver",type:"account_name"},{name:"bytes",type:"uint32"}]},{name:"sellram",base:"",fields:[{name:"account",type:"account_name"},{name:"bytes",type:"uint64"}]},{name:"buyram",base:"",fields:[{name:"payer",type:"account_name"},{name:"receiver",type:"account_name"},{name:"quant",type:"asset"}]},{name:"delegatebw",base:"",fields:[{name:"from",type:"account_name"},{name:"receiver",type:"account_name"},{name:"stake_net_quantity",type:"asset"},{name:"stake_cpu_quantity",type:"asset"},{name:"transfer",type:"bool"}]},{name:"undelegatebw",base:"",fields:[{name:"from",type:"account_name"},{name:"receiver",type:"account_name"},{name:"unstake_net_quantity",type:"asset"},{name:"unstake_cpu_quantity",type:"asset"}]},{name:"refund",base:"",fields:[{name:"owner",type:"account_name"}]},{name:"delegated_bandwidth",base:"",fields:[{name:"from",type:"account_name"},{name:"to",type:"account_name"},{name:"net_weight",type:"asset"},{name:"cpu_weight",type:"asset"}]},{name:"user_resources",base:"",fields:[{name:"owner",type:"account_name"},{name:"net_weight",type:"asset"},{name:"cpu_weight",type:"asset"},{name:"ram_bytes",type:"uint64"}]},{name:"total_resources",base:"",fields:[{name:"owner",type:"account_name"},{name:"net_weight",type:"asset"},{name:"cpu_weight",type:"asset"},{name:"ram_bytes",type:"uint64"}]},{name:"refund_request",base:"",fields:[{name:"owner",type:"account_name"},{name:"request_time",type:"time_point_sec"},{name:"net_amount",type:"asset"},{name:"cpu_amount",type:"asset"}]},{name:"blockchain_parameters",base:"",fields:[{name:"max_block_net_usage",type:"uint64"},{name:"target_block_net_usage_pct",type:"uint32"},{name:"max_transaction_net_usage",type:"uint32"},{name:"base_per_transaction_net_usage",type:"uint32"},{name:"net_usage_leeway",type:"uint32"},{name:"context_free_discount_net_usage_num",type:"uint32"},{name:"context_free_discount_net_usage_den",type:"uint32"},{name:"max_block_cpu_usage",type:"uint32"},{name:"target_block_cpu_usage_pct",type:"uint32"},{name:"max_transaction_cpu_usage",type:"uint32"},{name:"min_transaction_cpu_usage",type:"uint32"},{name:"max_transaction_lifetime",type:"uint32"},{name:"deferred_trx_expiration_window",type:"uint32"},{name:"max_transaction_delay",type:"uint32"},{name:"max_inline_action_size",type:"uint32"},{name:"max_inline_action_depth",type:"uint16"},{name:"max_authority_depth",type:"uint16"}]},{name:"eosio_global_state",base:"blockchain_parameters",fields:[{name:"max_ram_size",type:"uint64"},{name:"total_ram_bytes_reserved",type:"uint64"},{name:"total_ram_stake",type:"int64"},{name:"last_producer_schedule_update",type:"block_timestamp_type"},{name:"last_pervote_bucket_fill",type:"uint64"},{name:"pervote_bucket",type:"int64"},{name:"perblock_bucket",type:"int64"},{name:"total_unpaid_blocks",type:"uint32"},{name:"total_activated_stake",type:"int64"},{name:"thresh_activated_stake_time",type:"uint64"},{name:"last_producer_schedule_size",type:"uint16"},{name:"total_producer_vote_weight",type:"float64"},{name:"last_name_close",type:"block_timestamp_type"}]},{name:"producer_info",base:"",fields:[{name:"owner",type:"account_name"},{name:"total_votes",type:"float64"},{name:"producer_key",type:"public_key"},{name:"is_active",type:"bool"},{name:"url",type:"string"},{name:"unpaid_blocks",type:"uint32"},{name:"last_claim_time",type:"uint64"},{name:"location",type:"uint16"}]},{name:"regproducer",base:"",fields:[{name:"producer",type:"account_name"},{name:"producer_key",type:"public_key"},{name:"url",type:"string"},{name:"location",type:"uint16"}]},{name:"unregprod",base:"",fields:[{name:"producer",type:"account_name"}]},{name:"setram",base:"",fields:[{name:"max_ram_size",type:"uint64"}]},{name:"regproxy",base:"",fields:[{name:"proxy",type:"account_name"},{name:"isproxy",type:"bool"}]},{name:"voteproducer",base:"",fields:[{name:"voter",type:"account_name"},{name:"proxy",type:"account_name"},{name:"producers",type:"account_name[]"}]},{name:"voter_info",base:"",fields:[{name:"owner",type:"account_name"},{name:"proxy",type:"account_name"},{name:"producers",type:"account_name[]"},{name:"staked",type:"int64"},{name:"last_vote_weight",type:"float64"},{name:"proxied_vote_weight",type:"float64"},{name:"is_proxy",type:"bool"}]},{name:"claimrewards",base:"",fields:[{name:"owner",type:"account_name"}]},{name:"setpriv",base:"",fields:[{name:"account",type:"account_name"},{name:"is_priv",type:"int8"}]},{name:"rmvproducer",base:"",fields:[{name:"producer",type:"account_name"}]},{name:"set_account_limits",base:"",fields:[{name:"account",type:"account_name"},{name:"ram_bytes",type:"int64"},{name:"net_weight",type:"int64"},{name:"cpu_weight",type:"int64"}]},{name:"set_global_limits",base:"",fields:[{name:"cpu_usec_per_period",type:"int64"}]},{name:"producer_key",base:"",fields:[{name:"producer_name",type:"account_name"},{name:"block_signing_key",type:"public_key"}]},{name:"set_producers",base:"",fields:[{name:"schedule",type:"producer_key[]"}]},{name:"require_auth",base:"",fields:[{name:"from",type:"account_name"}]},{name:"setparams",base:"",fields:[{name:"params",type:"blockchain_parameters"}]},{name:"connector",base:"",fields:[{name:"balance",type:"asset"},{name:"weight",type:"float64"}]},{name:"exchange_state",base:"",fields:[{name:"supply",type:"asset"},{name:"base",type:"connector"},{name:"quote",type:"connector"}]},{name:"namebid_info",base:"",fields:[{name:"newname",type:"account_name"},{name:"high_bidder",type:"account_name"},{name:"high_bid",type:"int64"},{name:"last_bid_time",type:"uint64"}]}],actions:[{name:"newaccount",type:"newaccount",ricardian_contract:""},{name:"setcode",type:"setcode",ricardian_contract:""},{name:"setabi",type:"setabi",ricardian_contract:""},{name:"updateauth",type:"updateauth",ricardian_contract:""},{name:"deleteauth",type:"deleteauth",ricardian_contract:""},{name:"linkauth",type:"linkauth",ricardian_contract:""},{name:"unlinkauth",type:"unlinkauth",ricardian_contract:""},{name:"canceldelay",type:"canceldelay",ricardian_contract:""},{name:"onerror",type:"onerror",ricardian_contract:""},{name:"buyrambytes",type:"buyrambytes",ricardian_contract:""},{name:"buyram",type:"buyram",ricardian_contract:""},{name:"sellram",type:"sellram",ricardian_contract:""},{name:"delegatebw",type:"delegatebw",ricardian_contract:""},{name:"undelegatebw",type:"undelegatebw",ricardian_contract:""},{name:"refund",type:"refund",ricardian_contract:""},{name:"regproducer",type:"regproducer",ricardian_contract:""},{name:"setram",type:"setram",ricardian_contract:""},{name:"bidname",type:"bidname",ricardian_contract:""},{name:"unregprod",type:"unregprod",ricardian_contract:""},{name:"regproxy",type:"regproxy",ricardian_contract:""},{name:"voteproducer",type:"voteproducer",ricardian_contract:""},{name:"claimrewards",type:"claimrewards",ricardian_contract:""},{name:"setpriv",type:"setpriv",ricardian_contract:""},{name:"rmvproducer",type:"rmvproducer",ricardian_contract:""},{name:"setalimits",type:"set_account_limits",ricardian_contract:""},{name:"setglimits",type:"set_global_limits",ricardian_contract:""},{name:"setprods",type:"set_producers",ricardian_contract:""},{name:"reqauth",type:"require_auth",ricardian_contract:""},{name:"setparams",type:"setparams",ricardian_contract:""}],tables:[{name:"producers",type:"producer_info",index_type:"i64",key_names:["owner"],key_types:["uint64"]},{name:"global",type:"eosio_global_state",index_type:"i64",key_names:[],key_types:[]},{name:"voters",type:"voter_info",index_type:"i64",key_names:["owner"],key_types:["account_name"]},{name:"userres",type:"user_resources",index_type:"i64",key_names:["owner"],key_types:["uint64"]},{name:"delband",type:"delegated_bandwidth",index_type:"i64",key_names:["to"],key_types:["uint64"]},{name:"rammarket",type:"exchange_state",index_type:"i64",key_names:["supply"],key_types:["uint64"]},{name:"refunds",type:"refund_request",index_type:"i64",key_names:["owner"],key_types:["uint64"]},{name:"namebids",type:"namebid_info",index_type:"i64",key_names:["newname"],key_types:["account_name"]}],ricardian_clauses:[],abi_extensions:[]}},OPeQ:function(e,t){e.exports={version:"eosio::abi/1.0",types:[],structs:[{name:"nonce",base:"",fields:[{name:"value",type:"string"}]}],actions:[{name:"nonce",type:"nonce",ricardian_contract:""}],tables:[],ricardian_clauses:[],abi_extensions:[]}},"U+8V":function(e,t){e.exports={version:"eosio::abi/1.0",types:[{new_type_name:"account_name",type:"name"}],structs:[{name:"transfer",base:"",fields:[{name:"from",type:"account_name"},{name:"to",type:"account_name"},{name:"quantity",type:"asset"},{name:"memo",type:"string"}]},{name:"create",base:"",fields:[{name:"issuer",type:"account_name"},{name:"maximum_supply",type:"asset"}]},{name:"issue",base:"",fields:[{name:"to",type:"account_name"},{name:"quantity",type:"asset"},{name:"memo",type:"string"}]},{name:"account",base:"",fields:[{name:"balance",type:"asset"}]},{name:"currency_stats",base:"",fields:[{name:"supply",type:"asset"},{name:"max_supply",type:"asset"},{name:"issuer",type:"account_name"}]}],actions:[{name:"transfer",type:"transfer",ricardian_contract:""},{name:"issue",type:"issue",ricardian_contract:""},{name:"create",type:"create",ricardian_contract:""}],tables:[{name:"accounts",type:"account",index_type:"i64",key_names:["currency"],key_types:["uint64"]},{name:"stat",type:"currency_stats",index_type:"i64",key_names:["currency"],key_types:["uint64"]}],ricardian_clauses:[],abi_extensions:[]}},cB4U:function(e,t){e.exports={name:"uint64",checksum160:"fixed_bytes20",checksum256:"fixed_bytes32",checksum512:"fixed_bytes64",signature:"fixed_bytes65",public_key:"fixed_bytes33",message_type:"fixed_string16",symbol:"uint64",symbol_code:"uint64",field_name:"string",account_name:"name",permission_name:"name",type_name:"string",token_name:"name",table_name:"name",scope_name:"name",action_name:"name",time_point:"int64",time_point_sec:"time",timestamp:"uint32",block_timestamp_type:"timestamp",block_id:"fixed_bytes32",checksum_type:"fixed_bytes32",checksum256_type:"fixed_bytes32",checksum512_type:"fixed_bytes64",checksum160_type:"fixed_bytes20",sha256:"fixed_bytes32",sha512:"fixed_bytes64",sha160:"fixed_bytes20",weight_type:"uint16",block_num_type:"uint32",share_type:"int64",digest_type:"checksum_type",context_free_type:"bytes",unsigned_int:"varuint32",bool:"uint8",extensions_type:{base:"",fields:{type:"uint16",data:"bytes"}},transaction_header:{base:"",fields:{expiration:"time",ref_block_num:"uint16",ref_block_prefix:"uint32",max_net_usage_words:"unsigned_int",max_cpu_usage_ms:"uint8",delay_sec:"unsigned_int"}},transaction:{base:"transaction_header",fields:{context_free_actions:"action[]",actions:"action[]",transaction_extensions:"extensions_type[]"}},signed_transaction:{base:"transaction",fields:{signatures:"signature[]",context_free_data:"bytes[]"}},fields:"field_def[]",field_def:{fields:{name:"field_name",type:"type_name"}},asset:{fields:{amount:"share_type",sym:"symbol"}},producer_key:{fields:{producer_name:"account_name",block_signing_key:"public_key"}},producer_schedule:{fields:{version:"uint32",producers:"producer_key[]"}},chain_config:{fields:{target_block_size:"uint32",max_block_size:"uint32",target_block_acts_per_scope:"uint32",max_block_acts_per_scope:"uint32",target_block_acts:"uint32",max_block_acts:"uint32",real_threads:"uint64",max_storage_size:"uint64",max_transaction_lifetime:"uint32",max_authority_depth:"uint16",max_transaction_exec_time:"uint32",max_inline_depth:"uint16",max_inline_action_size:"uint32",max_generated_transaction_size:"uint32"}},type_def:{base:"",fields:{new_type_name:"type_name",type:"type_name"}},struct_def:{base:"",fields:{name:"type_name",base:"type_name",fields:"field_def[]"}},clause_pair:{base:"",fields:{id:"string",body:"string"}},error_message:{base:"",fields:{error_code:"uint64",error_msg:"string"}},abi_def:{base:"",fields:{version:"string",types:"type_def[]",structs:"struct_def[]",actions:"action_def[]",tables:"table_def[]",ricardian_clauses:"clause_pair[]",error_messages:"error_message[]",abi_extensions:"extensions_type[]"}},table_def:{base:"",fields:{name:"table_name",index_type:"type_name",key_names:"field_name[]",key_types:"type_name[]",type:"type_name"}},permission_level:{base:"",fields:{actor:"account_name",permission:"permission_name"}},action:{base:"",fields:{account:"account_name",name:"action_name",authorization:"permission_level[]",data:"bytes"}},action_def:{base:"",fields:{name:"action_name",type:"type_name",ricardian_contract:"string"}},block_header:{base:"",fields:{previous:"checksum256",timestamp:"timestamp",transaction_mroot:"checksum256",action_mroot:"checksum256",block_mroot:"checksum256",producer:"account_name",schedule_version:"uint32",new_producers:"producer_schedule?"}},packed_transaction:{fields:{signatures:"signature[]",compression:"uint8",packed_context_free_data:"bytes",packed_trx:"bytes"}}}},gsu9:function(e,t){},h61r:function(e,t){e.exports={get_info:{brief:"Return general network information.",params:null,results:"string"},get_account:{brief:"Fetch a blockchain account",params:{account_name:"name"},results:"string"},get_code:{brief:"Fetch smart contract code",params:{account_name:"name",code_as_wasm:{type:"bool",default:!1}},results:{account_name:"name",wast:"string",wasm:"string",code_hash:"sha256",abi:"optional<abi_def>"}},get_code_hash:{brief:"",params:{account_name:"name"},results:{account_name:"name",code_hash:"sha256"}},get_abi:{params:{account_name:"name"},results:{account_name:"name",abi:"abi_def?"}},get_raw_code_and_abi:{params:{account_name:"name"},results:{account_name:"name",wasm:"bytes",abi:"abi_def?"}},abi_json_to_bin:{brief:"Manually serialize json into binary hex.  The binayargs is usually stored in Action.data.",params:{code:"name",action:"name",args:"bytes"},results:{binargs:"bytes"}},abi_bin_to_json:{brief:"Convert bin hex back into Abi json definition.",params:{code:"name",action:"name",binargs:"bytes"},results:{args:"bytes"}},get_required_keys:{params:{transaction:"transaction",available_keys:"set[public_key]"},results:"Set[public_key]"},get_block:{brief:"Fetch a block from the blockchain.",params:{block_num_or_id:"string"},results:"variant",errors:{"unknown block":null}},get_block_header_state:{brief:"Fetch the minimum state necessary to validate transaction headers.",params:{block_num_or_id:"string"},results:"string",errors:{block_id_type_exception:"Invalid block ID",unknown_block_exception:"Could not find reversible block"}},get_table_rows:{brief:"Fetch smart contract data from an account.",params:{json:{type:"bool",default:!1},code:"name",scope:"string",table:"name",table_key:"string",lower_bound:{type:"string",default:"0"},upper_bound:{type:"string",default:"-1"},limit:{type:"uint32",default:"10"},key_type:{type:"string",doc:"The key type of --index, primary only supports (i64), all others support (i64, i128, i256, float64, float128). Special type 'name' indicates an account name."},index_position:{type:"string",doc:"1 - primary (first), 2 - secondary index (in order defined by multi_index), 3 - third index, etc"}},results:{rows:{type:"vector",doc:"One row per item, either encoded as hex String or JSON object"},more:{type:"bool",doc:"True if last element in data is not the end and sizeof data() < limit"}}},get_currency_balance:{params:{code:"name",account:"name",symbol:"optional<string>"},results:"asset[]"},get_currency_stats:{params:{code:"name",symbol:"string"},results:{supply:"asset",max_supply:"asset",issuer:"account_name"}},get_producers:{brief:"Fetch smart contract data from producer.",params:{json:{type:"bool",default:!1},lower_bound:"string",limit:{type:"uint32",default:"50"}},results:{rows:{type:"vector",doc:"one row per item, either encoded as hex String or JSON object"},total_producer_vote_weight:{type:"double",doc:"total vote"},more:{type:"string",doc:"fill lower_bound with this value to fetch more rows"}}},get_producer_schedule:{brief:"",params:{},results:{vector:"proposed"}},get_scheduled_transactions:{brief:"",params:{json:{type:"bool",default:!1},lower_bound:{type:"string",doc:"timestamp OR transaction ID"},limit:{type:"uint32",default:"50"}},results:{vector:"transactions",more:{type:"string",doc:"fill lower_bound with this to fetch next set of transactions"}}},push_block:{brief:"Append a block to the chain database.",params:{block:"signed_block"},results:null},push_transaction:{brief:"Attempts to push the transaction into the pending queue.",params:{signed_transaction:"signed_transaction"},results:{transaction_id:"fixed_bytes32",processed:"bytes"}},push_transactions:{brief:"Attempts to push transactions into the pending queue.",params:{"signed_transaction[]":"signed_transaction"},results:"vector[push_transaction.results]"}}},iqEf:function(e,t){window.network={blockchain:"eos",protocol:"https",host:"node.eosflare.io",port:"",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},z5jv:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c54967306e1c1549ce6d.js.map