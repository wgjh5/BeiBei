jQuery(function($){
  // $pure = $(".pure-table");
  $tbody = $(".view-CartList");
  $uname = $.cookie("username");
  
  // =========生成购物车列表
  if($uname != null){


  $.ajax({
            url: '../api/carFind.php',
            type: 'GET',
            data: {uname:$uname},
            success: function(data){
                    data = JSON.parse(data);
                    // console.log(data);
                    // $.each(data,function(idx,item){
                    //   console.log(idx);
                    // })
                    
                    for(var i=0;i<data.length;i++){
                      $tbody.append('<tr class="event-entry J_eventEntry" data-eventid="'+data[i].id+'">'+
                                      '<td colspan="7" class="td">'+
                                      '<input type="checkbox" class="J_eventCheck" data-eventid="'+data[i].id+'" checked="checked">'+
                                      '<span class="event-title">'+
                                        '<a href="#" target="_blank">植护品牌特惠</a></span>'+
                                    '</td>'+
                      '</tr>'+
                       '<tr class="item-entry view-ItemEntry " data-cartid="1292545707" data-eventid="'+data[i].id+'">'+
                          '<td class="cart-td-check first-for-ie">'+
                            '<input class="J_itemCheck" data-eventid="'+data[i].id+'" data-cartid="1292545707" type="checkbox" checked="checked">'+
                            '</td>'+
                          '<td class="cart-td-item-info clearfix">'+
                            '<a class="image" href="#" target="_blank">'+
                              '<img src="'+data[i].imgsrc+'">'+
                              '</a>'+
                            '<a class="title" href="#" target="_blank">'+'【'+data[i].title+
                            '</a>'+
                            '</td>'+
                            '<td class="cart-td-item-sku">'+
                            '<p>'+data[i].title+
                              '</p>'+
                          '</td>'+
                          '<td class="cart-td-item-price">'+
                            '<p class="view-ItemEntryPrice">'+data[i].curprice+
                            '</p>'+
                            '<p class="strike">'+data[i].oldprice+
                            '</p>'+
                            '</td>'+
                          '<td class="cart-td-number">'+
                            '<div>'+
                              '<a href="javascript:;" class="number-op del-num disable view-ReductionItemNumBtn">'+
                                '<i class="iconfont">'+'󰅶'+
                                '</i>'+
                                '</a>'+
                              '<input readonly="readonly" data-eventid="106271683" data-cartid="1292545707" class="view-ItemEntryNum" type="text" value="'+data[i].qty+'">'+
                              '<a href="javascript:;" class="number-op add-num view-AdditionItemNumBtn">'+
                                '<i class="iconfont">'+'󰅵'+'</i>'+
                                '</a>'+
                            '</div>'+
                            '<div class="cart-td-tip">'+
                              '<p class="view-ItemEntryNumTipPurchase tip-purchase">'+
                                '<i class="iconfont">'+'󰅂'+'</i>'+'限购'+
                                '<span>'+5+'</span>'+'件'+'</p>'+
                              '<p class="view-ItemEntryNumTipLeftnum tip-leftnum">'+
                                '<i class="iconfont">'+'󰅓'+'</i>'+'即将售罄'+'</p>'+
                              '<p class="view-ItemEntryNumTipStock tip-stock">'+
                                '<i class="iconfont">'+'󰅓'+'</i>'+'仅剩'+
                                '<span>'+7157+'</span>'+'件'+'</p>'+'</div>'+
                          '</td>'+
                          '<td class="cart-td-subtotal">'+
                            '<span class="price view-ItemSubtotal">'+data[i].xiaoji+'</span>'+'</td>'+
                          '<td class="cart-td-ops last-for-ie">'+
                            '<a href="javascript:;" data-eventid="106271683" data-cartid="1292545707" class="view-DelItemBtn">'+'删除'+'</a>'+
                            '</td>'+
                  '</tr>') 
                      $len = data[i].id.length;
                    /*  $qtyAll=data[i].qty.length;
                      console.log($qtyAll);*/
                    } 

                      // ==========获取元素
                      $checkAll = $(".J_checkAll");
                      $checkAll2 = $("#s-all-f");
                      $checkBox = $(":checkbox").not(".J_checkAll");
                      $checkBox2 = $(":checkbox").not("#s-all-f");
                      $check = $(".J_eventCheck");
                      $itemCheck = $(".J_itemCheck");
                      $input = $(".view-ItemEntryNum");

                      $check.addClass("aa");
                      $qian = $(".qian");
                      zongshu();
                     
                      // console.log($jian);
                     // ==========
                    $checkAll.on("click",function(){
                      $checkBox.prop("checked",this.checked);
                      $checkAll2.prop("checked",this.checked);
                      zongshu();
                    })
                    $("#s-all-f").on("click",function(){
                      $checkBox.prop("checked",this.checked);
                      $checkAll.prop("checked",this.checked);
                      zongshu();
                     });
                    
                        $(".J_eventCheck").on("click",function(){ 
              
                         
                        $z = $(this).filter("input[data-eventid]").attr("data-eventid");
                       
                        $t = $(".J_itemCheck").filter('[data-eventid="' + $z + '"]')
                         $t.prop("checked",this.checked);
                        
                    
                        changeCheckAll();
                     
                        zongshu();
                      })
                     
                    
                    $itemCheck.on("click",function(){
                      $e = $(this).filter("input[data-eventid]").attr("data-eventid") ;
                      $r = $(".J_eventCheck").filter('[data-eventid="' + $e + '"]')
                      $r.prop("checked",this.checked);
                      changeCheckAll();
                      zongshu();
                     

                    })
                 
                  

                      // ==============
                      $add = $(".add-num");
                      $jian = $(".del-num");
                      
                      // console.log($add);
                     // ==========加
                    $.each($add,function(idx,item){
                      $(this).click(function(){
                        $a = Number($(this).closest(".cart-td-number").find(".view-ItemEntryNum").val());
                       $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val($a+1);
                      zongshu();
                      // ===============
                       $shuliang = $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val();
                      $id = $(this).closest(".item-entry").attr("data-eventid");

                        change();
                      })
                    })
                    // ======减
                     $.each($jian,function(idx,item){
                      $(this).click(function(){
                        $a = Number($(this).closest(".cart-td-number").find(".view-ItemEntryNum").val());
                      $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val($a-1);
                       if($a <=1){
                        $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val(1);
                       }
                      zongshu();
                      $shuliang = $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val();
                      $id = $(this).closest(".item-entry").attr("data-eventid");

                      change();
                      })

                    })

                     // =======删除
                     $.each($(".view-DelItemBtn"),function(idx,item){
                     $(this).click(function(){
                      // $(this).closest(".view-CartList");
                      // $(this).closest(".view-CartList").remove("data-eventid");
                      $ea = $(this).closest(".view-CartList").find("tr[data-eventid]").attr("data-eventid") ;
                      console.log($ea);
                       $(this).closest(".view-CartList").find('[data-eventid="' + $ea + '"]').remove();
                       zongshu();
                      
                      $id = $(this).closest(".item-entry").attr("data-eventid");
                       $.ajax({
                            url: '../api/del.php',
                            type: 'POST',
                            data: {id:$id,
                                  uname:$uname,
                                  },
                            success: function(data){
                                    console.log(data);
                                  }
                                });
                    })
                  })
                  // =======删除所有
                  $(".view-BatchDelBtn").on("click",function(){
                    $(this).parent().parent().parent().prev().prev().find(".view-CartList").empty();
                    zongshu();
                    // $id = $(this).closest(".item-entry").attr("data-eventid");
                       $.ajax({
                            url: '../api/delAll.php',
                            type: 'POST',
                            data: {
                                  uname:$uname,
                                  },
                            success: function(data){
                                    console.log(data);
                                  }
                                });
                       // console.log($id);
                       console.log($uname);
                  })

 
// ========================================
                    function zongshu(){
                     $jian = $(".jian");
                      var input = $(".td input:checked");
                        ;

                        var zong=0;
                        $p = $(".view-ItemEntryPrice");
                        // console.log($p.text());
                      $.each(input,function(idx,item){
                        // console.log(jiage)
                        
                        zong+=$(this).closest(".td").find("input[ type='checkbox' ]").length;
                       
                      })

                   
                       console.log(zong);
                       $jian.text(zong);
                       function qian(){
                         var input1 = $(".cart-td-check input:checked");
                         $num = $(".view-ItemEntryNum");
                         var jiage=0;
                          $.each(input1,function(idx,item){
                            $.each($num,function(idx1,item1){
                              jiage += parseInt($(this).closest(".view-ItemEntry").find(".view-ItemEntryPrice").text()*item1.value);
                            })
                            
                            // console.log($(this).closest(".cart-td-check"));
                            // console.log(jiage);
                          })
                          $(".qi").text(jiage);
                        $("#pay-btn").on("click",function(){
                            console.log($(".qi").text());
                          // var str = "";
                          // str += $(".qi").text() +"&";
                          location.href = "jiesuan.html?"+encodeURI( $(".qi").text());
                        })

                           console.log(jiage);
                       }
                        qian();

                      }


// =================================
                  // function change(){
                    // $qty = 
                    // $.ajax({
                    //   url: '../api/changeCar.php',
                    //   type: 'GET',
                    //   data: {id:$id,
                    //         uname:$uname,
                    //          qty:$qty},
                    //   success: function(data){
                    //           data = JSON.parse(data);
                    //         }
                    //       )}
                  // }
    
                  function change(){
                    
                          $.ajax({
                            url: '../api/changeCar.php',
                            type: 'POST',
                            data: {id:$id,
                                  uname:$uname,
                                   qty:$shuliang},
                            success: function(data){
                                    console.log(data);
                                  }
                                });
                      console.log($id);
                      console.log($shuliang);
                      console.log($uname);
                  }








// =================================
                      
                    function changeCheckAll(){
                      $checkeds = $checkBox.filter(":checked").not("#s-all-f");
                     
                      if($checkeds.length == $checkBox.length  ){
                          $checkAll[0].checked =  true;
                          $checkAll2[0].checked = true;
                      }else{
                          $checkAll[0].checked = false;
                          $checkAll2[0].checked = false;
                      }
                  } 
                     
            }  
        })
}
        
// ===========购物车列表end

// ==========传总价到结算页
 






})






























