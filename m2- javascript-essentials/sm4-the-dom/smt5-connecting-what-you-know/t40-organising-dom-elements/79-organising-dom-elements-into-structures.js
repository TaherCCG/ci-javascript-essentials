function buildTableData() {
    let table = document.getElementsByTagName('table');
    let row = document.getElementsByTagName('tr');
    let tableData = [];
    
    for (x = 1; x < row.length; x++) {
        let rows = row[x];
        let field = rows.getElementsByTagName('td');
        
        let name = field[0].innerHTML;
        // console.log(name);
        let rating = field[1].innerHTML;
        // console.log(rating);
        let review = field[2].innerHTML;
        // console.log(review);
        tableData.push({name, rating, review});
        
    }
    return tableData;
    
}

let data=buildTableData();

console.log(data);