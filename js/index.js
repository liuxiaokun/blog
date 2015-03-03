$(document).ready(function(){

    $.ajax({
        url: "http://localhost:8080/cms/category/0",
        type: 'GET',
        dataType: 'json',

        success: function (data) {
            var categories = data.body;

            if ('SUCCEED' == data.status) {

                for(var i in categories){
                   var tem = categories[i];
                   $("#header ul").append("<li><a href=''>" + tem.name + "</a></li>");
                }
            }
        }
    });

    $.ajax({
            url: "http://localhost:8080/cms/contents",
            type: 'GET',
            dataType: 'json',

            success: function (data) {
                var contents = data.body.list;

                if ('SUCCEED' == data.status) {
                    for(var i in contents){
                       var tem = contents[i];
                      $("#main-left").append("<div class='article'>"+
                        "<div class='article-title'><a hred='#''>" + tem.title + "</a></div> " +
                        "<div class='article-brife'>" + tem.description +"</div>" + 
                        "<div class='article-time'>" + tem.create + "</div>" +
                        "</div>");
                    }
                }
            }
        });

});