(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{169:function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return O})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return p}));var s=c(2),r=c.n(s),n=c(6),j=c(43),i=c(84),d=new j.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),a=new j.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new j.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(n.a)(r.a.mark((function e(t,c,s){var j,i,d,a,l,b=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j=b.length>3&&void 0!==b[3]?b[3]:"recent",i=b.length>4&&void 0!==b[4]&&b[4],d=!1,a={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(n.a)(r.a.mark((function e(b,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){d||(d=!0,console.log("Rejecting for timeout..."),o({timeout:!0}))}),c);try{l=s.onSignature(t,(function(e,t){d=!0,a={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),o(a)):(console.log("Resolved via websocket",e),b(a))}),j)}catch(O){d=!0,console.error("WS error in setup",t,O)}case 2:if(d||!i){e.next=8;break}return Object(n.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.getSignatureStatuses([t]);case 3:c=e.sent,a=c&&c.value[0],d||(a?a.err?(console.log("REST error for",t,a),d=!0,o(a.err)):a.confirmations?(console.log("REST confirmation for",t,a),d=!0,b(a)):console.log("REST no confirmations for",t,a):console.log("REST null result for",t,a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,m(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}());case 7:return a=e.sent,s._signatureSubscriptions[l]&&s.removeSignatureListener(l),d=!0,console.log("Returning status",a),e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})));return function(t,c,s){return e.apply(this,arguments)}}(),o=function(t,c,s,r){var n=[{pubkey:c,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:s,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:j.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:j.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new j.d.TransactionInstruction({keys:n,programId:a,data:e.from([])})},O=function(){var e=Object(n.a)(r.a.mark((function e(t,c,s){var n,i,a,l,b,o,O,x,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new j.b(s,t,{preflightCommitment:"recent"}),e.next=3,j.a.fetchIdl(d,n);case 3:return i=e.sent,a=new j.a(i,d,n),l={id:c,connection:s,program:a},e.next=8,a.account.candyMachine.fetch(c);case 8:return b=e.sent,o=b.data.itemsAvailable.toNumber(),O=b.itemsRedeemed.toNumber(),x=o-O,h=b.data.goLiveDate.toNumber(),h=new Date(1e3*h),e.abrupt("return",{candyMachine:l,itemsAvailable:o,itemsRedeemed:O,itemsRemaining:x,goLiveDate:h});case 15:case"end":return e.stop()}}),e)})));return function(t,c,s){return e.apply(this,arguments)}}(),x=function(){var t=Object(n.a)(r.a.mark((function t(c){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),c.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(n.a)(r.a.mark((function t(c){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),c.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var e=Object(n.a)(r.a.mark((function e(t,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),c.toBuffer()],a);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),g=function(){var e=Object(n.a)(r.a.mark((function e(t,c,s,n){var d,a,b,O,g,p,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=j.d.Keypair.generate(),e.next=3,u(s,d.publicKey);case 3:return a=e.sent,b=t.connection,O=t.program,e.next=7,h(d.publicKey);case 7:return g=e.sent,e.next=10,x(d.publicKey);case 10:return p=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(i.a.span);case 13:return m=e.sent,e.next=16,O.rpc.mintNft({accounts:{config:c,candyMachine:t.id,payer:s,wallet:n,mint:d.publicKey,metadata:g,masterEdition:p,mintAuthority:s,updateAuthority:s,tokenMetadataProgram:l,tokenProgram:i.b,systemProgram:j.d.SystemProgram.programId,rent:j.d.SYSVAR_RENT_PUBKEY,clock:j.d.SYSVAR_CLOCK_PUBKEY},signers:[d],instructions:[j.d.SystemProgram.createAccount({fromPubkey:s,newAccountPubkey:d.publicKey,space:i.a.span,lamports:m,programId:i.b}),i.c.createInitMintInstruction(i.b,d.publicKey,0,s,s),o(a,s,s,d.publicKey),i.c.createMintToInstruction(i.b,d.publicKey,a,s,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,c,s,r){return e.apply(this,arguments)}}(),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},m=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,c(11).Buffer)},247:function(e,t,c){},498:function(e,t,c){},501:function(e,t){},503:function(e,t){},510:function(e,t){},525:function(e,t){},526:function(e,t){},564:function(e,t){},565:function(e,t){},566:function(e,t){},573:function(e,t){},574:function(e,t){},575:function(e,t){},638:function(e,t){},640:function(e,t){},654:function(e,t){},658:function(e,t){},660:function(e,t){},670:function(e,t){},672:function(e,t){},703:function(e,t){},705:function(e,t){},712:function(e,t){},713:function(e,t){},738:function(e,t){},745:function(e,t,c){"use strict";c.r(t);var s,r,n,j,i=c(1),d=c.n(i),a=c(32),l=c.n(a),b=(c(247),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,770)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,j=t.getTTFB;c(e),s(e),r(e),n(e),j(e)}))}),o=(c(498),c(16)),O=c(2),x=c.n(O),h=c(6),u=c(26),g=c(168),p=c(170),m=c(475),f=c(764),y=c(765),v=c(766),k=c(767),S=c(47),w=c(96),P=c(204),B=c(169),C=c(3),T=Object(p.a)(P.WalletDialogButton)(s||(s=Object(g.a)(["@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@1,100&display=swap'); background-color:#289BC2"]))),A=p.a.span(r||(r=Object(g.a)(["@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@1,100&display=swap');"]))),K=p.a.div(n||(n=Object(g.a)(["@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@1,100&display=swap');"]))),L=Object(p.a)(f.a)(j||(j=Object(g.a)(["@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@1,100&display=swap'); background-color:#289BC2"]))),R=function(e){e.days;var t=e.hours,c=e.minutes,s=e.seconds;e.completed;return Object(C.jsxs)(A,{children:[t," hours, ",c," minutes, ",s," seconds"]})},M=function(e){var t,c=Object(i.useState)(),s=Object(u.a)(c,2),r=s[0],n=s[1],j=Object(i.useState)(!1),d=Object(u.a)(j,2),a=d[0],l=d[1],b=Object(i.useState)(!1),O=Object(u.a)(b,2),g=O[0],p=O[1],f=Object(i.useState)(!1),P=Object(u.a)(f,2),A=P[0],M=P[1],W=Object(i.useState)({open:!1,message:"",severity:void 0}),N=Object(u.a)(W,2),E=N[0],D=N[1],I=Object(i.useState)(new Date(e.startDate)),G=Object(u.a)(I,2),F=G[0],U=G[1],_=Object(w.useWallet)(),H=Object(i.useState)(),z=Object(u.a)(H,2),V=z[0],Y=z[1],q=function(){var t=Object(h.a)(x.a.mark((function t(){var c,s,r,j;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,M(!0),!(_.connected&&(null===V||void 0===V?void 0:V.program)&&_.publicKey)){t.next=10;break}return t.next=5,Object(B.c)(V,e.config,_.publicKey,e.treasury);case 5:return c=t.sent,t.next=8,Object(B.a)(c,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(s=t.sent)||void 0===s?void 0:s.err)?D({open:!0,message:"Mint failed! Please try again!",severity:"error"}):D({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),r=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(r="SOLD OUT!",p(!0)):312===t.t0.code&&(r="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?r="SOLD OUT!":t.t0.message.indexOf("0x135")&&(r="Insufficient funds to mint. Please fund your wallet.")),D({open:!0,message:r,severity:"error"});case 17:if(t.prev=17,!(null===_||void 0===_?void 0:_.publicKey)){t.next=23;break}return t.next=21,e.connection.getBalance(null===_||void 0===_?void 0:_.publicKey);case 21:j=t.sent,n(j/S.LAMPORTS_PER_SOL);case 23:return M(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function t(){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===_||void 0===_?void 0:_.publicKey)){t.next=5;break}return t.next=3,e.connection.getBalance(_.publicKey);case 3:c=t.sent,n(c/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[_,e.connection]),Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function t(){var c,s,r,n,j;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_&&_.publicKey&&_.signAllTransactions&&_.signTransaction){t.next=2;break}return t.abrupt("return");case 2:return c={publicKey:_.publicKey,signAllTransactions:_.signAllTransactions,signTransaction:_.signTransaction},t.next=5,Object(B.b)(c,e.candyMachineId,e.connection);case 5:s=t.sent,r=s.candyMachine,n=s.goLiveDate,j=s.itemsRemaining,p(0===j),U(n),Y(r);case 12:case"end":return t.stop()}}),t)})))()}),[_,e.candyMachineId,e.connection]),Object(C.jsxs)("main",{children:[_.connected&&Object(C.jsxs)("p",{children:["Address: ",Object(B.d)((null===(t=_.publicKey)||void 0===t?void 0:t.toBase58())||"")]}),_.connected&&Object(C.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),Object(C.jsx)(K,{children:_.connected?Object(C.jsx)(L,{disabled:g||A||!a,onClick:q,variant:"contained",children:g?"SOLD OUT!! We Ran out of Potato NFTs":a?A?Object(C.jsx)(y.a,{}):"MINT POTATO":Object(C.jsx)(m.a,{date:F,onMount:function(e){return e.completed&&l(!0)},onComplete:function(){return l(!0)},renderer:R})}):Object(C.jsx)(T,{children:"Connect Wallet To Mint Potato"})}),Object(C.jsx)(v.a,{open:E.open,autoHideDuration:6e3,onClose:function(){return D(Object(o.a)(Object(o.a)({},E),{},{open:!1}))},children:Object(C.jsx)(k.a,{onClose:function(){return D(Object(o.a)(Object(o.a)({},E),{},{open:!1}))},severity:E.severity,children:E.message})})]})},W=c(43),N=c(220),E=new W.d.PublicKey("3PDG4iVd5fShoUmoeM3r8LTrKAubB9eor3dSzezjEpSW"),D=new W.d.PublicKey("7XVZKHojBiGkFoAFQNq8xxow9pbSus2jkg9BQXzwc2WD"),I=new W.d.PublicKey("AH1A2QZp2h4ZJL6dpyhyNhc8697qsbrLvcVAqLhuwyx7"),G=new W.d.Connection("https://explorer-api.mainnet-beta.solana.com"),F=parseInt("1631688960",10),U=function(){var e=Object(i.useMemo)((function(){return Object(S.clusterApiUrl)("mainnet-beta")}),[]),t=Object(i.useMemo)((function(){return[Object(N.getPhantomWallet)(),Object(N.getSolflareWallet)(),Object(N.getSolletWallet)()]}),[]);return Object(C.jsx)(w.ConnectionProvider,{endpoint:e,children:Object(C.jsx)(w.WalletProvider,{wallets:t,autoConnect:!0,children:Object(C.jsx)(P.WalletDialogProvider,{children:Object(C.jsx)(M,{candyMachineId:I,config:D,connection:G,startDate:F,treasury:E,txTimeout:3e4})})})})},_=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("script",{children:"AOS.init();"}),Object(C.jsxs)("div",{id:"home",children:[Object(C.jsx)("div",{className:"logo"}),Object(C.jsxs)("div",{className:"maintext",children:[Object(C.jsx)("div",{className:"rightImage",children:Object(C.jsx)("img",{src:"./assets/610.png",alt:"logo2"})}),Object(C.jsxs)("div",{className:"text",children:[Object(C.jsx)("h2",{children:"Potato NFT Collection"}),Object(C.jsx)("p",{children:"Potato is a deflationary token built on the Solana Network"}),Object(C.jsx)("br",{}),Object(C.jsx)("h5",{children:"Potato NFT 1 SOL -- Max Supply 2500"}),Object(C.jsx)("div",{id:"app",children:Object(C.jsx)(U,{})})]})]})]}),Object(C.jsx)("div",{id:"rates",children:Object(C.jsx)("div",{className:"maintext",children:Object(C.jsxs)("div",{className:"text",children:[Object(C.jsx)("h2",{className:"headerPerc",children:"Percentage"}),Object(C.jsxs)("div",{className:"percentage",children:[Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Body Color"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/blue.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/brown.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/gray.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/green.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/pink.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Blue"}),Object(C.jsx)("td",{children:"Brown"}),Object(C.jsx)("td",{children:"Gray"}),Object(C.jsx)("td",{children:"Green"}),Object(C.jsx)("td",{children:"Pink"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"12%"}),Object(C.jsx)("td",{children:"12%"}),Object(C.jsx)("td",{children:"12%"}),Object(C.jsx)("td",{children:"12%"}),Object(C.jsx)("td",{children:"12%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/purple.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/white.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/yellow.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/rainbow.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/SlimeColorBody/solana.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Purple"}),Object(C.jsx)("td",{children:"White"}),Object(C.jsx)("td",{children:"Yellow"}),Object(C.jsx)("td",{children:"Rainbow"}),Object(C.jsx)("td",{children:"Solana"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"12%"}),Object(C.jsx)("td",{children:"12%"}),Object(C.jsx)("td",{children:"12%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"})]})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Mouth"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/awe.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/cat.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/confused.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/excited.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/glitch.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Awe"}),Object(C.jsx)("td",{children:"Cat"}),Object(C.jsx)("td",{children:"Confused"}),Object(C.jsx)("td",{children:"Excited"}),Object(C.jsx)("td",{children:"Glitch"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/happy.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/normal.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/sad.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/star.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/teeth.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Happy"}),Object(C.jsx)("td",{children:"Normal"}),Object(C.jsx)("td",{children:"Sad"}),Object(C.jsx)("td",{children:"Star"}),Object(C.jsx)("td",{children:"Teeth"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/z.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/frown.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/gold.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/grin.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/mouth/mustache.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Z"}),Object(C.jsx)("td",{children:"Frown"}),Object(C.jsx)("td",{children:"Gold"}),Object(C.jsx)("td",{children:"Grin"}),Object(C.jsx)("td",{children:"Mustache"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"})]})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Eye"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/angry.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/annoyed.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/confused.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/cyclops.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/sad.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Angry"}),Object(C.jsx)("td",{children:"Annoyed"}),Object(C.jsx)("td",{children:"Confused"}),Object(C.jsx)("td",{children:"Cyclops"}),Object(C.jsx)("td",{children:"Sad"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/tired.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/glitch.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/happy.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/ignore.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/lash.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Tired"}),Object(C.jsx)("td",{children:"Glitch"}),Object(C.jsx)("td",{children:"Happy"}),Object(C.jsx)("td",{children:"Ignore"}),Object(C.jsx)("td",{children:"Lash"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"8.36%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/normal.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/glasses.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/patch.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/upset.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/face/eye/visor.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Normal"}),Object(C.jsx)("td",{children:"Glasses"}),Object(C.jsx)("td",{children:"Patch"}),Object(C.jsx)("td",{children:"Upset"}),Object(C.jsx)("td",{children:"Visor"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"8.36%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"})]})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Head accessories - 40%"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/cap.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/chef.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/cowboy.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/fly.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/halo.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Cap"}),Object(C.jsx)("td",{children:"Chef"}),Object(C.jsx)("td",{children:"Cowboy"}),Object(C.jsx)("td",{children:"Fly"}),Object(C.jsx)("td",{children:"Halo"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/horn.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/party.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/Pirate.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/TopHat.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/Viking.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Horn"}),Object(C.jsx)("td",{children:"Party"}),Object(C.jsx)("td",{children:"Pirate"}),Object(C.jsx)("td",{children:"TopHat"}),Object(C.jsx)("td",{children:"Viking"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"}),Object(C.jsx)("td",{children:"9%"})]}),Object(C.jsx)("tr",{children:Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/headaccessory/wizard.png",alt:""})})}),Object(C.jsx)("tr",{children:Object(C.jsx)("td",{children:"Wizard"})}),Object(C.jsx)("tr",{children:Object(C.jsx)("td",{children:"9%"})})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Body Accessories - 60%"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/leftearing.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/rightearing.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/hook.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/shield.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/staff.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Left Earing"}),Object(C.jsx)("td",{children:"Right Earing"}),Object(C.jsx)("td",{children:"Hook"}),Object(C.jsx)("td",{children:"Shield"}),Object(C.jsx)("td",{children:"Staff"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"23%"}),Object(C.jsx)("td",{children:"23%"}),Object(C.jsx)("td",{children:"10%"}),Object(C.jsx)("td",{children:"10%"}),Object(C.jsx)("td",{children:"10%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/sword.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/belt.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/chain.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/earings.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/pipe.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Sword"}),Object(C.jsx)("td",{children:"Belt"}),Object(C.jsx)("td",{children:"Chain"}),Object(C.jsx)("td",{children:"Earings"}),Object(C.jsx)("td",{children:"Pipe"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"10%"}),Object(C.jsx)("td",{children:"4%"}),Object(C.jsx)("td",{children:"4%"}),Object(C.jsx)("td",{children:"2%"}),Object(C.jsx)("td",{children:"2%"})]}),Object(C.jsx)("tr",{children:Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/bodyaccessory/swordandshield.png",alt:""})})}),Object(C.jsx)("tr",{children:Object(C.jsx)("td",{children:"Sword and Shield"})}),Object(C.jsx)("tr",{children:Object(C.jsx)("td",{children:"2%"})})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Background Color"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/redSmoke.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/blue.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/brown.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/dark.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/darkblue.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"redSmoke"}),Object(C.jsx)("td",{children:"Blue"}),Object(C.jsx)("td",{children:"Brown"}),Object(C.jsx)("td",{children:"Dark"}),Object(C.jsx)("td",{children:"Dark Blue"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/darkgreen.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/gray.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/green.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/lightyellow.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/orange.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Dark Green"}),Object(C.jsx)("td",{children:"Gray"}),Object(C.jsx)("td",{children:"Green"}),Object(C.jsx)("td",{children:"Light Yellow"}),Object(C.jsx)("td",{children:"Orange"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/pink.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/purple.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/red.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/white.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/basicbackground/yellow.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Pink"}),Object(C.jsx)("td",{children:"Purple"}),Object(C.jsx)("td",{children:"Red"}),Object(C.jsx)("td",{children:"White"}),Object(C.jsx)("td",{children:"Yellow"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"}),Object(C.jsx)("td",{children:"6.6%"})]})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Floor - 25%"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/backgroundfloor/grass.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/backgroundfloor/gravel.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/backgroundfloor/sand.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Grass"}),Object(C.jsx)("td",{children:"Gravel"}),Object(C.jsx)("td",{children:"Sand"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"33.3%"}),Object(C.jsx)("td",{children:"33.3%"}),Object(C.jsx)("td",{children:"33.3%"})]})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Sky - 25%"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/backgroundsky/clouds.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/backgroundsky/stars.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/backgroundsky/sun.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Clouds"}),Object(C.jsx)("td",{children:"Stars"}),Object(C.jsx)("td",{children:"Sun"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"33.3%"}),Object(C.jsx)("td",{children:"33.3%"}),Object(C.jsx)("td",{children:"33.3%"})]})]}),Object(C.jsxs)("table",{children:[Object(C.jsx)("h2",{children:"Special Backgrounds - 2%"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/specialbackground/desert.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/specialbackground/forest.png",alt:""})}),Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"./assets/specialbackground/graveyard.png",alt:""})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Desert"}),Object(C.jsx)("td",{children:"Forest"}),Object(C.jsx)("td",{children:"Graveyard"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"33.3%"}),Object(C.jsx)("td",{children:"33.3%"}),Object(C.jsx)("td",{children:"33.3%"})]})]})]})]})})}),Object(C.jsx)("div",{id:"community",children:Object(C.jsx)("div",{class:"leftImage",children:Object(C.jsxs)("div",{class:"Social",children:[Object(C.jsx)("h1",{children:"Social Media"}),Object(C.jsx)("h2",{children:Object(C.jsx)("a",{href:"https://discord.gg/RrfbCzzfAZ",target:"_blank",rel:"noopener noreferrer",children:"Discord"})}),Object(C.jsx)("h2",{children:Object(C.jsx)("a",{href:"https://twitter.com/PotatoCoinSPL",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),Object(C.jsx)("h2",{children:Object(C.jsx)("a",{href:"https://t.me/PotatoCoinSPLChat",target:"_blank",rel:"noopener noreferrer",children:"Telegram"})})]})})})]})},H=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("div",{id:"base",children:Object(C.jsx)(_,{})})})};l.a.render(Object(C.jsx)(d.a.StrictMode,{children:Object(C.jsx)(H,{})}),document.getElementById("root")),b()}},[[745,1,2]]]);
//# sourceMappingURL=main.dc6e7203.chunk.js.map