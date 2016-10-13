//<![CDATA[
window.onload=function(){
var suggestedIngred = [	'Apple',
						'Almond',
						'Apricot',
						'Artichoke',
						'Asparagus',
						'Avocado',
						'Bacon',
						'Baking Powder',
						'Bay Leaf',
						'Balsamic Vinegar',
						'Cabbage',
						'Dates',
						'Eggs',
						'Fennel'];
var list = document.getElementById('ingredients');

suggestedIngred.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});
}//]]>

function createTable() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
		var entry = document.getElementById("foods").value;
    cell1.innerHTML = entry;
}


/*
function createTable()
{
    var num_rows = document.getElementById('rows').value;
    var num_cols = document.getElementById('cols').value;
    var theader = '<table border="1">\n';
    var tbody = '';

    for( var i=0; i<num_rows;i++)
    {
        tbody += '<tr>';
        for( var j=0; j<num_cols;j++)
        {
            tbody += '<td>';
            tbody += 'Cell ' + i + ',' + j;
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
}
*/
