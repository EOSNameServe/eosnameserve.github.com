<template>
  <div >
    <h1>{{ msg }}</h1>
    <a >当前登录账号：{{ accountName + "@" + permission}}</a>
    <button v-show="hasLogin" class="logout" v-on:click="logout()">logout</button><br><br>
    <a>已绑定 URL/IP 地址：{{bindDappUrl}}</a><br>
    <button v-show="!hasLogin" class="inputBtn" v-on:click="login()">登录</button>
    <form>
      <input v-show="hasLogin" class="inputTx" v-model="accountName" type="text" name="accountName" placeholder="Input your EOS account"/><br>
      <input v-show="hasLogin" class="inputTx" v-model="dappUrl" name="accountName" placeholder="Input your website URL or IP address"/><br>
      <input v-show="hasLogin" class="inputBtn" v-on:click="bindAccount(accountName,dappUrl)" type="button" value="Bind"/><br>
      <input v-show="hasBind" class="inputBtn" v-on:click="unbind(accountName)" type="button" value="unbind"/><br>
    </form>
  </div>
</template>

<script>

import transcation from '@/HelperTrx'
import Eos from 'eosjs'

export default {
  name: 'Main',
  mounted(){
    ScatterJS.scatter.connect("ENSDapp").then(connected => {
      if(!connected) {
        return false;
      }
      const scatter = ScatterJS.scatter;
      const requiredFields = {accounts:[network]};
      scatter.getIdentity(requiredFields).then(identity => {
        window.identity = identity;
        if ((identity.accounts != null && identity.accounts != undefined)
              && identity.accounts.length > 0){
          this.hasLogin = true;
          this.accountName = identity.accounts[0].name 
          this.permission = identity.accounts[0].authority;
        } else {
          this.hasLogin = false;
          this.accountName = "";
        }
        console.log("getId success");
      })
      .then(result => {
        this.$http.post(this.url,{
          scope:this.accountName,
          code:"enserve.bank",
	        table:"enstables",
	        json:"true"
        }).then(response => {
          if(response.body.rows.length > 0){
            this.hasBind = true;
            this.bindDappUrl = response.body.rows[0].dapp
          } else {
            this.hasBind = false;
            this.bindDappUrl = "未绑定";
          }
        },response => {
          alert( JSON.stringify( response )  );
        });
      })
      .catch(error => {
        console.log("getId error: " + error);
        alert(JSON.stringify(error));
      });
    })
    .catch(error => {
      console.log("connect finish: " + error); 
      alert(JSON.stringify( error ));
    });
  },
  methods:{
      bindAccount:function(accountName,dappUrl){
        const eosOptions = { expireInSeconds:60 };
        const eos = scatter.eos(network, Eos, eosOptions);
        eos.transaction({
            actions: [{
                account: 'enserve.bank',
                name: 'binddapp',
                authorization: [{
                    actor: accountName,
                    permission: 'active',
                }],
                data: {
                    dapp: dappUrl,
                    account_name: accountName,
                },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 60,
        })
        .then(data => {
            console.log(data);
            this.bindDappUrl = dappUrl;
            this.hasBind = true;
            alert("Bind Success!!");
        })
        .catch( error => {
            console.log(error);
            alert(JSON.stringify(error));
        }); 
      },
      unbind:function(accountName){
        const eosOptions = { expireInSeconds:60 };
        const eos = scatter.eos(network, Eos, eosOptions);
        eos.transaction({
          actions: [{
            account: 'enserve.bank',
            name: 'unbind',
            authorization: [{
                actor: accountName,
                permission: 'active'
            }],
            data: {
                account_name: accountName
            },
          }]
        }, {
            blocksBehind: 3,
            expireSeconds: 60,
        }).then(data => {
            console.log(data);
            this.bindDappUrl = '';
            this.dappUrl = '';
            this.hasBind = false;
            alert("Unbind Success!!");
        }).catch(error => {
            console.log(error);
            alert(JSON.stringify( error ));
        }); 
      },
      logout:function(){
        scatter.forgetIdentity().then(() => {
          alert("Logout Success!!");
          this.accountName = '';
          this.dapp = '';
          this.permission = '';
          this.hasLogin = false;
          this.hasBind = false;
          this.bindDappUrl = '';
        }).catch(error => {
            console.log(error);
            alert(JSON.stringify( error ));
        });;
      },
      login:function(){
        ScatterJS.scatter.connect("ENSDapp").then(connected => {
          if(!connected) {
            return false;
          }
          const scatter = ScatterJS.scatter;
          const requiredFields = {accounts:[network]};
          scatter.getIdentity(requiredFields).then(identity => {
            window.identity = identity;
            if ((identity.accounts != null && identity.accounts != undefined)
                  && identity.accounts.length > 0){
              this.hasLogin = true;
              this.accountName = identity.accounts[0].name 
              this.permission = identity.accounts[0].authority;
            } else {
              this.hasLogin = false;
              this.accountName = "";
            }
            console.log("getId success");
          }).then(result => {
            this.$http.post(this.url,{
              scope:this.accountName,
              code:"enserve.bank",
              table:"enstables",
              json:"true"
            }).then(response => {
              if(response.body.rows.length > 0){
                this.hasBind = true;
                this.bindDappUrl = response.body.rows[0].dapp
              } else {
                this.hasBind = false;
                this.bindDappUrl = "未绑定";
              }
            },response => {
              alert( JSON.stringify( response )  );
            });
          }).catch(error => {
            console.log("getId error: " + error);
            alert(JSON.stringify(error));
          });
        }).catch(error => {
          console.log("connect finish: " + error); 
          alert(JSON.stringify( error ));
        });
      }
  },
  data () {
    return {
      msg: 'Welcome to EOS Name Serve!',
      accountName: '',
      dappUrl: '',
      bindDappUrl:'',
      permission: '',
      hasLogin: false,
      hasBind: false,
      url: 'http://openapi.eos.ren/v1/chain/get_table_rows',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
.logout{
  border: 1px solid rgb(75, 75, 75);
  border-radius: 5px;
}
.inputTx{
  border: 1px solid rgb(75, 75, 75);
  border-radius: 5px;
  padding: 10px;
  width: 240px;
  height: 20px;
  margin-top: 30px;
}
.inputTx:focus{
    border: 2px solid #333;
    outline: none;
}
.inputBtn{
  padding: 10px;
  margin-top: 30px;
  width: 300px;
  border: 1px solid rgb(75, 75, 75);
  border-radius: 5px;
}
.inputBtn:hover{
  background-color: rgb(107, 107, 107);
  color: rgb(255, 255, 255);
}
.inputBtn:focus{
  outline:none;
}
</style>
