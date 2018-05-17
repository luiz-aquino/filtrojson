var jsonFilterApi = (($) =>
{
    return {
        init: function() {
            this.ui.init();
            this.events.init();
        },
        ui: {
            init: function() {
                this.jsonDiv();
                this.filterDiv();
                this.resultDiv();
            },
            jsonDiv: function() {
                var height = $(window).height();
                $('#jsonDiv').css("min-height", (height -40) + "px")
                var editor = ace.edit('jsonDiv');
                editor.setTheme("ace/theme/monokai");
                editor.session.setMode("ace/mode/json");
            },
            filterDiv: function() {
                var height = $(window).height();
                $('#jsEditor').css("min-height", (height -40) + "px").html("function filter(json){ \n\nreturn json; \n}")
                var editor = ace.edit('jsEditor');
                editor.setTheme("ace/theme/monokai");
                editor.session.setMode("ace/mode/javascript");
            },
            resultDiv: function(){
                var height = $(window).height();
                $('#jsonResult').css("min-height", (height -40) + "px")
                var editor = ace.edit('jsonResult');
                editor.setTheme("ace/theme/monokai");
                editor.session.setMode("ace/mode/json");
            }   
        },
        events: {
            init: function(){
                this.onClickEnterFilter();
            },
            onClickEnterFilter: function() {
                var div = $('#jsEditor');
                div.off("keyup");
                div.on("keyup", function(e){
                    // if(e.which === 13){
                        var editor = ace.edit('jsEditor');
                        var json = ace.edit('jsonDiv');
                        var result = ace.edit('jsonResult');
                        var method = editor.getValue();
                        try{
                            eval(method);
                            if(filter !== null){
                                var obj = JSON.parse(json.getValue());
                                var value = filter(obj);
                                result.setValue(JSON.stringify(value, null, 2))
                            }
                        }
                        catch(e){
                            console.log(erro);
                        }
                    // }
                })
            }
        }
    }
})(jQuery)