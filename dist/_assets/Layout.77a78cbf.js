let e=document.createElement("style");e.innerHTML=".background{position:absolute;width:100%;height:100%;overflow:hidden;top:0;z-index:-1}.background .background-container{position:relative;width:1200px;height:1200px;margin-left:-600px;top:-450px;left:50%;transform:translate3d(-50%,0,0);background:#5e6ce7;border-radius:50%}@media (max-width:1024px){.background{overflow:hidden}.background .background-container{top:-650px;left:50%;width:1600px;min-width:1600px;margin-left:auto}}",document.head.appendChild(e);import{o as t,c as l,d as s,b as a,f as r,v as n,g as o,F as i,e as c,h as d}from"./index.9580c608.js";import{_ as x}from"./logo.7a017828.js";var h={data:()=>({download:0,showMenu:!1}),methods:{downloadAndroid(){1!=this.download&&(this.download=1,fetch("https://snsmax.bytegem.net/api2/android-version").then(e=>e.json()).then(e=>e.data).then(e=>e.apk).then(e=>{this.download=0,open(e)}).catch(()=>{alert("获取安装包失败"),this.download=0}))},menuHandler(){this.showMenu=!this.showMenu}}};const m={class:"min-h-screen"},f=s("div",{class:"background"},[s("div",{class:"background-container"})],-1),g={class:"flex items-center justify-between flex-wrap p-6 z-10 relative"},w=s("div",{class:"flex items-center flex-shrink-0 text-white mr-6"},[s("img",{src:x,class:"fill-current h-8 w-8 mr-2 rounded-full"}),s("span",{class:"font-semibold text-xl tracking-tight"},"SNS Max")],-1),p={class:"block sm:hidden"},b=s("svg",{class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[s("title",null,"Menu"),s("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})],-1),u=s("div",{class:"w-full flex-grow sm:flex sm:items-center sm:w-auto hidden"},[s("div",{class:"text-sm flex-grow flex justify-end"},[s("a",{href:"https://bytegem.net/",class:"block inline-block mt-0 text-black hover:text-gray-700 mr-4 font-bold"}," Byte Gem "),s("a",{href:"https://bytegem.net/products/fans/",target:"_blank",rel:"noopener noreferrer",class:"block inline-block mt-0 text-black hover:text-gray-700 mr-4 font-bold"}," Fans Project ")])],-1),v={class:"w-full block flex-grow"},k=s("div",{class:"text-sm"},[s("a",{href:"https://bytegem.org/",class:"block mt-4  text-white hover:text-gray-200 mr-4 font-bold"}," Byte Gem "),s("a",{href:"https://bytegem.net/products/fans/",target:"_blank",rel:"noopener noreferrer",class:"block mt-4 text-white hover:text-gray-200 mr-4 font-bold"}," Fans Project ")],-1),y={class:"flex flex-col lg:flex-row lg:items-center"},j={class:"w-full"},M=s("h1",{class:"text-4xl text-white text-center px-6 lg:px-20"},"精致的思考，值得分享！看看身边有多少有趣的灵魂",-1),_=s("p",{class:"text-base text-gray-300 text-center px-6 lg:px-20 pt-6 lh:pt-20"},"SNS Max 是一个有趣的社交程序，以动态为核心。用户分享自己的身边动态。首页可以按照最新全站动态进行排序查看，还可以看附近的人都在分享什么。",-1),S=s("p",{class:"text-base text-gray-300 text-center px-6 lg:px-20 pt-6 lh:pt-20"},"现在下载 SNS Max 体验程序试试吧",-1),H={class:"flex flex-col sm:flex-row justify-center items-center pt-12"},z=s("a",{class:"inline-flex bg-black text-white w-64 sm:w-48 rounded-full h-16 items-center shadow-md",href:"https://testflight.apple.com/join/wkahVf0E"},[s("img",{class:"w-12 h-12 flex-shrink-0",src:"/_assets/ios.42cf356a.svg"}),s("div",{class:"text-white text-xs text-center w-full leading-4 mr-6"},[c(" Download app for "),s("span",{class:"text-xl block"},"iOS")])],-1),B=s("div",{class:"h-8"},null,-1),A=s("img",{class:"w-6 h-6 mx-3 flex-shrink-0",src:"/_assets/android.d2f57168.svg"},null,-1),C={key:0,class:"text-white text-xs text-center w-full leading-4 mr-6"},F={key:1,class:"text-white text-xs text-center w-full leading-4 mr-6"},G=c(" Download app for "),N=s("span",{class:"text-xl block"},"Android",-1),V={class:"w-full"},D=d('<footer class="w-full py-4 px-12 bg-gray-900 flex flex-col sm:flex-row justify-between items-center mt-12 lg:mt-0"><div><div class="text-white text-3xl font-light text-center">&lt;Byte Gem/&gt;</div><div class="text-gray-600 text-lg text-center">四川字节琳琅科技有限公司</div></div><div class="flex flex-col justify-between sm:block"><a class="text-gray-500 text-center" href="mailto:service@bytegem.net">service@bytegem.net</a><a class="text-gray-500 mt-2 sm:mt-0 sm:ml-4 text-center" href="https://github.com/bytegem" target="_blank" rel="noopener noreferrer">Terms</a></div></footer>',1);h.render=function(e,c,d,x,h,E){return t(),l(i,null,[s("div",m,[f,a(" 导航 "),s("nav",g,[w,s("div",p,[s("button",{class:"flex items-center px-3 py-2 border rounded lg:text-black text-white lg:border-black border-white lg:hover:text-gray-700 hover:border-gray-200",onClick:c[1]||(c[1]=(...t)=>e.menuHandler(...t))},[b])]),u,r(s("div",v,[k],512),[[n,e.showMenu]])]),a(" 根容器 "),s("div",y,[s("div",j,[a(" 标题 "),M,a(" 副标题 "),_,a(" 副标题2 "),S,a(" 下载按钮 "),s("div",H,[z,B,s("div",{class:"inline-flex bg-black text-white w-64 sm:w-48 rounded-full h-16 sm:ml-6 h-12 items-center shadow-md cursor-pointer",onClick:c[2]||(c[2]=(...t)=>e.downloadAndroid(...t))},[A,1==e.download?(t(),l("div",C," 正在获取下载地址... ")):(t(),l("div",F,[G,N]))])])]),s("div",V,[o(e.$slots,"default")])])]),D],64)},h.__file="src/components/Layout.vue";export default h;
