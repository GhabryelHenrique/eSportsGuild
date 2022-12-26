"use strict";(self.webpackChunkcblolStats=self.webpackChunkcblolStats||[]).push([[592],{592:(p,c,e)=>{e.r(c),e.d(c,{ValorantMatchesModule:()=>r});var m=e(6895),s=e(5142),h=e(8127),o=e(9444),d=e(3639),a=e(3305),f=e(8903),t=e(4650),v=e(6812);class i{constructor(n,g){this.route=n,this.valorantService=g}ngOnInit(){this.route.params.subscribe(n=>this.matchID=n.id),console.log(localStorage.getItem("matchDetails"))}ngOnDestroy(){localStorage.removeItem("matchDetails")}getLiveGameDetails(){this.valorantService.getGamesDetails(this.matchID).subscribe(n=>{this.matchDetails=n.data.event.match,this.matchStream=n.data.event.streams,this.twitchStream(0),this.repeat()})}gameChange(n){}twitchStream(n){this.twitchProvider=this.matchStream.filter(function(g){return"twitch"==g.provider}),this.urlVideo=`https://player.twitch.tv/?channel=${this.twitchProvider[n].parameter}&parent=ghabryelhenrique.github.io`}repeat(){setTimeout(()=>{this.getLiveGameDetails()},1e3)}}i.\u0275fac=function(n){return new(n||i)(t.Y36(s.gz),t.Y36(v.n))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-valorant-matches-live"]],decls:10,vars:0,consts:[[1,"comingSoon"],["src","../../../../../assets/killjoy_coming_soon.jpg"]],template:function(n,g){1&n&&(t.TgZ(0,"h2"),t._uU(1,"KILLJOY ainda n\xe3o"),t._UZ(2,"br"),t._uU(3," desenvolveu essa "),t._UZ(4,"br"),t._uU(5," tecnologia"),t.qZA(),t.TgZ(6,"h4"),t._uU(7,"Volte em breve para conferir suas cria\xe7\xf5es"),t.qZA(),t.TgZ(8,"div",0),t._UZ(9,"img",1),t.qZA())},styles:[".match-odds-container[_ngcontent-%COMP%]{display:flex;padding:2rem 0}.team-odd[_ngcontent-%COMP%]{font-weight:700;color:var(--title);margin:0 3.5rem}.team-oods-left[_ngcontent-%COMP%]{clip-path:polygon(0 0,calc(100% - 10px) 0,100% 50%,calc(100% - 10px) 100%,0 100%);text-align:left}.team-odds[_ngcontent-%COMP%]{background:var(--card-color);flex:1 1;display:flex;justify-content:space-evenly;border-radius:.25rem}.partner-logo-container[_ngcontent-%COMP%]{text-align:center;justify-content:center;align-items:center}.team-odds[_ngcontent-%COMP%] > .teamInfo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:3.25rem;height:3.25rem;margin:0 1rem;filter:drop-shadow(0 0 0 #222)}.partner-logo[_ngcontent-%COMP%], .team-odds[_ngcontent-%COMP%]{align-items:center}.team-oods-right[_ngcontent-%COMP%]{padding:1em 0;clip-path:polygon(10px 0,100% 0,100% 100%,10px 100%,0 50%);text-align:right}.vs[_ngcontent-%COMP%]{align-self:center}.main[_ngcontent-%COMP%]{background-color:var(--background)}.pd-8[_ngcontent-%COMP%]{display:flex;justify-content:center}.teamInfo[_ngcontent-%COMP%]{display:flex;align-items:center}.score[_ngcontent-%COMP%]{font-weight:700;height:28px;line-height:28px;font-size:18px}img[_ngcontent-%COMP%]{width:100%;opacity:.5}h2[_ngcontent-%COMP%]{top:15%;left:20%;font-size:10rem}h4[_ngcontent-%COMP%]{top:70%;left:20%;font-size:6rem}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{position:absolute;color:#ece8e1;z-index:1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;box-sizing:border-box;font-weight:400;display:block;overflow:hidden;text-transform:uppercase;font-family:Tungsten-Bold,sans-serif;line-height:.97}.comingSoon[_ngcontent-%COMP%]{background:#000000}a[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;box-sizing:border-box;text-decoration:none;text-transform:uppercase;font-size:1.4rem;display:inline-block;min-width:28.8rem;background:none;border:0;cursor:pointer;padding:.7rem;text-align:center;color:#ece8e1;position:relative;margin-top:0;transform:none;left:auto;font-family:DINNextW05-Bold,arial,georgia,sans-serif}.primaryButton[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-transform:uppercase;font-size:1.4rem;cursor:pointer;text-align:center;color:#ece8e1;font-family:DINNextW05-Bold,arial,georgia,sans-serif;box-sizing:border-box;overflow:hidden;position:relative}"]});const u=[{path:"live/:id",component:i},{path:"history/:id",component:i}];class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.r,m.ez,s.Bz.forChild(u),h.HQ,f.C,o.D,a.b]})},6812:(p,c,e)=>{e.d(c,{n:()=>o});var m=e(2340),s=e(4650),h=e(529);class o{constructor(a){this.http=a,this.baseUrl=m.N.VALORANTESPORTSAPI.ESPORTS_API}getLiveGames(){return this.http.get(`https://${this.baseUrl}/getVods?hl=pt-BR&sport=val`)}getGamesDetails(a){return this.http.get(`https://${this.baseUrl}/event/${a}`)}}o.\u0275fac=function(a){return new(a||o)(s.LFG(h.eN))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}}]);