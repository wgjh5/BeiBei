jQuery(function($){
    $uname = $.cookie("username");
    var params = decodeURI(location.search).slice(1);
    console.log(params);
    $(".cart-payment").text(params);
    $(".price").text("￥"+ params);
    if($uname != null){


  $.ajax({
            url: '../api/carFind.php',
            type: 'GET',
            data: {uname:$uname},
            success: function(data){
                    data = JSON.parse(data);
                    console.log(data);
                     for(var i=0;i<data.length;i++){
                        $(".tbody").append(`<tr class="event-entry">
                                <td colspan="6">
                                  <div class="event-info">由
                                    <span class="event-title">渊之源</span>从
                                    <span class="event-title">浙江杭州</span>发货</div>
                                  <div class="event-remark">
                                    <span class="c-999">交易备注：</span>
                                    <input type="text" class="view-RemarkInput pure-u-1-4" data-eid="${data[i].id}" value="" placeholder="选填，可告诉商家您的特殊要求"></div>
                                </td>
                              </tr>
                              <tr class="item-entry">
                                <td class="cart-td-item-info clearfix first-for-ie">
                                  <a class="image" target="_blank" href="#">
                                    <img src="${data[i].imgsrc}"></a>
                                  <a style="overflow: hidden;text-overflow: ellipsis;-webkit-line-clamp: 3;-webkit-box-orient: vertical;display: -webkit-box;" class="title" target="_blank" href="#">${data[i].title}</a></td>
                                <td class="cart-td-item-sku">
                                  <p>颜色：红色小猴
                                    <br>容量：520ml直饮盖
                                    <br></p></td>
                                <td class="cart-td-item-price">
                                  <p>${data[i].curprice}</p>
                                  <p class="strike">${data[i].oldprice}</p></td>
                                <td class="cart-td-discount">
                                  <span>5.7折特卖</span></td>
                                <td class="cart-td-number">
                                  <p>${data[i].qty}</p>
                                </td>
                                <td class="cart-td-subtotal last-for-ie">${data[i].xiaoji}</td></tr>
                              <tr class="footer-entry view-FooterEntry for-orderconfirm">
                                <td colspan="6">
                                  <div class="subtotal-row" style="display: none;">
                                    <span class="price">${data[i].xiaoji}</span>
                                    <span class="title">专场小计：</span></div>
                                  <div class="subtotal-row">
                                    <span class="price view-FreightTax" data-event-id="${data[i].id}">0.00</span>
                                    <span class="title">进口税：</span></div>
                                  <div class="subtotal-row">
                                    <span class="price view-Freight" data-event-id="${data[i].id}">0.00</span>
                                    <span class="title">运费：</span></div>
                                  <div class="subtotal-row topline">
                                    <span class="price view-EventSubTotal " data-event-id="${data[i].id}">${data[i].xiaoji}</span>
                                    <span class="title">专场小计：</span></div>
                                </td>
                              </tr>
                         `);
                         $(".ming").text("lemon 收 / "+data[i].name+"")
                    }

                }
        })
}







})