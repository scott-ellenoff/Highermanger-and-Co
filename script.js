var spreadsheetID = "1lEHX9Ka3fg0qzjiAaqGPPVP5_JuOTyoEGtVo9wdRmec"
$(document).ready(function(){
    var url = "https://spreadsheets.google.com/feeds/cells/" + spreadsheetID + "/1/public/full?alt=json";
    $.getJSON(url, function(data){
        var entry = data.feed.entry;
        var ids = [];
        var teamMembers = [];
        var titles = [];
        var currentTasks = [];
        var capacity = [];
        var task = [];
        var incharge = [];
        for(var i =0; i<entry.length; i++){
            e = entry[i]
            cellLetter = e.title.$t.charAt(0);
            cellNumber = parseInt(e.title.$t.substr(1));
            console.log(cellNumber);
            if(e.title.$t.includes("L") && cellNumber>8){
                ids.push(e.content.$t);
            }
            else if(e.title.$t.includes("M") && cellNumber>8){
                teamMembers.push(e.content.$t);
            }
            else if(e.title.$t.includes("N") && cellNumber>8){
                titles.push(e.content.$t);
            }
            else if(e.title.$t.includes("R") && cellNumber>8){
                currentTasks.push(e.content.$t);
            }
            else if(e.title.$t.includes("P") && cellNumber>8){
                capacity.push(e.content.$t);
            }
            else if(e.title.$t.includes("C") && cellNumber>8){
                task.push(e.content.$t);
            }
            else if(e.title.$t.includes("E") && cellNumber>8){
                incharge.push(e.content.$t);
            }
        }
        for(var i = 0; i<ids.length; i++){
            $("#teamMembers").append(
                "<tbody><td>"+
                ids[i]+
                "</td><td>"+
                teamMembers[i]+
                "</td><td>"+
                titles[i]+
                "</td><td>"+
                currentTasks[i]+
                "</td><td>"+
                capacity[i]+
                "</td></tbody>"
            );
        }
        for(var i =0; i<task.length; i++){
            $("#tasks").append(
                "<tbody><td>"+
                task[i]+
                "</td><td>"+
                incharge[i]+
                "</td></tbody>"
            );
        }
    });
});