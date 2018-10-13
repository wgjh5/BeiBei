jQuery(function($){
    $shows = $(".m-item-show-wrap");
    $jiage = $(".jiage");
    $zonghe = $(".z-current");
    $xiaoliang = $(".xiaoliang");
// =======totop============
    $("#elevator").toTop();
// ================
    $.ajax({
            url: '../api/global.php',
            type: 'GET',
            success: function (data){
                var data = JSON.parse(data);
                var shangpin = new Array;
                var priceArr = new Array;
                // shangpin = data.slice(0, 20);
                // shuchu(shangpin);
                huan1();
                 // var shangpin2 = new Array;
                 function huan1(){
                   priceArr = [];
                   shangpin = data.slice(0, 20);
                   shuchu(shangpin);
                 }

               
               
                // console.log(shangpin2);
                // console.log(shangpin);
                
                // shangpin = data
                // =======换页==========
                console.log($(".tow"));
                function huan2(){
                   priceArr = [];
                   shangpin = data.slice(21, 41);
                   shuchu(shangpin);
                   // $(".disabled").css("display","block");
                }
                function huan3(){
                   priceArr = [];
                   shangpin = data.slice(41, 61);
                   shuchu(shangpin);
                }
                function huan4(){
                   priceArr = [];
                   shangpin = data.slice(61, 81);
                   shuchu(shangpin);
                }
                $(".one").on("click",function(){
                  // $(this).addClass("current");  
                    huan1();
                  })
               $(".tow").on("click",function(){
                // $(this).prev().removeClass("current");
                  huan2();
                // $(this).addClass("current");
                 // $(this).siblings().css({"background-color":"#fff","color":"#777"});
                // $(this).hover(function() {
                //  $(this).css("color", "#fff");
                //  });
              })
                // $(this).attr("hover","none");
                // $(this).off('mouseover').unbind('mouseleave');
                  

                //   })
                $(".three").on("click",function(){
                   huan3();
                   // $(this).addClass("current");
                   // $(this).siblings().css({"background-color":"#fff","color":"#777"});
                // $(this).hover(function() {
                //  $(this).css("color", "#fff");
                //  });

                })
                $(".four").on("click",function(){
                  huan4();
                  // $(this).addClass("current");
                   // $(this).siblings().css({"background-color":"#fff","color":"#777"});
                // $(this).hover(function() {
                //  $(this).css("color", "#fff");
                //  });

                })
                  console.log($(".xia"));
                  var p = new Promise(function(resolve, reject){ 
                    //做一些异步操作 
                    $(".xia").on("click",function(){
                      huan2();
                      resolve(); 
                    })
                    // setTimeout(function(){ 
                    //   // console.log('执行完成'); 
                     
                    // }, 2000); }
                  }); 
                  p.then(function(){
                     $(".xia").on("click",function(){
                       huan3();
                      })
                       // resolve();
                       // huan4();
                      // huan2();
                  }) 
                 p.then(function(){
                   $(".xia").on("click",function(){

                       // huan3();
                       huan4();
                        })
                      // huan2();
                  }) 
                shuchu(shangpin);
                // ==========把商品输出到页面
                 function shuchu(){
                    $shows.empty();
                     for(var i=0;i<shangpin.length;i++){
                          $shows.append( `<div class="m-item-detail">
                              <a class=""  target="_blank" clog-get="true">
                                <img class="lazy" src="${shangpin[i].imgsrc}" shangpin-guid="${shangpin[i].id}" style="display: inline;">
                                <p class="title">${shangpin[i].title}</p>
                                <div class="price-info">
                                  <p class="cur-price">
                                    <span class="currency">¥</span>
                                    <span class="price-num">${shangpin[i].curprice}</span></p>
                                  <p class="old-price">¥${shangpin[i].oldprice}</p>
                                  <p class="discount-box">${shangpin[i].discountdesc}折</p></div>
                              </a>
                            </div>` );
                          priceArr.push(shangpin[i]);
                      }
                      zhixing();
                 }

                 // 排序==========================
                   var da = true;
                $jiage.on("click",function(){
                    // console.log(priceArr);
                    if(da == true){
                        var res = priceArr.sort(function(a,b){
                        return a.curprice - b.curprice;
                        
                        });
                          paixu();
                    }else if(da == false){
                         var res = priceArr.sort(function(a,b){
                         return b.curprice - a.curprice;
                         });
                         paixu();
                    }
                    da = ! da;
                    console.log(res);
                    function paixu(){
                        $shows.empty();
                    for(var i =0;i<res.length;i++){
                        console.log(res);
                        
                         $shows.append( `<div class="m-item-detail">
                              <a class=""  target="_blank" clog-get="true">
                                <img class="lazy" src="${res[i].imgsrc}" data-guid="${res.id}" style="display: inline;">
                                <p class="title">${res[i].title}</p>
                                <div class="price-info">
                                  <p class="cur-price">
                                    <span class="currency">¥</span>
                                    <span class="price-num">${res[i].curprice}</span></p>
                                  <p class="old-price">¥${res[i].oldprice}</p>
                                  <p class="discount-box">${res[i].discountdesc}折</p></div>
                              </a>
                            </div>` );
                    }
                    zhixing();
                }
                     
                     
                })
                
                $zonghe.on("click",function(){
                    shuchu();
                })
                $xiaoliang.on("click",function(){
                    shuchu();
                })


                // =================传数据到详情页=========
                function zhixing(){
                     $(".m-item-detail").each(function(idx,item){
                          
                           item.onclick = function(){
                               
                                 var str = "";
                                for(var key in priceArr[idx]){
                                    str += key + "=" + priceArr[idx][key] + "&";
                                }
                                str = str.slice(0,-1);
                                location.href = "details.html?" + encodeURI(str);
                                console.log(str);
                           }

            }); 
                }
                zhixing();

                
            }
                         
        })
       
 
   
})



















