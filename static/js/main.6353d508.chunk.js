(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{147:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g}));var r=n(0),a=n.n(r),c=n(3),s=n(36),i=n(77),u=new s.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),o=new s.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new s.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var s,i,u,o,d,b=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=b.length>3&&void 0!==b[3]?b[3]:"recent",i=b.length>4&&void 0!==b[4]&&b[4],u=!1,o={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(c.a)(a.a.mark((function e(b,f){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){u||(u=!0,console.log("Rejecting for timeout..."),f({timeout:!0}))}),n);try{d=r.onSignature(t,(function(e,t){u=!0,o={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),f(o)):(console.log("Resolved via websocket",e),b(o))}),s)}catch(j){u=!0,console.error("WS error in setup",t,j)}case 2:if(u||!i){e.next=8;break}return Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],u||(o?o.err?(console.log("REST error for",t,o),u=!0,f(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),u=!0,b(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return o=e.sent,r._signatureSubscriptions[d]&&r.removeSignatureListener(d),u=!0,console.log("Returning status",o),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(t,n,r,a){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:s.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.d.TransactionInstruction({keys:c,programId:o,data:e.from([])})},j=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c,i,o,d,b,f,j,p,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new s.b(r,t,{preflightCommitment:"recent"}),e.next=3,s.a.fetchIdl(u,c);case 3:return i=e.sent,o=new s.a(i,u,c),d={id:n,connection:r,program:o},e.next=8,o.account.candyMachine.fetch(n);case 8:return b=e.sent,f=b.data.itemsAvailable.toNumber(),j=b.itemsRedeemed.toNumber(),p=f-j,l=b.data.goLiveDate.toNumber(),l=new Date(1e3*l),e.abrupt("return",{candyMachine:d,itemsAvailable:f,itemsRedeemed:j,itemsRemaining:p,goLiveDate:l});case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),n.toBuffer()],o);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var u,o,b,j,h,g,x;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=s.d.Keypair.generate(),e.next=3,m(r,u.publicKey);case 3:return o=e.sent,b=t.connection,j=t.program,e.next=7,l(u.publicKey);case 7:return h=e.sent,e.next=10,p(u.publicKey);case 10:return g=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(i.a.span);case 13:return x=e.sent,e.next=16,j.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:c,mint:u.publicKey,metadata:h,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:d,tokenProgram:i.b,systemProgram:s.d.SystemProgram.programId,rent:s.d.SYSVAR_RENT_PUBKEY,clock:s.d.SYSVAR_CLOCK_PUBKEY},signers:[u],instructions:[s.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:u.publicKey,space:i.a.span,lamports:x,programId:i.b}),i.c.createInitMintInstruction(i.b,u.publicKey,0,r,r),f(o,r,r,u.publicKey),i.c.createMintToInstruction(i.b,u.publicKey,o,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(4).Buffer)},242:function(e,t,n){},374:function(e,t,n){},377:function(e,t){},379:function(e,t){},385:function(e,t){},394:function(e,t){},395:function(e,t){},421:function(e,t){},422:function(e,t){},430:function(e,t){},436:function(e,t){},437:function(e,t){},443:function(e,t,n){var r={"./1.png":444,"./10.png":445,"./2.png":446,"./3.png":447,"./4.png":448,"./5.png":449,"./6.png":450,"./7.png":451,"./8.png":452,"./last.png":453};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=443},444:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.269013f7.png"},445:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/10.fa6d398f.png"},446:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.5e748d5f.png"},447:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3.14075bdc.png"},448:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/4.5c292c1f.png"},449:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5.fef853ba.png"},450:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/6.fe7e543d.png"},451:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/7.b5caa33d.png"},452:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/8.25b9994d.png"},453:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/last.fc6ceb02.png"},510:function(e,t){},512:function(e,t){},526:function(e,t){},530:function(e,t){},532:function(e,t){},542:function(e,t){},544:function(e,t){},575:function(e,t){},577:function(e,t){},584:function(e,t){},585:function(e,t){},610:function(e,t){},611:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(32),s=n.n(c),i=(n(374),n(242),n(12)),u=n(0),o=n.n(u),d=n(3),b=n(15),f=n(146),j=n(148),p=n(328),l=n(638),m=n(643),h=n(647),g=n(646),x=n(38),y=n(61),w=n(183),v=n.p+"static/media/psl_presents.b43199d4.png",k=n(14);var q=function(){return Object(k.jsx)("nav",{className:"navbar navbar-light",children:Object(k.jsxs)("div",{className:"container",style:{position:"relative"},children:[Object(k.jsx)("a",{className:"navbar-brand",href:"#",children:Object(k.jsx)("img",{src:v,height:"45",className:"d-inline-block align-top",alt:""})}),Object(k.jsx)("a",{href:"https://discord.gg/w6bqEBK6Qc",target:"_blank",style:{right:"calc(10% + 10px)",position:"absolute",color:"black",fontSize:"1.6em"},children:Object(k.jsx)("i",{className:"fab fa-discord"})}),Object(k.jsx)("a",{href:"https://twitter.com/LoveLettersNFTs",target:"_blank",style:{right:"5%",position:"absolute",color:"black",fontSize:"1.6em"},children:Object(k.jsx)("i",{className:"fab fa-twitter"})}),Object(k.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(k.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)("a",{className:"nav-link",href:"#",children:"Home"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)("a",{className:"nav-link",href:"#",children:"Link"})})]})})]})})},z=n.p+"static/media/ll.df6083c8.png",O=n(147);n.p;var S,N,P,K,T=function(){return Object(k.jsx)(k.Fragment,{})},B=Object(j.a)(w.a)(S||(S=Object(f.a)([""]))),L=j.a.span(N||(N=Object(f.a)([""]))),M=j.a.div(P||(P=Object(f.a)([""]))),E=Object(j.a)(l.a)(K||(K=Object(f.a)([""])));var A=function(e){e.days;var t=e.hours,n=e.minutes,r=e.seconds;e.completed;return Object(k.jsxs)(L,{children:["Minting starts in ",t,"h, ",n,"m, ",r,"s"]})},I=function(e){var t=Object(r.useState)(),a=Object(b.a)(t,2),c=a[0],s=a[1],u=Object(r.useState)(!1),f=Object(b.a)(u,2),j=f[0],l=f[1],w=Object(r.useState)(!1),v=Object(b.a)(w,2),S=v[0],N=v[1],P=Object(r.useState)(!1),K=Object(b.a)(P,2),L=K[0],I=K[1],R=function(e){var t={};return e.keys().map((function(n){t[n.replace("./","")]=e(n)})),t}(n(443)),D=Object(r.useState)({open:!1,message:"",severity:void 0}),_=Object(b.a)(D,2),C=_[0],W=_[1],F=Object(r.useState)(new Date(e.startDate)),U=Object(b.a)(F,2),Y=U[0],J=U[1],H=Object(y.c)(),G=Object(r.useState)(),Q=Object(b.a)(G,2),X=Q[0],V=Q[1],Z=Object(r.useState)(),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ne=window.localStorage.getItem("_mStatus"),re=Object(r.useState)({test:0}),ae=Object(b.a)(re,2),ce=ae[0],se=ae[1];ne||(ne="{}"),Object(r.useEffect)((function(){Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:se(JSON.parse(ne||"{}"));case 1:case"end":return e.stop()}}),e)})))()}),[ne]),Object(r.useEffect)((function(){console.log("updated status"),console.log(ce)}),[ce]);var ie=["3e2h2xe2k33ty3dusnrkfckd7hhbk1hvbq9cs4syvtqd","8zq5ybjpwqmqrmfwiyvv5q4dtxtfowlfydmwknqxkacs","5frgnxxhdkvyvmpjt8y9hxufh4vjxjfmvv1zzevzy6h5","bhph13avwruaxan4yxgxeydguvtn3x5pa4v5adsq5kzg","fs2apczmgllmsjiw7fkrsipi6qwksyohgyvd23x1jyjf","66ng9hmcsulntf1grrzkymekrdtlwuyfmimjnmygnhko","9m8fg99vakjgu6mir12ofkjfmwmuqav4ctbzsxcftwn5","8wgf8qigazgqcun66f6yca7qolc8ga1nq4u1bcqgjwpe","36xylcff3sawpzrbbvrmu8zemgjfcuvdq2ogdtonmrfz","ecwti7kg3wcdqyr6rft6qguui5t3kby87k4o316jbhcv","gjrfvlejdy1vvwes6czqihjkrtw2e4ggrtgxinedt3uc","3rp4wpbnxi7apjrya9ixhryqz1twkmjtyvguq6r6s2jk","9tkr69uevpth4m7psnvui93vkguglvifrmjbuwvueyjb","bz2vhpdscyntsmahhy51kj7vmewhxqc3jxatgiexhoc","dsrbdqvb1isjtgzz2qehuwyvplalzq5mtdfqersvz9kc","92irwzrbjfdtriurcuhuy9usw26ans6joma2prngjpxm","9ujr9ab44hfh88n5c8hwdqbhbu1i8epdsfgtc9yt7ssk","5px9bddw3lhutfsce8pqt2lfkxfiklzh9dch72fwpfix","exyna24ckjxjujobqccnxyamrdfxtbqu5c14xecktr82","mfbjmmk9gs57yvdqrhmvd5qravkw6kq1zbngpmdqdj2","bqg6pdxyzyibqbnyi7vkbaq47512sezqime57rtmzqw3","3wuycigkklhmu1d17aequpi9m9qhjxc2kqbrrtjmkrvg","afzgxutvfxi1pw5aukhv3oobgeg8w6rtr7ury3dzbcz1","ecxe4vtwvcl1ftgl2ggooxx2rhgghfupaeeemoagewka","htlcjwvd6aatksdnt8gtigcy5iiz7358znxjqrz6jfzu","bjwlhniizx4z6zyz7c7q745uhnfym4iugpa2afmewbjf","2z4d24effmvq8dwxckmefafh49p4kshkygkftgxhzu6a","f8o8saq8rlwjntn4cy8jfmygvxaug6c11dq83kdzvlrv","68f7p7nscfwkflaentqikusfs4uvc41cmasl9sht2uwu","j8oqrjixqgttkwhfgqfemik6pn2qwl7vdnfmwabsb4jr","5mjqgtwg6fzm4hibz6apqqukgzyxgbqu1vrwk3akwss2","3x1yyugyn6tccmjqehnqzfusg24h6ue3b4wdvpegoilx ","3inmt265d1rhnbg1mjy8twalwqdm62fpmmbggq2m8t5k","dfxjn3erg68kxgyhvqbfz6m9qbjvl8knxghnrgcxxkyf","baktdyg4hxeendqe8rtpjt3nkwb9azkedzinb21pknsp","21fluyozzhdjck99z2gjzbmqqz33wcgvly5wezrd9zev","4gwex7dwstzeucbtv5wtsurx7uhjpqoxa1wnbdswbeyl","cuyrdduttgzv8klxueshjt1gym1lj1ckhesp3cwxuasl","hp6xweqqjqilbtvawqdst8frvnxhuwuuhtqmc7w2ufhe","ac8qyjkiluvejc5we1cgzdtqumh8iyu8gwrdjwwdfhm3","54xaudrcgerfbmfrfce6nljal7pp7oj7tqtd2t1azqdd","6cxs23awrsgaz55raspqszn84mduxf4w8xivg6edhf9k","3qhcyfrgft1w3qewqdyx8qpwe5ygew998tposz7pjztv","hchuwfnobh5mwkuk8eedqkhr6ejvbtsnirzq9yxy8whn","evvlk1aasnzpaqaguy5omwyx2qlexd6eyx4vn9rxb7py","ajwwzbmryw8xag6zhjycvu9dtyzvuixavntzkgcdfz9g","hbzndyqjhacqdh1nqyvbjzqsw1dywn4mbew1icouthdy","8csnmsbh84szpoqdcpkymzmabvhbhtxhhuhs4qrb3q6k","5zw25xhjh2cjr33swslnewauesbmdjnzwtsfk56jgsgw","26lrhmskacdy1gf3uif67ohyp6b6mrah1yrhtkhnnrj1","9vwty3kd8phtwxx8wqv857zsryp8fzfwy7naqicrx9ny","gyyahx1ugcxsz34iwupfr4dwe6slo5t9vsy7xxnlpivi","85bkce7mcju6b62e2vobma2vy1r8v5ju7nt2rhomwfhl","bkrkdybkenmov4x9o9weoapeiqd7zurgzkxdruib46i2","b4erjdgm8vypwzak2c1sytfv5mcnaimgyqagodduh1am","ziv3nrmo9pgfvvjivw8d9xhwhjydk8ws1xqwvnrhjb8","4bgcgu5jfc4qvvnecar73kdqsxjgxiufkmb4w93kurz2","bzttrxs2cnr8jqgrkdhwpdlx3nxh7d5gghdmtxcl6zl","cbkpdxr8yu2y6dbm5xadal9w2ytrzsv6tbvbfneq5abq","6qqvkvk7bn76wivp6ab3phg1fznhdvjolz2np2mjenuq","evrkbhzrgnmechezbax92w5qc3crbxhtwbw9bp7z2qmy","ei8ygkrrnpizj4qrjzyk8ybanblzpenkds6pjmoh3pht","52kygsjwxhmbsfifx5ynfffryupmfv3hoxytdkp5j9jk","9squuzkgvqe1q5axc3znxn2qumyy7juhtynshkyvkqj3","3uwxwzxld46v4xkznffcuop8qlcvjshq125ynhyzfmyr","gvbuq8wp1bhusn6ejrhtgpn68djukwftspbzr8esxcep","4w5pslmmcezjdexh1cgjclwfqs79frt8jecmi5hjthhk","2hyzd6xbsfqvynbfdzil5xevpk3jyyt1mzqtbha9pbfp","hlnqvo7tnbpy1j9pn15hyqarqk9jm9vnkikl3obpmi82","7tjp3tg7zqxggdpbsvrkpgauhgtlvyvcqnwnns8zwjrp","anlttkekjqnkx3k1g1aqxpwz3s9kyzjb3kzhmmbqea3a","86bfzemwwhqyhi3xc7qhkpu5fpzefqqbufayynkfhjqw","9vc8pkqnu7sce182t3au8ghd3ggnlrwiuepuxnmpz95d","dhezvgpcen9ogaxexduayl4yzqf6cedn79d4clsqgpmj","9w3ofajvk1fayaumhcr6tu2rekgutad4uzdxmhqa8c8i","8qphkdsa8zh7mwpqwfs2xn952y6gxn6e3safwb2npezw","grzfararqjphsausxfkmdkech6dwda7ruphtxwjcnakf","ae1tyzxyg27d95p597cko9nc5ukdcwwxkbltuxp2abtg","2av7e9kpfdze1wjumb58xazj6ygzn3hxte8jrej31ayn","5qbbmzzcjusq5gmzhdkf2g8vhwss163ukhanwkgeujwk","e6pew7fehjywarpsdacu3dafx1vyjusk4khsrxn9rvo1","hfrcawbdify6xrkofy2uugyagqyq2nuw9iynhcxa72me","7asjq7kcdk9b39qfxjazeppydx81uwi6qdhedgwciqf","ftyopxq1qtgltmbt1dmr2w1wx6nur938843c4z13scp2","dsea1x3mfyazpcvuzezgea3rrfqnxtuv3k71xthzve1y","3e2h2xe2k33ty3dusnrkfckd7hhbk1hvbq9cs4syvtqd","47z4toyvvbibrbjeyf1miweqv28acnonnctkzcs9sfdy","aocjnppgwyzza9p4pq998wxqyongo5yoe1twktj4mzos","92t6mx77ktlmxswy522uewtijmkxdhtsbzaz2elv2b8m","gzaks5vhvcqygrvhzsthnqxxi14er9u4m4t6gztvh2bg","8wcxsjoj3fdukvduwgs7yowuaqtprunewscqqnry5sbx","a6quz8dgzjbcat5jxkfwzmifunu4vb6bs9my8zad6wse","7hxcopnu8skvzgz4do3q81fi2tlrmcepnndmmcr85as5","4tey4vt8rqtyxnw5akv3dwi3rrkt4wasktaerh91qjyj","612xhyvf9kogxw1tmu7rvqavxy7yvwvhaeeckh21xffq","5vjgj2zse28asjtkfrauv75iyz6ff4cwegmae31zyejg","cs21p2skytmefmihrx6nwl4mafuxk4njwjfdvcsrqxjb","br6mwy9zwuxppkej2yeynk5fbhxja7aunwuyqian9tgj","dwzw6t8pjlpajmuo8o6b5watuqku6dhkzs3ysbx6jxew","59jygurxgzgrc6i5vmfiadybcsxedp3ycnjrvuczcvvp","f9txahrgwwpursb85nca3lndasvb5c7ltgvnnaqmfdma","2urncwzth68ag1kv6d1jzvivm6feaxsrz9z4vzzk6xsz","bebe2kuryzabkdvaxjrfndygcxvfgxkdzdvtr51qzwiu","6vverrnthqfujychhimsyg1i5lvbuk8fq3fjbrloubrq","5wt1vlgaizs31jcirm3d2sjrybkvjnc3evkdr83zwk26","9kh9ubmugytox6h7hye8mtvsvsczg7jpgb4bqrfhkv7o","778yvdkd54gorgn9spcj5gnqgdcdh5k5wsst1c5h7eqq","3wgbbdv4w7safx4vbeyqrrjdov5ujusjtvd2jub2l3an","wzuqafquxsurs2uh6hrsmgpwrbjx8xteowhcompj5x6","gzdukfvnrbuyym19pqcpisundlasf6jbcrsv9isucord","gh64efz7n9ikund26ialu7qhdktgrpegqh3fuyjtczwy","7pt6qgtnfms1fexav6am38wm7x6dkldvad7njuskufiw","2soutvrfcfey7nra5amem3psiftl1qhjzgqnpruehdqv","fqtxx362jxjrldqbr1an3ccp1ipgdjakkykfrahgp6fu","7x26jhqsxwxd1apdoowizaroyij5oaft4vckqtyhquhs","netdotulm3o56ywzhweuubeodyetr638pahkduhhlx9","jesstwppnatw14kqrfmtigy4upeijudqapdjdkzoz28","a93uxraywaax5jzmv4wewjnf5cavwhfxurv7vgnmbudw","4xa2zz3ietkjxaefnrzhj4npeqqtthsvsmfmytudrs1d","4gbki9fhc1qcc5jtcuavtmmz5rkz6fpdb8kmbzx3xeam","bdsd28qrwgcw7d833g4xagq5jgrmbr4qsriq5lknzhhl","7jnzfqbtkbt15pfwccot7guwj7xgdd31rbvdugxzehnj","dfkz9pssfh7ac1byjqseteouqdlkpz6srsa9dkfu4i2l","7hurwp1cmirkqrk7yykruffcfppkinr8win14brqjnlj","dx7kvwcs6mnaf4wsmfbsdwbnre8u78hfipqdghmn9dkz","brcjsb77o4ybhbi8a2op7fyfkpieahortucgxeuzkpor","csjdfkdqusvnc45qszpbissypznftccvhonmbj5xhyy4","lhrhhr4a1efkl4tug2kjmrdlwgdaetvpk9uvn8gzfnm","3ddup173fo6wc3xch4qfjnsebhvj6zscjscmt9nr5qnf","gef2nnayec8dw2rj1q5egcuyvza1lzztb6y4rpn6kane","8fwtrw1wswpam725x11mihtwyxb6sev4b3epynmzusjq","3yprhnhmng2uzkn4juanwcsnxymxrf18cdpzha4mmzp4","6xkte6bkjd1rkqc8fwjdh2qmujhonmnhhu9hzpezg7qj","7qz9lgnp7x2hfr8yjbstwjjqwum4brzyxdjaezpmr2b7","dx85jmmlt1qkvvawmfrudeexpul71ymhvx4j8ybrpuyc","4bcobuqefjpuezffc68umd9bqk6d4wlxcjhejawqg8if","7znwe5xy84cieccntx8xtjorrswh96si8tsu8ecgdrve","8srde2mxouxsd2eqtjghfqkbmguy8cyktbpws21hyjkg","az2pr2r4gw7k9jvwuwyoxw3agqznha1vl1s4qerskk2a","e8ymqld77jx4gqxpr8nwbp3pc1dhjacqhdxy8f6ft6jq","cm12aecsiy7vqqopa6fsybvvdw3vnrs1kthtg5jjpfwh","8lhzwknmhbmdtjdx5s7yzcszfug22azyjgsawuuybz2g","7vkuxbmxclxrdmiksppkebmtd53xtsemven1ahlptfzt","7iyxn4tgqvkzfurc7q43893mrpgdby5wkqtvhahacayo","7snw65tw2ptnmr1xiyvnjtaen8gpmgafmip1g5wgdhj","7qbjckvybbbjbantjao19verobpjm41lg3ey2cecuqhu","3hok7rsbzfr3wu7g3cwgxgjnczhya9mfkf3z7ui3ra7y","6tb223es5kyp1jgmnosebubykvwp5vsgdcpzgv5iuvm4","3tabpdmxqwqdgbdk6fg3mbswgy2scq1xyvvejgudu2x6","8gwawdpxpwplfnlc3gr38zp3xdzzcduywoqrups8uloa","95tgbrwasuwqfk53h3qz9bdwmtkyrgm1rrn1njy8cutk","djamxuxz5ymnhvqeeek44jdurqshw3ky37xumk5sfws8","dzw4svnjw56dnz1dxh8gjmkaat81whvcznyaxkhvrhzh","4wbnylqpefxn1m5ixn2k72bnlojnrw56hgxtknty2zzw","gzdukfvnrbuyym19pqcpisundlasf6jbcrsv9isucord","xeheligww4ud57ha4ygdpdr2jfys2zyfeymgjtoucrp","et8d3nresx8gpuashprdhgwzcbxtpyq5qxuyueqhiaj9","3hafkjuburrejbdygcg9l5vhshhdc8rswy2cel7dhcgp","gaskixvrqq3p8qt6tpw9vyrc1dgmt98sgjzavrkapjcs","dp4ny38nwonfb4a82qt6c5oplx8uasdtpuxdl8yqc7no","65tqdt4pydpsux7hhirtfnhiutcpchq4qnagyr6gsmmb"],ue=Object(r.useState)(!0),oe=Object(b.a)(ue,2),de=oe[0],be=oe[1],fe=function(){var t=Object(d.a)(o.a.mark((function t(){var n,r,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,H&&(null===X||void 0===X?void 0:X.program)&&!ce.hasOwnProperty(H.publicKey.toBase58())&&(ce[H.publicKey.toBase58()]=0),I(!0),!H||!(null===X||void 0===X?void 0:X.program)){t.next=11;break}return t.next=6,Object(O.c)(X,e.config,H.publicKey,e.treasury);case 6:return n=t.sent,t.next=9,Object(O.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 9:(null===(r=t.sent)||void 0===r?void 0:r.err)?W({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(ce[H.publicKey.toBase58()]++,W({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}));case 11:t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",N(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),W({open:!0,message:a,severity:"error"});case 18:if(t.prev=18,!H){t.next=24;break}return t.next=22,e.connection.getBalance(H.publicKey);case 22:c=t.sent,s(c/x.LAMPORTS_PER_SOL);case 24:return I(!1),console.log("testt"),window.localStorage.setItem("_mStatus",JSON.stringify(ce)),t.finish(18);case 28:case"end":return t.stop()}}),t,null,[[0,13,18,28]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(d.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!H){t.next=5;break}return t.next=3,e.connection.getBalance(H.publicKey);case 3:n=t.sent,s(n/x.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[H,e.connection]),Object(r.useEffect)((function(){Object(d.a)(o.a.mark((function t(){var n,r,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(H){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(O.b)(H,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,a=n.goLiveDate,c=n.itemsRemaining,N(0===c),J(a),V(r),te(555-c);case 12:case"end":return t.stop()}}),t)})))()}),[H,e.candyMachineId,e.connection]),Object(r.useEffect)((function(){var e=setInterval((function(){(new Date).getTime()>=1636398e6&&be(!1)}),1e3);return function(){return clearInterval(e)}}),[]),Object(k.jsxs)("main",{className:"text-center",children:[Object(k.jsx)(q,{}),Object(k.jsx)("header",{className:"App-header",children:Object(k.jsx)("img",{src:z,alt:"banner",className:"bannerImage"})}),H&&Object(k.jsxs)("p",{className:"text-center",children:[Object(k.jsx)("b",{children:"Address:"})," ",Object(O.d)(H.publicKey.toBase58()||"")," \xa0\xa0\xa0 ",Object(k.jsx)("b",{children:"Balance:"})," \u25ce",(c||0).toLocaleString()]}),H&&Object(k.jsxs)("p",{className:"text-center",children:[Object(k.jsx)("b",{children:"Presale mint price:"})," \u25ce0.99 \xa0\xa0\xa0 ",Object(k.jsx)("b",{children:"Max mint:"})," 5 NFTs "]}),Object(k.jsx)(M,{children:H?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(E,{disabled:S||L||ie.indexOf(H.publicKey.toBase58().toLowerCase())<0&&de||ce.hasOwnProperty(H.publicKey.toBase58())&&ce[H.publicKey.toBase58()]>=5,onClick:fe,variant:"contained",children:S?"SOLD OUT":j?L?Object(k.jsx)(m.a,{}):ie.indexOf(H.publicKey.toBase58().toLowerCase())<0&&de?"ONLY WHITELISTED ADDRESSES CAN MINT":ce.hasOwnProperty(H.publicKey.toBase58())&&ce[H.publicKey.toBase58()]>=5?"ONLY 5 MINTS PER ADDRESS ALLOWED":"MINT":Object(k.jsx)(p.a,{date:Y,onMount:function(e){return e.completed&&l(!0)},onComplete:function(){return l(!0)},renderer:A})}),Object(k.jsxs)("p",{className:"text-center",style:{marginTop:"10px"},children:[Object(k.jsxs)("b",{children:[ee,"/555"]}),Object(k.jsxs)("span",{children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"Mint open to non-whitelisted addresses after ",Object(k.jsx)("b",{children:"7PM UTC"})]})]})]}):Object(k.jsx)(B,{className:"btn btn-primary",children:"Connect Wallet"})}),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-12",children:Object(k.jsx)("img",{src:R["last.png"].default,style:{width:"40%",marginTop:0},className:"d-none d-md-block mx-auto"})})}),Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col-md-12",children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-6",children:Object(k.jsxs)("p",{children:[Object(k.jsxs)("span",{className:"d-none d-md-block",children:["find out more about the artist:\xa0\xa0",Object(k.jsx)("a",{style:{color:"#855147 !important"},href:"https://austensegal.com",target:"_blank",children:" austensegal.com"})," \xa0\xa0\xa0 - \xa0\xa0\xa0",Object(k.jsxs)("a",{href:"https://www.instagram.com/austensegal/",target:"_blank",children:[Object(k.jsx)("i",{className:"fab fa-instagram",style:{color:"#855147"}})," "]})]}),Object(k.jsxs)("span",{className:"d-sm-block d-md-none",children:["artist: \xa0 \xa0",Object(k.jsx)("a",{style:{color:"#855147 !important"},href:"https://austensegal.com",target:"_blank",children:" austensegal.com"})," \xa0\xa0\xa0 - \xa0\xa0\xa0",Object(k.jsxs)("a",{href:"https://www.instagram.com/austensegal/",target:"_blank",children:[Object(k.jsx)("i",{className:"fab fa-instagram",style:{color:"#855147"}})," "]})]})]})}),Object(k.jsxs)("div",{className:"col-md-6",children:[Object(k.jsx)("a",{href:"https://medium.com/@ProtoSoulLabs/love-letters-other-secrets-1f929a7c939d",target:"_blank",children:"whitepaper"}),"\xa0\xa0\xa0 - \xa0\xa0\xa0",Object(k.jsxs)("a",{href:"https://discord.gg/w6bqEBK6Qc",target:"_blank",children:[Object(k.jsx)("i",{className:"fab fa-discord"})," "]})," \xa0\xa0\xa0 - \xa0\xa0\xa0",Object(k.jsxs)("a",{href:"https://twitter.com/LoveLettersNFTs",target:"_blank",children:[Object(k.jsx)("i",{className:"fab fa-twitter"})," "]})]})]})]}),Object(k.jsx)(T,{}),Object(k.jsx)(h.a,{open:C.open,autoHideDuration:6e3,onClose:function(){return W(Object(i.a)(Object(i.a)({},C),{},{open:!1}))},children:Object(k.jsx)(g.a,{onClose:function(){return W(Object(i.a)(Object(i.a)({},C),{},{open:!1}))},severity:C.severity,children:C.message})})]})},R=n(36),D=n(130),_=n(361),C=n(644),W=new R.d.PublicKey("AWA1t7yQf3HF6Lp5g3odFfHTaJvuB2aXmmgtUx6xnT6W"),F=new R.d.PublicKey("66yMALo1Q3fDG2znoQugcXBv9Pjsy9P5dWDDnytaP1Bv"),U=new R.d.PublicKey("5Kwd3MvYJ6V2179JXyGtxnutGWXaf7vzXd2fPPniEirp"),Y="mainnet-beta",J=new R.d.Connection("https://explorer-api.mainnet-beta.solana.com"),H=parseInt("1636394400000",10),G=Object(_.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Q=function(){var e=Object(r.useMemo)((function(){return Object(x.clusterApiUrl)(Y)}),[]),t=Object(r.useMemo)((function(){return[Object(D.a)(),Object(D.b)(),Object(D.c)(),Object(D.e)({network:Y}),Object(D.d)({network:Y})]}),[]);return Object(k.jsx)(C.a,{theme:G,children:Object(k.jsx)(y.a,{endpoint:e,children:Object(k.jsx)(y.b,{wallets:t,autoConnect:!0,children:Object(k.jsx)(w.b,{children:Object(k.jsx)(I,{candyMachineId:U,config:F,connection:J,startDate:H,treasury:W,txTimeout:3e4})})})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,648)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(Q,{})}),document.getElementById("root")),X()}},[[611,1,2]]]);
//# sourceMappingURL=main.6353d508.chunk.js.map