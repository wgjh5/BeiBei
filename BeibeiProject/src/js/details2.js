jQuery(function($){
    $view = $(".view-MainImg");
    $xiaotu = $(".xiaotu");
    $shuoming = $(".shuoming");
    $p0 = $(".p0");
    $curprice = $(".curprice");
    $oldprice = $(".oldprice");
    $discountdesc = $(".discountdesc");
    $jiesheng = $(".jiesheng");
    $guige = $(".guige");
    // console.log($guige);
    // =======================
    
    $("#elevator").toTop(); 
    
    // =====================生成详情表
    var params = decodeURI(location.search).slice(1,-1);
                var paramsArr = params.split("&");

                var paramsObj = {};
                paramsArr.forEach(function(item){
                    var arr = item.split("=");
                    paramsObj[arr[0]] = arr[1];
                });
                if(!/^..\//.test(paramsObj.imgsrc)){

                    $view.attr("src","../"+paramsObj.imgsrc);
                    $xiaotu.attr("src","../"+paramsObj.imgsrc);
                    $shuoming.append(paramsObj.title);
                    $p0.append(paramsObj.title);
                    $curprice.text(paramsObj.curprice);
                    $oldprice.text(paramsObj.oldprice);
                    $discountdesc.text(paramsObj.discountdesc+'折');
            
                    $guige.attr("src","../"+paramsObj.imgsrc);
                }else{
                    $view.attr("src",paramsObj.imgsrc);
                    $xiaotu.attr("src",paramsObj.imgsrc);
                    $shuoming.append(paramsObj.title);
                    $p0.append(paramsObj.title);
                    $curprice.text(paramsObj.curprice);
                    $oldprice.text(paramsObj.oldprice);
                    $discountdesc.text(paramsObj.discountdesc+'折');
                    
                  $guige.attr("src",paramsObj.imgsrc);
                }

            // =============添加购物车
            $carAdd = $(".cantAdd");
            // ======判断是否为登录状态
            if($.cookie("username") != null){
                $add = $(".add-num");
                $del = $(".del-num");
                $input = $(".view-BuyNum");
                $a = 1;
             
            // val = $("#id")[0].value; $("#id")[0].value = "new value"; 赋值： $("#id")[0].value = "new value";
            // $jia = ++; 
            // console.log($carAdd);
            // console.log($jieshao);
            // console.log($xiaoji);
            
            // console.log($curprice);
            // console.log($title);
            // console.log($oldprice);
            // console.log($imgsrc);
           
            // console.log($name);
            // function jia(){

            // }
            $add.on("click",function(){
                // console.log() ;
                // var a = parseInt($input.val());
                $a++;
                 $input.val($a);
                  // console.log($input.val());
                  $qty=$input.val();
            })
           
            $del.on("click",function(){
                $a--;
                if($a < 1){
                    $a = 1;
                }
                 $input.val($a);
                  $qty=$input.val();
            })






            $name = $.cookie("username");
            $curprice = paramsObj.curprice;
            $title = paramsObj.title;
            $oldprice = paramsObj.oldprice;
            $id = paramsObj.id;
            // console.log($id);
            // console.log($input);
            $qty = $input.val();
            console.log($qty);
            $xiaoji = $curprice;
            $imgsrc = $(".view-MainImg").attr("src");
            $jieshao = $title;
            // if($id == $id){

            //         $qty++;
            //     } 
            $carAdd.on("click",function(){
                
                $.ajax({
                    url: '../api/carAdd.php',
                    type: 'POST',
                    data: { id :$id,
                            uname: $name,
                            imgsrc:$imgsrc,
                            utitle:$title,
                            jieshao:$jieshao,
                            curprice:$curprice,
                            oldprice:$oldprice,
                            xiaoji:$xiaoji,
                            qty:$qty},
                    success: function(data){

                            if(data == "true"){
                                alert("插入成功");
                                }
                            }
                            // console.log(data);
                    }) 
            })

 }else{
    $carAdd.on("click",function(){
        $carAdd.attr("href","../html/denglu.html");
    })
 }

// =======================放大镜=================================

                $("#zoom_01").ezPlus();
                $("#zoom_03").ezPlus({
                    gallery: 'gallery_01',
                    cursor: 'pointer',
                    galleryActiveClass: "active",
                    imageCrossfade: true,
                    loadingIcon: "images/spinner.gif"
                });

                $("#zoom_03").bind("click", function (e) {
                    var ez = $('#zoom_03').data('ezPlus');
                    ez.closeAll(); //NEW: This function force hides the lens, tint and window
                    $.fancybox(ez.getGalleryList());
                    return false;
                });

            // });

 



})




