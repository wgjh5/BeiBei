jQuery(function($){
    $shows = $(".shows");
     $view = $(".view-LoginStatus");
    if($.cookie("username") != null){
          $view.children().remove();
          var uname = $.cookie("username");

            after();

           $tuichu = $(".tuichu");
            $tuichu.on("click",function(){
                $view.children().remove();
                 $.cookie("username",null,{expires: -1,path:"/"});
               preve();
                
            })
            
    }else{
        preve();
    }
    // ============吸顶菜单==========
    var viewSubNav = document.querySelector(".view-SubNav");
    console.log(viewSubNav);
    window.onscroll = function(){
        if(window.scrollY >= 95){
          viewSubNav.classList.add("fixed");
        }else if(window.scrollY < 95){
          viewSubNav.classList.remove("fixed");
        }
      }

                $("#sidebar-cart").on("mouseover",function(){

                  $(".view-SideBarCart").css("display","block");
                })
                $("#sidebar-cart").on("mouseout",function(){
                  $(".view-SideBarCart").css("display","none");
                })



    // =========== 返回顶部  ===
    
    $("#elevator").toTop();
    
  // =============登陆后
     function after(){
      $(".u1").empty();
         $(".top-cart").on("click",function(){
                   $(".top-cart").attr("href","html/car.html");
                })
         $(".quCar").on("click",function(){
          $(".quCar").attr("href","html/car.html");
         })
             var str = "";
              str +=  '<a class="lv-icon lv1" c-bname="通顶菜单-用户等级图标" clog="" c-emit="click" c-et="event" c-etl="" href="#">'+'</a>'+
                '<a class="striking-link" c-bname="通顶菜单-用户名" clog="" c-emit="click" c-et="event" c-etl="" href="#">'+uname+'</a>'+
                '<a c-bname="通顶菜单-退出" class="tuichu" href="#" rel="nofollow">'+'[退出]'+'</a>';
                $view.append(str);
                $u0 = $(".u0");
                // $("#sidebar-cart").on("mouseover",function(){

                //   $(".view-SideBarCart").css("display","block");
                // })
                // $("#sidebar-cart").on("mouseout",function(){
                //   $(".view-SideBarCart").css("display","none");
                // })
                // $uname = JSON.stringify(uname);
                // console.log(uname);
                // console.log($u0);
                $.ajax({
                        url: 'api/carFind.php',
                        type: 'GET',
                        data: {
                              uname:uname,
                              },
                        success: function(data){
                                data = JSON.parse(data);
                               $len = data.length;
                               $(".liang").text("购物车中共有"+$len+"件商品");
                                // console.log(data);
                                if(data ==""){
                                  var sss = ""
                                    sss +=`<li class="empty-cart" style="font-size: 16px; color: rgb(153, 145, 140); padding: 80px 0px; text-align: center; position: relative; overflow: hidden; list-style: none; cursor: pointer; border-bottom: none;"><span class="note" style="width: 100%; display: block; transition: all 0.2s ease 0s; position: absolute; left: 0px; top: 80px; margin: 0px; padding: 0px;">赶快去挑选商品吧！</span><span class="shopping" style="width: 100%; display: block; transition: all 0.2s ease 0s; position: absolute; left: -100%; top: 80px;"><i class="iconfont">󰅸</i> 去专场逛逛</span></li>`
                                    // console.log(ss);
                                     $(".u0").append(sss);
                                      $(".xiaojiage").text(0.00);
                                      
                                }else if($len <= 4){
                                    xiaogouwu(data);
                                    xiaogouwu1(data);
                                
                                }
                                else if($len >=4 ){

                                  data = data.slice(0, 4);
                                  console.log(data);
                                  xiaogouwu(data);
                                  xiaogouwu1(data);
                                $u0.append(`<li style="display: list-item; width: 100%; padding: 0px; text-align: center; border-bottom: none;" class="l0">
                                <a href="html/car.html" class="cartBox-ListShowMoreBtn" op-value="showMoreBtnText,showMoreBtnLink" op-attr="*,href" style="width: 100%; padding: 0px; text-align: center; border: 0px; font-weight: normal; font-size: 14px; color: rgb(170, 170, 170); height: 37px; line-height: 37px; display: block;">
                                <i class="iconfont">󰅡</i> 查看全部</a>
                                </li>`);
                               
                                $(".u1").append(`<li style="display: list-item; width: 100%; padding: 0px; text-align: center; border-bottom: none;" class="l0">
                                <a href="html/car.html" class="cartBox-ListShowMoreBtn" op-value="showMoreBtnText,showMoreBtnLink" op-attr="*,href" style="width: 100%; padding: 0px; text-align: center; border: 0px; font-weight: normal; font-size: 14px; color: rgb(170, 170, 170); height: 37px; line-height: 37px; display: block;">
                                <i class="iconfont">󰅡</i> 查看全部</a>
                                </li>`);

                                
                                
                               
                               }   
                              }

                            });

          }

// =================登录前
           function preve(){
                var s0 = "";
                s0 += '<span>'+'您好，'+'</span>'+
                    '<a class="view-ActionBack" c-bname="请登录" clog="" c-emit="click" c-et="event" c-etl="" href="html/denglu.html" clog-get="true">'+'请登录'+'</a>' +
                    '<a class="view-ActionBack striking-link" c-bname="免费注册" clog="" c-emit="click" c-et="event" c-etl="" href="html/login.html" rel="nofollow" clog-get="true">'+'免费注册'+'</a>';
                    $view.append(s0);
                    // console.log(s0);
                     var ss = ""
                    ss +=`

                    <li class="empty-cart" style="font-size: 16px; color: rgb(153, 145, 140); padding: 80px 0px; text-align: center; position: relative; overflow: hidden; list-style: none; cursor: pointer; border-bottom: none;"><span class="note" style="width: 100%; display: block; transition: all 0.2s ease 0s; position: absolute; left: 0px; top: 80px; margin: 0px; padding: 0px;">赶快去挑选商品吧！</span><span class="shopping" style="width: 100%; display: block; transition: all 0.2s ease 0s; position: absolute; left: -100%; top: 80px;"><i class="iconfont">󰅸</i> 去专场逛逛</span></li>`
                    // console.log(ss);
                     $(".u0").append(ss);
                    // console.log(s0);
                     $(".xiaojiage").text(0.00);
                      // sideShoping();
                    
                     // function sideShoping(){
                     //      $(".view-SideBarCart").append(` <div wg-view="main" widget-id="widgetCartBox4399008211538371003116" widget-name="widgetCartBox" style="background: transparent; border: 1px solid rgb(255, 84, 130); width: 350px; text-align: left; color: rgb(0, 0, 0); z-index: 29; cursor: default; position: relative;">
                     //        <div wg-view="title" op-value="title" style="padding: 2px 15px; border-bottom: 1px solid rgb(227, 227, 227); background: rgb(255, 249, 251); font-size: 13px; text-align: center; color: rgb(255, 84, 130);">
                     //            <i class="iconfont">󰅹</i> 购物车是空的
                     //        </div>
                     //        <ul wg-view="list" op-each="cartInfo" op-each-item="ListItem" style="background: rgb(255, 255, 255); overflow-y: hidden;">
                     //            <li class="empty-cart" style="font-size: 16px; color: rgb(153, 145, 140); padding: 80px 0px; text-align: center; position: relative; overflow: hidden; list-style: none; cursor: pointer; border-bottom: none;"><span class="note" style="width: 100%; display: block; transition: all 0.2s ease 0s; position: absolute; left: 0px; top: 80px; margin: 0px; padding: 0px;">赶快去挑选商品吧！</span><span class="shopping" style="width: 100%; display: block; transition: all 0.2s ease 0s; position: absolute; left: -100%; top: 80px;"><i class="iconfont">󰅸</i> 去专场逛逛</span></li>
                     //        </ul>
                     //        <div wg-view="footer" style="height: 47px; border-top: 1px solid rgb(227, 227, 227); background: rgb(255, 249, 251);">
                     //            <div wg-view="footerTotal" style="font-size: 13px; color: rgb(102, 102, 102); padding: 10px 15px; position: absolute;">
                     //                小计：<span wg-view="footerTotalNum" op-value="totalPrice" style="color: rgb(229, 51, 99); font-size: 18px;">¥0.00</span>
                     //            </div>
                     //            <div wg-view="footerBtnBar">
                     //                <a href="#" wg-view="footerSettleBtn" op-value="settleBtnText,settleBtnLink" op-attr="*,href" style="background: rgb(255, 84, 130); padding: 4px 12px; font-size: 13px; color: rgb(255, 255, 255); border-radius: 4px; border-width: 1px 1px 2px; border-style: solid; border-color: rgb(255, 60, 112) rgb(255, 60, 112) rgb(229, 51, 99); border-image: initial; float: right; margin-right: 15px; margin-top: 6px; height: 24px; width: auto; line-height: 24px;"><i class="iconfont">󰅹</i>去购物车结算</a>
                     //            </div>
                     //        </div>
                     //        <div wg-view="footerBg">
                     //        </div>
                     //    </div>`);
                        
                     //   }
                   
           }

    $.ajax({
            url: 'api/index.php',
            type: 'GET',
            success: function(data){
                var data = JSON.parse(data);
                var res = [];
                // for(var key in data){
                //     res += key + "=" + data[key] + "&";
                // }
                // console.log(res);
                for(var i=0;i<data.length;i++){
                   
              $shows.append( `<a class="m-sale clearfix view-EventListItem common-item-show" clog="" c-emit="show;click" c-et="event" c-etl="106344322"  target="_blank" clog-get="true">
                            <div class="m-item-show-wrap">
                                <div class="m-item-detail ">
                                    <img class="lazy" src="${data[i].imgsrc}" data-guid
                                    ="${data[i].id}">
                                    <p class="title">
                                        ${data[i].title}
                                    </p>
                                    <div class="price-info">
                                        <p class="cur-price">
                                            <span class="currency">¥</span><span class="price-num">${data[i].curprice}</span><span class="price-little">${data[i].pricelittle}</span>
                                        </p>
                                        <p class="old-price">
                                            ${data[i].oldprice}
                                        </p>
                                        <p class="discount-desc">
                                             ${data[i].discountdesc}折
                                        </p>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>` );
                         
                        res.push(data[i]);
                   }
                          console.log(res);
                          
                    $(".m-sale").each(function(idx,item){
                          
                           item.onclick = function(){
                               
                                 var str = "";
                                for(var key in res[idx]){
                                    str += key + "=" + res[idx][key] + "&";
                                }
                                str = str.slice(0,-1);
                                location.href = "html/details.html?" + encodeURI(str);
                                console.log(str);
                           }

            }); 
        }
            

    });
    $(".J_sort").on("mouseover","li",function(){
      // console.log($(".J_sort").find("li"));
      $(".J_sort").find("li").removeClass("current");
      $(this).addClass("current");
       // $z = $(this).filter("li[part]").attr("part");
       // console.log($z);
       // console.log($("'.'+$z"));
       var i = $(this).index();
       // $t = $(this).parent().parent().find('[de="' + $z + '"]');
        $(".m-h-items").eq(i).css("display","block").siblings().not(".J_sort").css("display","none");


    })

// ====================================
                function xiaogouwu(data){
                                          var num0 = [];
                                      $.each(data,function(idx,item){
                                  var aaa = item.imgsrc.split("../").join("");
                                  num0.push((item.curprice*item.qty));
                                  console.log(aaa);
                                  // console.log(item);
                                  $u0.append(`<li wg-view="item" style="display: list-item; padding: 12px; list-style: none; position: relative; border-bottom: 1px dotted rgb(190, 186, 183); overflow: hidden; height: 60px;">
                                    <a href="#" wg-view="imglink" op-value="itemLink" op-attr="href">
                                      <img wg-view="img" op-value="imgUrl" op-attr="src" src="${aaa}" style="border: 2px solid rgb(204, 204, 204); background: rgb(255, 255, 255); padding: 2px; width: 50px; height: 50px; position: relative; z-index: 4;"></a>
                                    <a href="#" wg-view="name" op-value="title,itemLink" op-attr="*,href" style="position: absolute; left: 0px; top: 15px; padding: 0px 10px 0px 80px; line-height: 1.2em; height: 30px; overflow: hidden; font-size: 13px; margin: 0px; width: 50%; z-index: 3;">${item.title}</a>
                                    <p wg-view="sku" op-value="sku_props" style="position: absolute; color: rgb(170, 170, 170); left: 0px; top: 52px; padding: 0px 10px 0px 80px; line-height: 1.2em; height: 14px; overflow: hidden; font-size: 12px; margin: 0px; width: 50%;">规格:红心柚2个装</p>
                                    <p wg-view="price" op-value="price" style="position: absolute; color: rgb(255, 84, 130); right: 15px; top: 25px; overflow: hidden; font-size: 16px; padding-left: 80px; margin: 0px; width: 30%; line-height: 1em; text-align: right;">¥${item.curprice*item.qty}
                                      <br>
                                      <span wg-view="num" style="display: inline; color: rgb(136, 136, 136); font-size: 13px;">x${item.qty}</span></p>
                                  </li>`)
                                })
                                       var sum=0;
                                    for(var i=0;i<num0.length;i++){
                                      sum += parseInt(num0[i]);
                                    }
                                     $(".xiaojiage").text(sum);
                                     $(".cart-num").text(num0.length);
                                  }
// ====================================
$(".side-panel-App").on("mouseover",function(){
  $(".side-panel-App").find(".side-panel-phone").css("display","block");
})
$(".side-panel-App").on("mouseout",function(){
  $(".side-panel-App").find(".side-panel-phone").css("display","none");
})

// $("#sidebar-cart").on("mouseover",function(){
//   $(".view-SideBarCart").css("display","block");
// })
// $("#sidebar-cart").on("mouseout",function(){
//   $(".view-SideBarCart").css("display","none");
// })

                    function xiaogouwu1(data){
                                          var num0 = [];
                                      $.each(data,function(idx,item){
                                  var aaa = item.imgsrc.split("../").join("");
                                  num0.push((item.curprice*item.qty));
                                  console.log(aaa);

                                  // console.log(item);
                                  $(".u1").append(`<li wg-view="item" style="display: list-item; padding: 12px; list-style: none; position: relative; border-bottom: 1px dotted rgb(190, 186, 183); overflow: hidden; height: 60px;">
                                    <a href="#" wg-view="imglink" op-value="itemLink" op-attr="href">
                                      <img wg-view="img" op-value="imgUrl" op-attr="src" src="${aaa}" style="border: 2px solid rgb(204, 204, 204); background: rgb(255, 255, 255); padding: 2px; width: 50px; height: 50px; position: relative; z-index: 4;"></a>
                                    <a href="#" wg-view="name" op-value="title,itemLink" op-attr="*,href" style="position: absolute; left: 0px; top: 15px; padding: 0px 10px 0px 80px; line-height: 1.2em; height: 30px; overflow: hidden; font-size: 13px; margin: 0px; width: 50%; z-index: 3;">${item.title}</a>
                                    <p wg-view="sku" op-value="sku_props" style="position: absolute; color: rgb(170, 170, 170); left: 0px; top: 52px; padding: 0px 10px 0px 80px; line-height: 1.2em; height: 14px; overflow: hidden; font-size: 12px; margin: 0px; width: 50%;">规格:红心柚2个装</p>
                                    <p wg-view="price" op-value="price" style="position: absolute; color: rgb(255, 84, 130); right: 15px; top: 25px; overflow: hidden; font-size: 16px; padding-left: 80px; margin: 0px; width: 30%; line-height: 1em; text-align: right;">¥${item.curprice*item.qty}
                                      <br>
                                      <span wg-view="num" style="display: inline; color: rgb(136, 136, 136); font-size: 13px;">x${item.qty}</span></p>
                                  </li> `
                         );
                                })
                                       var sum=0;
                                    for(var i=0;i<num0.length;i++){
                                      sum += parseInt(num0[i]);
                                    }
                                     $(".xiaojiage").text(sum);
                                     $(".cart-num").text(num0.length);
                                  }


})












