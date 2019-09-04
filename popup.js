



        var text="untaged";
            $(function() {
  var list = $('.js-dropdown-list');
  var link = $('.js-link');
  link.click(function(e) {
    e.preventDefault();
    list.slideToggle(200);
  });
  list.find('li').click(function() {
    text = $(this).html();
    var icon = '<i class="fa fa-chevron-down"></i>';
    link.html(text+icon);
    list.slideToggle(200);

  });

});

            $(document).ready(function(){
                chrome.tabs.query({currentWindow: true,active: true},function(tabs){

                    $("#title").val(tabs[0].title);
                    $("#url").val(tabs[0].url);
                });
            });




 $(document).ready(function(){

    $("#sub").click(function(){

        

       /* var table = document.getElementById("bookmarks");
        var row = table.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // Add some text to the new cells:
        cell1.innerHTML = $('#title').val();
        cell2.innerHTML = 1;
        cell3.innerHTML = Date();*/

        var url = $('#url').val();
        var title = $('#title').val();
        var tag = text;

        if( !url.includes("http://") && !url.includes("https://") )
        {   url = "http://" + String(url); }
            tag = tag.toUpperCase();
            title = String(tag) + " :: " + String(title);

        $.ajax({
            type:'GET',
            url:'https://bookmarks.pythonanywhere.com/add_get',
            data:{
                'title':title,
                'tag':tag,
                'ur':url
                
            },
            dataType: 'json',
            sucess:function(data){
                alert(" gf");
            },
        });

    


    setTimeout(function(){ window.close(); }, 400);

     });


});