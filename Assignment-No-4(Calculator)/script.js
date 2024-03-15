function runBack(){
    var val = document.getElementById('display').value.slice(0, -1);
    document.getElementById('display').value = val;
};